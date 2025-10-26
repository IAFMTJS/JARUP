'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, RotateCw, Award, Star } from 'lucide-react';

type GameType = 'flashcards' | 'memory' | 'typing' | 'matching';

export default function GamesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  const gameType = (searchParams.get('type') || 'flashcards') as GameType;

  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState({
    level: 1,
    lives: 3,
    timeLeft: 300,
  });
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  const cards = language === 'japanese'
    ? [
        { id: 0, front: 'あ', back: 'a' },
        { id: 1, front: 'い', back: 'i' },
        { id: 2, front: 'う', back: 'u' },
        { id: 3, front: 'か', back: 'ka' },
        { id: 4, front: 'き', back: 'ki' },
      ]
    : [
        { id: 0, front: 'А', back: 'a' },
        { id: 1, front: 'Б', back: 'b' },
        { id: 2, front: 'В', back: 'v' },
        { id: 3, front: 'Г', back: 'g' },
        { id: 4, front: 'Д', back: 'd' },
      ];

  // Memory Game
  const memoryCards = [...cards, ...cards].sort(() => Math.random() - 0.5);

  const handleCardFlip = (cardId: number) => {
    if (flippedCards.includes(cardId) || matchedPairs.includes(Math.floor(cardId))) return;
    
    setFlippedCards([...flippedCards, cardId]);
    
    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];
      const secondCard = cardId;
      
      if (Math.floor(firstCard) === Math.floor(secondCard)) {
        setMatchedPairs([...matchedPairs, Math.floor(firstCard)]);
        setScore(score + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-2">
          {language === 'japanese' ? '日本語 Games' : 'Игры'}
        </h1>

        {/* Game Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {(['flashcards', 'memory', 'typing', 'matching'] as GameType[]).map((type) => (
            <button
              key={type}
              onClick={() => router.push(`/games?lang=${language}&type=${type}`)}
              className={`card text-center ${gameType === type ? 'border-2 border-primary-600' : ''}`}
            >
              <Award className="mx-auto mb-2 text-primary-600" size={32} />
              <h3 className="font-semibold capitalize">{type}</h3>
            </button>
          ))}
        </div>

        {/* Flashcards Game */}
        {gameType === 'flashcards' && (
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Flashcards</h2>
                <p className="text-gray-600">Card {currentCard + 1} of {cards.length}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">{score}</p>
                <p className="text-gray-600 text-sm">Points</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl p-12 text-center min-h-[400px] flex items-center justify-center cursor-pointer"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <div>
                {showAnswer ? (
                  <div>
                    <div className="text-8xl font-bold text-white mb-4">{cards[currentCard].back}</div>
                    <p className="text-white text-xl">Pronunciation</p>
                  </div>
                ) : (
                  <div className="text-8xl font-serif text-white">{cards[currentCard].front}</div>
                )}
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4 mb-6">
              Click to flip
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  if (currentCard > 0) {
                    setCurrentCard(currentCard - 1);
                    setShowAnswer(false);
                  }
                }}
                className="btn-secondary flex-1"
                disabled={currentCard === 0}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (currentCard < cards.length - 1) {
                    setCurrentCard(currentCard + 1);
                    setShowAnswer(false);
                  }
                }}
                className="btn-primary flex-1"
                disabled={currentCard === cards.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Memory Game */}
        {gameType === 'memory' && (
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Memory Game</h2>
                <p className="text-gray-600">Match the pairs!</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">{score}</p>
                <p className="text-gray-600 text-sm">Score</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {memoryCards.map((card, idx) => {
                const cardId = idx % (memoryCards.length / 2);
                const isFlipped = flippedCards.includes(idx) || matchedPairs.includes(cardId);
                
                return (
                  <div
                    key={idx}
                    onClick={() => handleCardFlip(idx)}
                    className={`aspect-square rounded-lg flex items-center justify-center text-4xl font-bold cursor-pointer transition-all ${
                      isFlipped 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                  >
                    {isFlipped ? (
                      idx < memoryCards.length / 2 ? card.front : memoryCards[cardId].back
                    ) : (
                      '?'
                    )}
                  </div>
                );
              })}
            </div>

            {matchedPairs.length === cards.length && (
              <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                <Star className="mx-auto mb-2 text-green-600" size={48} />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Congratulations!</h3>
                <p className="text-gray-600">You matched all pairs!</p>
              </div>
            )}
          </div>
        )}

        {/* Typing Game */}
        {gameType === 'typing' && (
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Typing Speed</h2>
                <p className="text-gray-600">Type the characters as fast as you can</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">{score}</p>
                <p className="text-gray-600 text-sm">WPM</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-6">
              <div className="text-center mb-4">
                <div className="text-8xl font-serif mb-4">{cards[currentCard].front}</div>
                <p className="text-xl text-gray-600">Type the pronunciation</p>
              </div>
              <input
                type="text"
                className="w-full px-6 py-4 text-center text-2xl border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                placeholder="Type here..."
                autoFocus
              />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`text-center p-4 rounded-lg ${currentCard === idx ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
                  onClick={() => setCurrentCard(idx)}
                >
                  <div className="text-3xl font-serif mb-2">{card.front}</div>
                  <div className="text-xs">{card.back}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Matching Game */}
        {gameType === 'matching' && (
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Match the Translation</h2>
                <p className="text-gray-600">Match characters with their meaning</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">{score}</p>
                <p className="text-gray-600 text-sm">Score</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-gray-700">Characters</h3>
                <div className="space-y-3">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-primary-50 rounded-lg text-center text-4xl font-serif cursor-pointer hover:bg-primary-100"
                    >
                      {card.front}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-gray-700">Pronunciation</h3>
                <div className="space-y-3">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-purple-50 rounded-lg text-center cursor-pointer hover:bg-purple-100"
                    >
                      <div className="text-xl font-semibold">{card.back}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


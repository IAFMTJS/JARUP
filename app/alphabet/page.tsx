'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Volume2, Play, Check, X } from 'lucide-react';
import { hiraganaCharacters, katakanaCharacters } from '@/lib/data/japanese';
import { cyrillicCharacters } from '@/lib/data/russian';

type AlphabetType = 'hiragana' | 'katakana' | 'cyrillic';

function AlphabetPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const [selectedAlphabet, setSelectedAlphabet] = useState<AlphabetType>(
    language === 'japanese' ? 'hiragana' : 'cyrillic'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [practiceMode, setPracticeMode] = useState<'learn' | 'quiz'>('learn');

  const alphabets = {
    hiragana: hiraganaCharacters,
    katakana: katakanaCharacters,
    cyrillic: cyrillicCharacters,
  };

  const currentChars = alphabets[selectedAlphabet];
  const currentChar = currentChars[currentIndex];

  const getAlphabetName = () => {
    if (selectedAlphabet === 'hiragana') return 'Hiragana (ひらがな)';
    if (selectedAlphabet === 'katakana') return 'Katakana (カタカナ)';
    return 'Cyrillic Alphabet';
  };

  const getAlphabetDescription = () => {
    if (selectedAlphabet === 'hiragana') return 'Japanese phonetic syllabary for native words';
    if (selectedAlphabet === 'katakana') return 'Japanese phonetic syllabary for foreign words';
    return 'The Russian alphabet with 33 letters';
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'japanese' ? 'ja-JP' : 'ru-RU';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const nextChar = () => {
    setCurrentIndex((prev) => (prev + 1) % currentChars.length);
  };

  const prevChar = () => {
    setCurrentIndex((prev) => (prev - 1 + currentChars.length) % currentChars.length);
  };

  const [userInput, setUserInput] = useState('');
  const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);

  const handleQuizSubmit = () => {
    if (userInput.toLowerCase().trim() === currentChar.pronunciation.toLowerCase().trim()) {
      setQuizResult('correct');
    } else {
      setQuizResult('incorrect');
    }
  };

  const nextQuiz = () => {
    setCurrentIndex((prev) => (prev + 1) % currentChars.length);
    setUserInput('');
    setQuizResult(null);
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
          {language === 'japanese' ? '日本語 Alphabet' : 'Русский Алфавит'}
        </h1>
        <p className="text-gray-600 mb-8">
          Master the alphabet with interactive practice
        </p>

        {/* Alphabet Selection */}
        {language === 'japanese' && (
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedAlphabet('hiragana')}
              className={`px-6 py-3 rounded-lg font-semibold ${
                selectedAlphabet === 'hiragana'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Hiragana
            </button>
            <button
              onClick={() => setSelectedAlphabet('katakana')}
              className={`px-6 py-3 rounded-lg font-semibold ${
                selectedAlphabet === 'katakana'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Katakana
            </button>
          </div>
        )}

        {/* Practice Mode Toggle */}
        <div className="card mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{getAlphabetName()}</h2>
              <p className="text-gray-600">{getAlphabetDescription()}</p>
              <p className="text-sm text-gray-500 mt-2">
                Character {currentIndex + 1} of {currentChars.length}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setPracticeMode('learn')}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  practiceMode === 'learn'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Learn
              </button>
              <button
                onClick={() => {
                  setPracticeMode('quiz');
                  setQuizResult(null);
                  setUserInput('');
                }}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  practiceMode === 'quiz'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Learning Mode */}
        {practiceMode === 'learn' && (
          <div className="card mb-6 bg-gradient-to-br from-primary-500 to-purple-600 text-white min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-9xl font-serif mb-8">{currentChar.character}</div>
              <div className="text-4xl font-bold mb-4">{currentChar.pronunciation}</div>
              <p className="text-xl opacity-90">{currentChar.meaning}</p>
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {practiceMode === 'quiz' && (
          <div className="card mb-6 min-h-[400px] flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="text-9xl font-serif mb-8">{currentChar.character}</div>
                <p className="text-gray-600 text-lg">Type the pronunciation</p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      if (!quizResult) handleQuizSubmit();
                      else nextQuiz();
                    }
                  }}
                  className="w-full px-6 py-4 text-center text-2xl border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                  placeholder="Type pronunciation..."
                  autoFocus
                />
                {quizResult && (
                  <div className={`p-4 rounded-lg ${
                    quizResult === 'correct' ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
                  }`}>
                    <p className="font-bold text-lg mb-1">
                      {quizResult === 'correct' ? '✓ Correct!' : '✗ Incorrect'}
                    </p>
                    <p className="text-gray-700">
                      Correct answer: <span className="font-bold">{currentChar.pronunciation}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="card mb-6">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={prevChar}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Previous
            </button>

            {/* Quiz Actions */}
            {practiceMode === 'quiz' ? (
              <div className="flex gap-4">
                {!quizResult && (
                  <button
                    onClick={handleQuizSubmit}
                    className="btn-primary"
                  >
                    Check Answer
                  </button>
                )}
                {quizResult && (
                  <button
                    onClick={nextQuiz}
                    className="btn-primary"
                  >
                    Next Question
                  </button>
                )}
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    speak(currentChar.pronunciation);
                  }}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Volume2 size={20} />
                  Pronounce
                </button>
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="btn-secondary"
                >
                  {showHints ? 'Hide' : 'Show'} Hints
                </button>
              </div>
            )}

            <button
              onClick={nextChar}
              className="btn-primary flex items-center gap-2"
            >
              Next
              <ArrowLeft size={20} className="rotate-180" />
            </button>
          </div>
        </div>

        {/* Hints */}
        {showHints && practiceMode === 'learn' && (
          <div className="card bg-blue-50">
            <h3 className="font-bold text-lg mb-3">Study Tips:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Practice writing each character</li>
              <li>• Listen to the pronunciation multiple times</li>
              <li>• Focus on one row at a time (vowels, k-sounds, etc.)</li>
              <li>• Use the quiz mode to test your memory</li>
              <li>• Review characters you find difficult</li>
            </ul>
          </div>
        )}

        {/* Alphabet Grid */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">All Characters ({selectedAlphabet})</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {currentChars.map((char, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  idx === currentIndex
                    ? 'border-primary-600 bg-primary-50 scale-110'
                    : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl font-serif mb-1">{char.character}</div>
                <div className="text-xs text-gray-600">{char.pronunciation}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AlphabetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AlphabetPageContent />
    </Suspense>
  );
}


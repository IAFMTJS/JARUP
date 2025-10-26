'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Volume2, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { japaneseVocabulary, russianVocabulary, VocabularyWord } from '@/lib/data/vocabulary';

export default function VocabularyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const allVocabulary: VocabularyWord[] = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState<'word-first' | 'translation-first'>('word-first');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [category, setCategory] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [flipped, setFlipped] = useState(false);

  const categories = ['all', ...new Set(allVocabulary.map(w => w.category))];
  
  const filteredWords = allVocabulary.filter(w => 
    (category === 'all' || w.category === category) &&
    (difficulty === 'all' || w.difficulty === difficulty)
  );

  const currentWord = filteredWords[currentIndex];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'japanese' ? 'ja-JP' : 'ru-RU';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
    setShowAnswer(true);
  };

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
    setShowAnswer(false);
    setFlipped(false);
  };

  const previousWord = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    setShowAnswer(false);
    setFlipped(false);
  };

  const handleCorrect = () => {
    setScore({ correct: score.correct + 1, total: score.total + 1 });
    nextWord();
  };

  const handleIncorrect = () => {
    setScore({ ...score, total: score.total + 1 });
    nextWord();
  };

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setFlipped(false);
  }, [category, difficulty]);

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
          {language === 'japanese' ? '日本語 Vocabulary' : 'Словарь'}
        </h1>
        <p className="text-gray-600 mb-8">
          Master new words with interactive flashcards
        </p>

        {/* Filters */}
        <div className="card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Study Mode
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setStudyMode('word-first');
                  setShowAnswer(false);
                  setFlipped(false);
                }}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  studyMode === 'word-first'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Word First
              </button>
              <button
                onClick={() => {
                  setStudyMode('translation-first');
                  setShowAnswer(false);
                  setFlipped(false);
                }}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  studyMode === 'translation-first'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Translation First
              </button>
            </div>
          </div>
        </div>

        {/* Flashcard */}
        {currentWord && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Main Card */}
            <div className="lg:col-span-2">
              <div
                className="card h-96 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-all"
                onClick={handleFlip}
              >
                {!flipped ? (
                  studyMode === 'word-first' ? (
                    <div className="text-center">
                      <div className="text-7xl font-serif mb-6">{currentWord.word}</div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(currentWord.pronunciation);
                        }}
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        <Volume2 size={20} />
                        Hear Pronunciation
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800 mb-4">{currentWord.translation}</div>
                      <p className="text-gray-600 text-xl">Category: {currentWord.category}</p>
                    </div>
                  )
                ) : (
                  studyMode === 'word-first' ? (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-4">{currentWord.translation}</div>
                      <div className="text-2xl text-gray-600 mb-2">{currentWord.pronunciation}</div>
                      <p className="text-gray-500">{currentWord.category}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-7xl font-serif mb-6">{currentWord.word}</div>
                      <p className="text-2xl text-gray-600">{currentWord.pronunciation}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Stats */}
              <div className="card">
                <h3 className="font-semibold text-gray-700 mb-2">Progress</h3>
                <p className="text-3xl font-bold text-primary-600">
                  {currentIndex + 1} / {filteredWords.length}
                </p>
              </div>

              {/* Score */}
              {score.total > 0 && (
                <div className="card">
                  <h3 className="font-semibold text-gray-700 mb-2">Score</h3>
                  <p className="text-3xl font-bold text-green-600">
                    {Math.round((score.correct / score.total) * 100)}%
                  </p>
                  <p className="text-sm text-gray-600">
                    {score.correct} / {score.total} correct
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="card">
          <div className="flex gap-4 justify-between items-center">
            <button
              onClick={previousWord}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Previous
            </button>

            <div className="flex gap-4">
              {flipped && (
                <>
                  <button
                    onClick={handleCorrect}
                    className="btn-secondary bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6"
                  >
                    <CheckCircle size={20} />
                    Correct
                  </button>
                  <button
                    onClick={handleIncorrect}
                    className="btn-secondary bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6"
                  >
                    <XCircle size={20} />
                    Incorrect
                  </button>
                </>
              )}
            </div>

            <button
              onClick={nextWord}
              className="btn-primary flex items-center gap-2"
            >
              Next
              <ArrowLeft size={20} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


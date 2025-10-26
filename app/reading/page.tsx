'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Volume2, CheckCircle } from 'lucide-react';
import { speak } from '@/lib/speech';

function ReadingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const [currentLevel, setCurrentLevel] = useState<'letter' | 'word' | 'sentence'>('letter');
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const exercises = language === 'japanese'
    ? {
        letter: [
          { display: 'あ', options: ['a', 'i', 'u', 'e', 'o'], correct: 'a' },
          { display: 'か', options: ['ka', 'ki', 'ku', 'ke', 'ko'], correct: 'ka' },
          { display: 'い', options: ['a', 'i', 'u', 'e', 'o'], correct: 'i' },
        ],
        word: [
          { display: 'あい (ai)', question: 'What does this mean?', options: ['love', 'water', 'mountain', 'fire'], correct: 'love' },
          { display: 'かわ (kawa)', question: 'What does this mean?', options: ['river', 'tree', 'moon', 'star'], correct: 'river' },
        ],
        sentence: [
          { display: 'わたしは がくせいです。', question: 'What is "わたし" (watashi)?', options: ['I', 'You', 'He', 'She'], correct: 'I' },
        ],
      }
    : {
        letter: [
          { display: 'А', options: ['a', 'b', 'c', 'd'], correct: 'a' },
          { display: 'Б', options: ['a', 'b', 'c', 'd'], correct: 'b' },
          { display: 'В', options: ['a', 'b', 'v', 'g'], correct: 'v' },
        ],
        word: [
          { display: 'Привет', question: 'What does this mean?', options: ['Hello', 'Thank you', 'Please', 'Goodbye'], correct: 'Hello' },
          { display: 'Спасибо', question: 'What does this mean?', options: ['Hello', 'Thank you', 'Please', 'Goodbye'], correct: 'Thank you' },
        ],
        sentence: [
          { display: 'Привет, как дела?', question: 'What is "как дела"?', options: ['How are you?', 'What is your name?', 'Where are you?', 'How old are you?'], correct: 'How are you?' },
        ],
      };

  const [currentExercise, setCurrentExercise] = useState(0);
  const exercise = exercises[currentLevel][currentExercise];

  const handleSelect = (answer: string) => {
    setUserAnswer(answer);
    setShowResult(true);
    if (answer === exercise.correct) {
      setScore(score + 10);
    }
  };

  const nextExercise = () => {
    const levelExercises = exercises[currentLevel];
    if (currentExercise < levelExercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowResult(false);
      setUserAnswer('');
    } else {
      if (currentLevel === 'letter') {
        setCurrentLevel('word');
        setCurrentExercise(0);
      } else if (currentLevel === 'word') {
        setCurrentLevel('sentence');
        setCurrentExercise(0);
      }
      setShowResult(false);
      setUserAnswer('');
    }
  };

  const handleSpeak = (text: string) => {
    speak(text, {
      lang: language === 'japanese' ? 'ja-JP' : 'ru-RU',
      rate: 0.8,
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-2">
          {language === 'japanese' ? '日本語 Reading' : 'Чтение'}
        </h1>
        <p className="text-gray-600 mb-8">
          Practice reading with increasing difficulty
        </p>

        <div className="card mb-6">
          <div className="mb-6">
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => { setCurrentLevel('letter'); setCurrentExercise(0); }}
                className={`px-4 py-2 rounded-lg ${currentLevel === 'letter' ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
              >
                Letters
              </button>
              <button
                onClick={() => { setCurrentLevel('word'); setCurrentExercise(0); }}
                className={`px-4 py-2 rounded-lg ${currentLevel === 'word' ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
              >
                Words
              </button>
              <button
                onClick={() => { setCurrentLevel('sentence'); setCurrentExercise(0); }}
                className={`px-4 py-2 rounded-lg ${currentLevel === 'sentence' ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
              >
                Sentences
              </button>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="text-6xl mb-4 font-serif">{exercise.display}</div>
            {'question' in exercise && exercise.question && (
              <p className="text-xl text-gray-700 mb-4">{exercise.question}</p>
            )}
            <button
              onClick={() => handleSpeak(exercise.display)}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Volume2 size={20} />
              Hear Pronunciation
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && handleSelect(option)}
                disabled={showResult}
                className={`p-4 rounded-lg border-2 transition-all ${
                  showResult && userAnswer === option
                    ? userAnswer === exercise.correct
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : showResult && option === exercise.correct
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-primary-600 hover:bg-gray-50'
                } disabled:cursor-not-allowed`}
              >
                {option}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6">
              <div className={`p-4 rounded-lg mb-4 ${
                userAnswer === exercise.correct
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'bg-red-50 border-2 border-red-500'
              }`}>
                <p className="font-semibold text-lg mb-1">
                  {userAnswer === exercise.correct ? '✓ Correct! Great job!' : '✗ Incorrect'}
                </p>
                {userAnswer !== exercise.correct && (
                  <p className="text-gray-600">Correct answer: {exercise.correct}</p>
                )}
              </div>
              <button
                onClick={nextExercise}
                className="btn-primary w-full"
              >
                Next Exercise
              </button>
            </div>
          )}
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-700">Current Score</h3>
              <p className="text-3xl font-bold text-primary-600">{score} points</p>
            </div>
            <CheckCircle size={48} className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReadingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReadingPageContent />
    </Suspense>
  );
}


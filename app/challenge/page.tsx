'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Zap, Trophy, Clock } from 'lucide-react';
import { japaneseLessons } from '@/lib/data/japanese';
import { russianLessons } from '@/lib/data/russian';
import { japaneseVocabulary, russianVocabulary } from '@/lib/data/vocabulary';

function ChallengePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const [challengeType, setChallengeType] = useState<'vocabulary' | 'characters'>('vocabulary');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const vocab = language === 'japanese' ? japaneseVocabulary : russianVocabulary;
  const lessons = language === 'japanese' ? japaneseLessons : russianLessons;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const generateQuiz = (type: 'vocabulary' | 'characters') => {
    const quiz: any[] = [];
    const selected = vocab.slice(0, 20);
    
    selected.forEach((word, index) => {
      const wrongAnswers = vocab
        .filter(w => w.word !== word.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.translation);
      
      quiz.push({
        id: index,
        question: `What does "${word.word}" mean?`,
        type: 'multiple-choice',
        correct: word.translation,
        options: [word.translation, ...wrongAnswers].sort(() => 0.5 - Math.random()),
      });
    });

    setQuestions(quiz);
    setTotalQuestions(quiz.length);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(300);
    setIsActive(true);
    setShowResult(false);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;
    
    setShowResult(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowResult(false);
      } else {
        setIsActive(false);
      }
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
          {language === 'japanese' ? '日本語 Challenge' : 'Челлендж'}
        </h1>
        <p className="text-gray-600 mb-8">
          Test your knowledge with timed challenges
        </p>

        {!isActive && questions.length === 0 && (
          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-4">Select a Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setChallengeType('vocabulary');
                  generateQuiz('vocabulary');
                }}
                className="card hover:scale-105 transition-transform text-left"
              >
                <Zap className="text-yellow-600 mb-3" size={32} />
                <h3 className="text-xl font-bold mb-2">Vocabulary Quiz</h3>
                <p className="text-gray-600 mb-2">5 minutes • 20 questions</p>
                <p className="text-sm text-gray-500">Test your word knowledge</p>
              </button>
              <button
                onClick={() => {
                  setChallengeType('characters');
                  generateQuiz('characters');
                }}
                className="card hover:scale-105 transition-transform text-left"
              >
                <Zap className="text-blue-600 mb-3" size={32} />
                <h3 className="text-xl font-bold mb-2">Character Quiz</h3>
                <p className="text-gray-600 mb-2">5 minutes • 20 questions</p>
                <p className="text-sm text-gray-500">Test your character recognition</p>
              </button>
            </div>
          </div>
        )}

        {questions.length > 0 && isActive && (
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="text-red-600" size={24} />
                <span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Question {currentQuestion + 1} / {totalQuestions}</p>
                <p className="text-2xl font-bold text-primary-600">Score: {score}</p>
              </div>
            </div>

            {questions[currentQuestion] && (
              <>
                <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
                <div className="grid grid-cols-1 gap-3">
                  {questions[currentQuestion].options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={showResult}
                      className={`p-4 rounded-lg text-left border-2 transition-all ${
                        showResult && option === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-50'
                          : showResult && option === currentAnswer && option !== questions[currentQuestion].correct
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 hover:border-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {questions.length > 0 && !isActive && timeLeft === 0 && (
          <div className="card text-center py-12">
            <Trophy size={64} className="mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl font-bold mb-4">Challenge Complete! 🎉</h2>
            <p className="text-2xl mb-2">
              You scored {score} / {totalQuestions}
            </p>
            <p className="text-3xl font-bold text-primary-600 mb-6">
              {Math.round((score / totalQuestions) * 100)}%
            </p>
            <button
              onClick={() => {
                setQuestions([]);
                setCurrentQuestion(0);
                setScore(0);
                setTimeLeft(300);
              }}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChallengePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChallengePageContent />
    </Suspense>
  );
}


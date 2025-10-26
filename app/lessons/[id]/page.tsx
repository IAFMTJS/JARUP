'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, Play, Volume2, XCircle } from 'lucide-react';
import { japaneseLessons } from '@/lib/data/japanese';
import { russianLessons } from '@/lib/data/russian';
import { completeLesson, addXP, getProgress } from '@/lib/localStorage';
import { speak } from '@/lib/speech';

export default function LessonDetailPage() {
  const router = useRouter();
  const params = useParams();
  const lessonId = params?.id as string;
  
  const lesson = [...japaneseLessons, ...russianLessons].find(l => l.id === lessonId);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [matchedPairs, setMatchedPairs] = useState<{ [key: string]: string }>({});

  if (!lesson) return <div>Lesson not found</div>;

  const exercise = lesson.exercises[currentExercise];
  
  const handleAnswer = () => {
    setShowResult(true);
    let isCorrect = false;
    
    if (exercise.type === 'multiple-choice') {
      isCorrect = selectedOption === (Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer);
    } else if (exercise.type === 'matching') {
      const correctAnswers = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer];
      isCorrect = Object.keys(matchedPairs).length === correctAnswers.length &&
        Object.entries(matchedPairs).every(([key, value]) => 
          correctAnswers.some(answer => answer === value && answer === exercise.options?.[parseInt(key)])
        );
    } else if (Array.isArray(exercise.correctAnswer)) {
      isCorrect = exercise.correctAnswer.includes(userAnswer.toLowerCase().trim());
    } else {
      const correctAnswer = typeof exercise.correctAnswer === 'string' ? exercise.correctAnswer : '';
      isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    }
    
    if (isCorrect) {
      setScore(score + exercise.points);
    }
  };
  
  const handleSpeak = (text: string) => {
    const language = lesson.language;
    speak(text, {
      lang: language === 'japanese' ? 'ja-JP' : 'ru-RU',
      rate: 0.8,
    });
  };

  const nextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setUserAnswer('');
      setShowResult(false);
      setSelectedOption('');
      setMatchedPairs({});
    } else {
      // Lesson completed - save to localStorage
      completeLesson(lessonId);
      addXP(score); // Award XP based on score
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.push('/lessons')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Lessons
        </button>

        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

        {!completed && lesson.exercises.length > 0 && (
          <div className="card mb-6">
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Exercise {currentExercise + 1} of {lesson.exercises.length}</span>
                <span>Score: {score} points</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary-600 rounded-full transition-all"
                  style={{ width: `${((currentExercise + 1) / lesson.exercises.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">{exercise.question}</h3>

            {/* Multiple Choice */}
            {exercise.type === 'multiple-choice' && exercise.options && (
              <div className="space-y-3 mb-4">
                {exercise.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && setSelectedOption(option)}
                    className={`w-full px-4 py-3 text-left border-2 rounded-lg transition-all ${
                      selectedOption === option
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-400'
                    } ${showResult && option === exercise.correctAnswer ? 'bg-green-100 border-green-500' : ''}`}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Matching */}
            {exercise.type === 'matching' && exercise.options && (
              <div className="space-y-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Items</h4>
                    <div className="space-y-2">
                      {exercise.options.map((item, index) => (
                        <div
                          key={index}
                          className="p-3 border-2 border-gray-300 rounded-lg bg-white"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Select Match</h4>
                    <div className="space-y-2">
                      {Array.isArray(exercise.correctAnswer) && exercise.correctAnswer.map((answer, index) => (
                        <select
                          key={index}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg"
                          onChange={(e) => setMatchedPairs({ ...matchedPairs, [index]: e.target.value })}
                          disabled={showResult}
                        >
                          <option value="">Select...</option>
                          {exercise.options?.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typing */}
            {(exercise.type === 'typing' || exercise.type === 'fill-blank') && (
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                  disabled={showResult}
                />
              </div>
            )}

            {/* Audio Exercise */}
            {exercise.type === 'audio' && (
              <div className="space-y-3 mb-4">
                <button
                  onClick={() => handleSpeak(exercise.question)}
                  className="btn-secondary inline-flex items-center gap-2"
                  disabled={showResult}
                >
                  <Volume2 size={20} />
                  Play Audio
                </button>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type what you heard..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                  disabled={showResult}
                />
              </div>
            )}

            {showResult && (() => {
              const isCorrect = exercise.type === 'multiple-choice' 
                ? selectedOption === (Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer)
                : exercise.type === 'matching'
                ? Object.keys(matchedPairs).length > 0
                : Array.isArray(exercise.correctAnswer)
                ? exercise.correctAnswer.includes(userAnswer.toLowerCase().trim())
                : userAnswer.toLowerCase().trim() === (typeof exercise.correctAnswer === 'string' ? exercise.correctAnswer : '').toLowerCase().trim();
              
              return (
                <div className={`p-4 rounded-lg mb-4 ${
                  isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
                }`}>
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    {isCorrect 
                      ? (<><CheckCircle size={20} className="text-green-600" /> Correct!</>)
                      : (<><XCircle size={20} className="text-red-600" /> Incorrect</>)
                    }
                  </p>
                  <p className="text-gray-600">
                    Correct answer: {Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.join(', ') : exercise.correctAnswer}
                  </p>
                </div>
              );
            })()}

            {!showResult ? (
              <button
                onClick={handleAnswer}
                className="btn-primary w-full"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={nextExercise}
                className="btn-primary w-full"
              >
                Next Exercise
              </button>
            )}
          </div>
        )}

        {completed && (
          <div className="card text-center py-12">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Lesson Complete! 🎉</h2>
            <p className="text-gray-600 mb-6">You scored {score} points</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push('/lessons')}
                className="btn-secondary"
              >
                Back to Lessons
              </button>
              <button
                onClick={() => router.push('/')}
                className="btn-primary"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Lesson Content</h2>
          <div className="space-y-4">
            {lesson.content.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, Play } from 'lucide-react';
import { japaneseLessons } from '@/lib/data/japanese';
import { russianLessons } from '@/lib/data/russian';

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

  if (!lesson) return <div>Lesson not found</div>;

  const exercise = lesson.exercises[currentExercise];

  const handleAnswer = () => {
    setShowResult(true);
    if (userAnswer === exercise.correctAnswer) {
      setScore(score + exercise.points);
    }
  };

  const nextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
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

            {showResult && (
              <div className={`p-4 rounded-lg mb-4 ${
                userAnswer === exercise.correctAnswer
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'bg-red-50 border-2 border-red-500'
              }`}>
                <p className="font-semibold mb-1">
                  {userAnswer === exercise.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-gray-600">
                  Correct answer: {exercise.correctAnswer}
                </p>
              </div>
            )}

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


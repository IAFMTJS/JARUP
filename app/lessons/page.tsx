'use client';

import { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { japaneseLessons } from '@/lib/data/japanese';
import { russianLessons } from '@/lib/data/russian';
import { getProgress } from '@/lib/localStorage';

function LessonsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const lessons = language === 'japanese' ? japaneseLessons : russianLessons;
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const progress = getProgress();
    setCompletedLessons(progress.completedLessons);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Hiragana: 'bg-pink-100 text-pink-700',
      Katakana: 'bg-purple-100 text-purple-700',
      Kanji: 'bg-orange-100 text-orange-700',
      Alphabet: 'bg-blue-100 text-blue-700',
      Pronunciation: 'bg-green-100 text-green-700',
      Words: 'bg-yellow-100 text-yellow-700',
      Grammar: 'bg-indigo-100 text-indigo-700',
      Reading: 'bg-red-100 text-red-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
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
          {language === 'japanese' ? '日本語 Lessons' : 'Русский Уроки'}
        </h1>
        <p className="text-gray-600 mb-8">
          Start from basics and progress to advanced level
        </p>

        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isLocked = !isCompleted && index > 0 && !completedLessons.includes(lessons[index - 1]?.id);

            return (
              <div
                key={lesson.id}
                className={`card hover:shadow-xl transition-all ${
                  isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                } ${isCompleted ? 'border-green-500 border-2' : ''}`}
                onClick={() => !isLocked && router.push(`/lessons/${lesson.id}`)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(lesson.category)}`}>
                        {lesson.category}
                      </span>
                      {isCompleted && (
                        <CheckCircle size={20} className="text-green-600" />
                      )}
                      {isLocked && (
                        <Lock size={20} className="text-gray-400" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Lesson {lesson.order} • {lesson.exercises.length} exercises
                    </p>
                    {isCompleted && (
                      <span className="text-sm text-green-600 font-semibold">✓ Completed</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function LessonsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LessonsPageContent />
    </Suspense>
  );
}


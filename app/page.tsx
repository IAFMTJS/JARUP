'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  PenTool,
  Mic,
  Gamepad2,
  BarChart3,
  Settings,
  Award,
  Zap,
  ArrowRight,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { FloatingShapes } from '@/components/decorations/floating-shapes';
import { getProgress } from '@/lib/localStorage';

export default function Home() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState<'japanese' | 'russian'>('japanese');
  const [streak, setStreak] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(0);
  const [stats, setStats] = useState({
    japanese: { words: 0, characters: 0, speaking: 0 },
    russian: { words: 0, characters: 0, speaking: 0 },
  });

  useEffect(() => {
    const progress = getProgress();
    setStreak(progress.streak);
    setStats(progress.stats);
    // Calculate daily goal based on progress
    const totalProgress = Object.values(progress.stats).reduce((sum, lang) => 
      sum + lang.words + lang.characters + lang.speaking, 0
    );
    setDailyGoal(Math.min(100, Math.round((totalProgress / 300) * 100)));
  }, []);

  const todayChallenge = {
    language: currentLanguage,
    task: 'Master 5 new characters',
    progress: 60,
  };

  const currentStats = stats[currentLanguage];

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-5xl font-extrabold gradient-text">JARUP</h1>
              <Sparkles className="text-yellow-500 animate-pulse" size={32} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Master Japanese & Russian</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={toggleTheme}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              {theme === 'dark' ? (
                <Sun size={28} className="text-gray-700 dark:text-gray-200" />
              ) : (
                <Moon size={28} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={() => router.push('/settings')}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Settings size={28} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setCurrentLanguage('japanese')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentLanguage === 'japanese'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            日本語 (Japanese)
          </button>
          <button
            onClick={() => setCurrentLanguage('russian')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentLanguage === 'russian'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Русский (Russian)
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-[fadeIn_0.8s_ease-out]">
          <div className="card group hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-container group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">Words Learned</h3>
            </div>
            <p className="text-4xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{currentStats.words || 0}</p>
          </div>
          <div className="card group hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-container bg-gradient-to-br from-green-500 to-emerald-600 group-hover:scale-110 transition-transform">
                <PenTool className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">Characters</h3>
            </div>
            <p className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">{currentStats.characters || 0}</p>
          </div>
          <div className="card group hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-container bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-110 transition-transform">
                <Mic className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">Speaking Level</h3>
            </div>
            <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent">{currentStats.speaking || 0}%</p>
          </div>
          <div className="card group hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <div className="icon-container bg-gradient-to-br from-orange-500 to-red-600 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">Daily Streak</h3>
            </div>
            <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">{streak} 🔥</p>
          </div>
        </div>

        {/* Progress Graph */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Daily Goal</h2>
          <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-500"
              style={{ width: `${dailyGoal}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
              {dailyGoal}%
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => router.push(`/lessons?lang=${currentLanguage}`)}
            className="card group hover:scale-110 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20"
          >
            <div className="icon-container mb-4 group-hover:rotate-6 transition-transform">
              <BookOpen size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Lessons</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Learn with guides</p>
          </button>
          <button
            onClick={() => router.push(`/writing?lang=${currentLanguage}`)}
            className="card group hover:scale-110 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20"
          >
            <div className="icon-container bg-gradient-to-br from-green-500 to-emerald-600 mb-4 group-hover:rotate-6 transition-transform">
              <PenTool size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Writing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Practice strokes</p>
          </button>
          <button
            onClick={() => router.push(`/speaking?lang=${currentLanguage}`)}
            className="card group hover:scale-110 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20"
          >
            <div className="icon-container bg-gradient-to-br from-purple-500 to-pink-600 mb-4 group-hover:rotate-6 transition-transform">
              <Mic size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Speaking</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Improve pronunciation</p>
          </button>
          <button
            onClick={() => router.push(`/games?lang=${currentLanguage}`)}
            className="card group hover:scale-110 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/20"
          >
            <div className="icon-container bg-gradient-to-br from-orange-500 to-red-600 mb-4 group-hover:rotate-6 transition-transform">
              <Gamepad2 size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Games</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Have fun learning</p>
          </button>
        </div>

        {/* More Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => router.push(`/vocabulary?lang=${currentLanguage}`)}
            className="card hover:scale-105 transition-transform bg-gradient-to-br from-blue-50 to-blue-100"
          >
            <BookOpen size={28} className="text-blue-600 mb-2" />
            <h3 className="font-semibold">Vocabulary</h3>
            <p className="text-sm text-gray-600 mt-1">Flashcards</p>
          </button>
          <button
            onClick={() => router.push(`/challenge?lang=${currentLanguage}`)}
            className="card hover:scale-105 transition-transform bg-gradient-to-br from-yellow-50 to-yellow-100"
          >
            <Zap size={28} className="text-yellow-600 mb-2" />
            <h3 className="font-semibold">Challenges</h3>
            <p className="text-sm text-gray-600 mt-1">Test yourself</p>
          </button>
          <button
            onClick={() => router.push(`/reading?lang=${currentLanguage}`)}
            className="card hover:scale-105 transition-transform bg-gradient-to-br from-green-50 to-green-100"
          >
            <BarChart3 size={28} className="text-green-600 mb-2" />
            <h3 className="font-semibold">Reading</h3>
            <p className="text-sm text-gray-600 mt-1">Practice</p>
          </button>
          <button
            onClick={() => router.push(`/alphabet?lang=${currentLanguage}`)}
            className="card hover:scale-105 transition-transform bg-gradient-to-br from-pink-50 to-pink-100"
          >
            <BookOpen size={28} className="text-pink-600 mb-2" />
            <h3 className="font-semibold">Alphabet</h3>
            <p className="text-sm text-gray-600 mt-1">Master it</p>
          </button>
        </div>

        {/* Daily Challenge */}
        <div className="card mb-8 bg-gradient-to-br from-primary-500 to-purple-600 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={28} />
            <h2 className="text-2xl font-bold">Daily Challenge</h2>
          </div>
          <p className="text-lg mb-4">
            {todayChallenge.language === 'japanese'
              ? 'Master 5 new Hiragana characters'
              : 'Learn 5 new Cyrillic letters'}
          </p>
          <div className="relative h-4 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${todayChallenge.progress}%` }}
            />
          </div>
          <p className="text-sm mt-2">{todayChallenge.progress}% completed</p>
        </div>

        {/* Continue Learning */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => router.push(`/lessons?lang=${currentLanguage}`)}
            className="btn-primary flex-1 py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            Continue Learning
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => router.push(`/progress?lang=${currentLanguage}`)}
            className="btn-secondary flex-1 py-4 text-lg"
          >
            View Progress
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-600">125</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Alphabet Characters</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">116</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vocabulary Words</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">18</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lessons</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">2</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
}


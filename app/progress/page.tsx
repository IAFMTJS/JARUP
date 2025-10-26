'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Trophy, TrendingUp, Target, Award } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

function ProgressPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('week');

  const statsData = {
    week: [
      { day: 'Mon', words: 5, lessons: 2 },
      { day: 'Tue', words: 12, lessons: 3 },
      { day: 'Wed', words: 8, lessons: 2 },
      { day: 'Thu', words: 15, lessons: 4 },
      { day: 'Fri', words: 10, lessons: 3 },
      { day: 'Sat', words: 20, lessons: 5 },
      { day: 'Sun', words: 12, lessons: 3 },
    ],
  };

  const skillData = language === 'japanese'
    ? [
        { name: 'Hiragana', value: 85, color: '#3b82f6' },
        { name: 'Katakana', value: 65, color: '#8b5cf6' },
        { name: 'Kanji', value: 45, color: '#f59e0b' },
        { name: 'Grammar', value: 70, color: '#10b981' },
      ]
    : [
        { name: 'Alphabet', value: 90, color: '#3b82f6' },
        { name: 'Pronunciation', value: 75, color: '#8b5cf6' },
        { name: 'Vocabulary', value: 55, color: '#f59e0b' },
        { name: 'Grammar', value: 60, color: '#10b981' },
      ];

  const achievements = [
    { title: 'First Steps', desc: 'Completed first lesson', earned: true },
    { title: 'Streak Master', desc: '7 day streak', earned: true },
    { title: 'Vocabulary Expert', desc: 'Learned 100 words', earned: true },
    { title: 'Grammar Guru', desc: 'Completed grammar section', earned: false },
    { title: 'Perfect Week', desc: 'Studied every day', earned: false },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-2">
          {language === 'japanese' ? '日本語 Progress' : 'Прогресс'}
        </h1>
        <p className="text-gray-600 mb-8">
          Track your learning journey
        </p>

        {/* Time Range Selector */}
        <div className="flex gap-4 mb-8">
          {(['week', 'month', 'all'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-6 py-2 rounded-lg font-semibold capitalize ${
                timeRange === range
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-primary-600" size={24} />
              <h3 className="font-semibold text-gray-700">Words Learned</h3>
            </div>
            <p className="text-3xl font-bold text-primary-600">156</p>
            <p className="text-sm text-gray-500 mt-1">+12 this week</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-green-600" size={24} />
              <h3 className="font-semibold text-gray-700">Current Level</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">Intermediate</p>
            <p className="text-sm text-gray-500 mt-1">25% to next level</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-purple-600" size={24} />
              <h3 className="font-semibold text-gray-700">Daily Streak</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">12 days</p>
            <p className="text-sm text-gray-500 mt-1">Keep it up!</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Award className="text-orange-600" size={24} />
              <h3 className="font-semibold text-gray-700">Total XP</h3>
            </div>
            <p className="text-3xl font-bold text-orange-600">2,450</p>
            <p className="text-sm text-gray-500 mt-1">Level 5</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Progress */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Weekly Activity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={statsData.week}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="words" stroke="#3b82f6" name="Words" />
                <Line type="monotone" dataKey="lessons" stroke="#8b5cf6" name="Lessons" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Distribution */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Skill Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Achievements */}
        <div className="card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={28} className="text-yellow-500" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-2 ${
                  achievement.earned
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-300 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                  {achievement.earned && (
                    <Trophy size={20} className="text-yellow-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Word List */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Your Word List</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { char: 'あ', pronunciation: 'a', meaning: 'a' },
              { char: 'い', pronunciation: 'i', meaning: 'i' },
              { char: 'う', pronunciation: 'u', meaning: 'u' },
              { char: 'か', pronunciation: 'ka', meaning: 'ka' },
              { char: 'き', pronunciation: 'ki', meaning: 'ki' },
            ].map((word, idx) => (
              <div
                key={idx}
                className="p-4 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors"
              >
                <div className="text-4xl font-serif mb-2">{word.char}</div>
                <div className="text-sm font-semibold text-gray-700">{word.pronunciation}</div>
                <div className="text-xs text-gray-500">{word.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProgressPageContent />
    </Suspense>
  );
}


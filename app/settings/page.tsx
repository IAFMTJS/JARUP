'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Globe, Moon, User } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export default function SettingsPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [language, setLanguage] = useState<'japanese' | 'russian'>('japanese');

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

        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        {/* Language Selection */}
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={24} className="text-primary-600" />
            <h2 className="text-2xl font-bold">Language Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Default Language</h3>
                <p className="text-sm text-gray-600">Choose your primary learning language</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('japanese')}
                  className={`px-4 py-2 rounded-lg ${
                    language === 'japanese'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Japanese
                </button>
                <button
                  onClick={() => setLanguage('russian')}
                  className={`px-4 py-2 rounded-lg ${
                    language === 'russian'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Russian
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={24} className="text-primary-600" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Push Notifications</h3>
                <p className="text-sm text-gray-600">Receive daily reminders</p>
              </div>
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="opacity-0 w-0 h-0"
                />
                <span
                  className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                    notifications ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Daily Reminder</h3>
                <p className="text-sm text-gray-600">Get notified to practice daily</p>
              </div>
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  checked={dailyReminder}
                  onChange={(e) => setDailyReminder(e.target.checked)}
                  className="opacity-0 w-0 h-0"
                />
                <span
                  className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                    dailyReminder ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${
                    dailyReminder ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Moon size={24} className="text-primary-600" />
            <h2 className="text-2xl font-bold">Appearance</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold">Dark Mode</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Switch to dark theme</p>
              </div>
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  className="opacity-0 w-0 h-0"
                />
                <span
                  className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Sound Effects</h3>
                <p className="text-sm text-gray-600">Enable audio feedback</p>
              </div>
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  checked={soundEffects}
                  onChange={(e) => setSoundEffects(e.target.checked)}
                  className="opacity-0 w-0 h-0"
                />
                <span
                  className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                    soundEffects ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
                <span
                  className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${
                    soundEffects ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <User size={24} className="text-primary-600" />
            <h2 className="text-2xl font-bold">Profile</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                defaultValue="Language Learner"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="learner@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
              />
            </div>

            <button className="btn-primary w-full">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


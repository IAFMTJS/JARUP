'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Mic, MicOff, Volume2, CheckCircle } from 'lucide-react';
import { speak } from '@/lib/speech';

function SpeakingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', text: string}>>([]);

  const phrases = language === 'japanese'
    ? [
        'こんにちは',
        'ありがとう',
        'すみません',
        'はじめまして',
        'おはようございます',
      ]
    : [
        'Привет',
        'Спасибо',
        'Извините',
        'Как дела?',
        'Доброе утро',
      ];

  const translations = language === 'japanese'
    ? ['Hello', 'Thank you', 'Excuse me', 'Nice to meet you', 'Good morning']
    : ['Hello', 'Thank you', 'Sorry', 'How are you?', 'Good morning'];

  const handleSpeak = (text: string) => {
    speak(text, {
      lang: language === 'japanese' ? 'ja-JP' : 'ru-RU',
      rate: 0.8,
    });
  };

  const handleListen = () => {
    setIsListening(!isListening);
    
    if (!isListening && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = language === 'japanese' ? 'ja-JP' : 'ru-RU';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        setIsListening(false);
        checkPronunciation(transcript, phrases[currentPhrase]);
      };

      recognition.onerror = () => {
        setIsListening(false);
        alert('Could not access microphone');
      };

      recognition.start();
    }
  };

  const checkPronunciation = (userSpeech: string, correctPhrase: string) => {
    setShowFeedback(true);
    // Simple check - in production, use advanced speech recognition
    const similarity = userSpeech.toLowerCase().includes(correctPhrase.toLowerCase()) ||
                      correctPhrase.toLowerCase().includes(userSpeech.toLowerCase());
    
    if (similarity) {
      setScore(score + 10);
    }
  };

  const nextPhrase = () => {
    if (currentPhrase < phrases.length - 1) {
      setCurrentPhrase(currentPhrase + 1);
      setTranscript('');
      setShowFeedback(false);
    }
  };

  const sendChatMessage = (message: string) => {
    setChatMessages([...chatMessages, { role: 'user', text: message }]);
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        text: language === 'japanese' 
          ? 'Great! Let\'s practice more. Try saying "Watashi wa gakusei desu" (I am a student).'
          : 'Отлично! Давайте попрактикуемся больше. Попробуйте сказать "Я учусь в университете" (I study at university).'
      }]);
    }, 1000);
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
          {language === 'japanese' ? '日本語 Speaking' : 'Разговорная Практика'}
        </h1>
        <p className="text-gray-600 mb-8">
          Practice your pronunciation with AI feedback
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Repeat After Me */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Repeat After Me</h2>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-serif mb-4">{phrases[currentPhrase]}</div>
              <p className="text-gray-600 mb-4">{translations[currentPhrase]}</p>
              <button
                onClick={() => handleSpeak(phrases[currentPhrase])}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Volume2 size={20} />
                Play Audio
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleListen}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 ${
                  isListening 
                    ? 'bg-red-600 text-white animate-pulse' 
                    : 'bg-primary-600 text-white'
                }`}
              >
                {isListening ? (
                  <>
                    <MicOff size={24} />
                    Listening...
                  </>
                ) : (
                  <>
                    <Mic size={24} />
                    Start Recording
                  </>
                )}
              </button>

              {transcript && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">You said:</p>
                  <p className="text-gray-800 text-lg">{transcript}</p>
                </div>
              )}

              {showFeedback && (
                <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                  <p className="font-semibold text-green-700 mb-1">✓ Good pronunciation!</p>
                  <p className="text-sm text-gray-600">Keep practicing to improve further</p>
                </div>
              )}

              <button
                onClick={nextPhrase}
                className="btn-secondary w-full"
                disabled={currentPhrase >= phrases.length - 1}
              >
                Next Phrase
              </button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Score:</span>
                <span className="text-2xl font-bold text-primary-600">{score}</span>
              </div>
            </div>
          </div>

          {/* AI Chat Practice */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">AI Conversation Practice</h2>
            
            <div className="h-96 border-2 border-gray-200 rounded-lg p-4 overflow-y-auto mb-4 bg-gray-50">
              {chatMessages.length === 0 && (
                <p className="text-gray-500 text-center mt-20">
                  Start a conversation with the AI!
                </p>
              )}
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => sendChatMessage(language === 'japanese' ? 'こんにちは' : 'Привет')}
                className="btn-secondary w-full text-sm"
              >
                {language === 'japanese' ? 'こんにちは (Hello)' : 'Привет (Hello)'}
              </button>
              <button
                onClick={() => sendChatMessage(language === 'japanese' ? 'ありがとう' : 'Спасибо')}
                className="btn-secondary w-full text-sm"
              >
                {language === 'japanese' ? 'ありがとう (Thank you)' : 'Спасибо (Thank you)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeakingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SpeakingPageContent />
    </Suspense>
  );
}


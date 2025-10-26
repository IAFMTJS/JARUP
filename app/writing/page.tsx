'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Check, RotateCcw } from 'lucide-react';

export default function WritingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') || 'japanese') as 'japanese' | 'russian';
  
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const characters = language === 'japanese' 
    ? [
        { char: 'あ', pronunciation: 'a', meaning: 'a (as in apple)', strokeCount: 3 },
        { char: 'い', pronunciation: 'i', meaning: 'i (as in eat)', strokeCount: 2 },
        { char: 'う', pronunciation: 'u', meaning: 'u (as in you)', strokeCount: 2 },
        { char: 'か', pronunciation: 'ka', meaning: 'ka', strokeCount: 3 },
        { char: 'き', pronunciation: 'ki', meaning: 'ki', strokeCount: 4 },
      ]
    : [
        { char: 'А', pronunciation: 'a', meaning: 'a', strokeCount: 2 },
        { char: 'Б', pronunciation: 'b', meaning: 'b', strokeCount: 1 },
        { char: 'В', pronunciation: 'v', meaning: 'v', strokeCount: 1 },
        { char: 'Г', pronunciation: 'g', meaning: 'g', strokeCount: 1 },
        { char: 'Д', pronunciation: 'd', meaning: 'd', strokeCount: 1 },
      ];

  const currentChar = characters[currentCharacter];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientX - rect.left : (e.nativeEvent instanceof TouchEvent && e.nativeEvent.touches[0] ? e.nativeEvent.touches[0].clientX - rect.left : 0);
    const y = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientY - rect.top : (e.nativeEvent instanceof TouchEvent && e.nativeEvent.touches[0] ? e.nativeEvent.touches[0].clientY - rect.top : 0);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientX - rect.left : (e.nativeEvent instanceof TouchEvent && e.nativeEvent.touches[0] ? e.nativeEvent.touches[0].clientX - rect.left : 0);
    const y = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientY - rect.top : (e.nativeEvent instanceof TouchEvent && e.nativeEvent.touches[0] ? e.nativeEvent.touches[0].clientY - rect.top : 0);
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleCheck = () => {
    alert('Great! Keep practicing! Your stroke will improve with time.');
    if (currentCharacter < characters.length - 1) {
      setCurrentCharacter(currentCharacter + 1);
      clearCanvas();
    }
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
          {language === 'japanese' ? '日本語 Writing Practice' : 'Практика Написания'}
        </h1>
        <p className="text-gray-600 mb-8">
          Practice writing characters on the board below
        </p>

        <div className="card mb-6">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 font-serif">{currentChar.char}</div>
            <p className="text-xl text-gray-700 mb-2">
              Pronunciation: <span className="font-semibold">{currentChar.pronunciation}</span>
            </p>
            <p className="text-gray-600">{currentChar.meaning}</p>
            <p className="text-sm text-gray-500 mt-2">
              Character {currentCharacter + 1} of {characters.length}
            </p>
          </div>

          <div className="flex justify-center mb-4">
            <canvas
              ref={canvasRef}
              className="stroke-board"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={clearCanvas}
              className="btn-secondary flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Clear
            </button>
            <button
              onClick={handleCheck}
              className="btn-primary flex items-center gap-2"
            >
              <Check size={20} />
              Check
            </button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Tips for Writing</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Write from left to right and top to bottom</li>
            <li>• Follow the correct stroke order</li>
            <li>• Practice each character multiple times</li>
            <li>• Compare your writing with the example above</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


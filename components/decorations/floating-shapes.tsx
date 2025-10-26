'use client';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}


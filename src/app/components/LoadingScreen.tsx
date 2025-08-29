"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const messages = [
    "Preparando um espaço seguro para você...",
    "Carregando com todo carinho...",
    "Criando um ambiente acolhedor...",
    "Seu legado de amor está sendo preparado...",
    "Quase pronto para te receber com carinho..."
  ];

  useEffect(() => {
    // Marcar como cliente para evitar problemas de hidratação
    setIsClient(true);

    // Animação de progresso
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Troca de mensagens
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1500);

    // Mostrar corações após 1 segundo
    setTimeout(() => setShowHearts(true), 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onLoadingComplete, messages.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1a365d] via-[#2d5aa0] to-[#1a365d] z-50 flex items-center justify-center overflow-hidden">
      {/* Partículas de fundo - apenas renderiza no cliente */}
      <div className="absolute inset-0">
        {isClient && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo/Título */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Legado<span className="text-[#f6e05e]">Vivo</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f6e05e] to-transparent mx-auto animate-pulse" />
        </div>

        {/* Coração central pulsante */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto relative">
            {/* Coração principal */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-heartbeat">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            
            {/* Ondas de amor */}
            <div className="absolute inset-0 border-2 border-pink-300/30 rounded-full animate-ping" />
            <div className="absolute inset-0 border-2 border-red-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Corações flutuantes - apenas renderiza no cliente */}
          {showHearts && isClient && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float opacity-60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                >
                  <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mensagem empática */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-lg md:text-xl text-white/90 font-medium animate-fade-in-up leading-relaxed">
            {messages[currentMessage]}
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="mb-6">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#f6e05e] to-[#d69e2e] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Brilho na barra */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          <p className="text-white/70 text-sm mt-2">{progress}%</p>
        </div>

        {/* Texto de apoio */}
        <div className="text-center">
          <p className="text-white/60 text-sm italic">
            {progress < 90 
              ? "\"O amor verdadeiro nunca se acaba...\""
              : "\"Suas palavras de amor estão sendo cuidadosamente preparadas...\""
            }
          </p>
        </div>
      </div>

      {/* Efeito de luz suave no fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse" />
    </div>
  );
}

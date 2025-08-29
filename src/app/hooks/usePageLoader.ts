"use client";

import { useState, useEffect } from 'react';

interface UsePageLoaderReturn {
  isLoading: boolean;
  progress: number;
  error: string | null;
}

export function usePageLoader(): UsePageLoaderReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // Lista de recursos críticos para preload
        const criticalAssets = [
          '/images/backgrounds/background.png', // Imagem de fundo principal
          // Adicione outras imagens críticas aqui se necessário
        ];

        let loadedCount = 0;
        const totalAssets = criticalAssets.length;

        const loadPromises = criticalAssets.map((src) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            
            img.onload = () => {
              loadedCount++;
              setProgress((loadedCount / totalAssets) * 80); // 80% para imagens
              resolve();
            };
            
            img.onerror = () => {
              console.warn(`Falha ao carregar: ${src}`);
              loadedCount++;
              setProgress((loadedCount / totalAssets) * 80);
              resolve(); // Não rejeita para não bloquear outras imagens
            };
            
            img.src = src;
          });
        });

        // Aguarda todas as imagens carregarem
        await Promise.allSettled(loadPromises);
        
        // Simula carregamento de outros recursos (fontes, scripts, etc)
        setProgress(90);
        
        // Aguarda um tempo mínimo para mostrar a tela de loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setProgress(100);
        
        // Pequeno delay antes de remover o loading
        setTimeout(() => {
          setIsLoading(false);
        }, 500);

      } catch (err) {
        console.error('Erro durante o preload:', err);
        setError('Erro ao carregar recursos');
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  return {
    isLoading,
    progress,
    error
  };
}

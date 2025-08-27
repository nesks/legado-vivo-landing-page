"use client";

import { useState, useEffect } from "react";

export type AdType = 'A' | 'B' | 'C' | null;

export const useAdParameter = () => {
  const [adType, setAdType] = useState<AdType>(null);

  useEffect(() => {
    // Primeiro, verificar se já existe valor no localStorage
    const savedAd = localStorage.getItem('legado-vivo-ad') as AdType;
    
    if (savedAd && ['A', 'B', 'C'].includes(savedAd)) {
      // Se existe no localStorage, usar ele e ignorar parâmetro da URL
      setAdType(savedAd);
    } else {
      // Se não existe no localStorage, verificar parâmetro da URL
      const urlParams = new URLSearchParams(window.location.search);
      const adParam = urlParams.get('ad');
      
      if (adParam && ['A', 'B', 'C'].includes(adParam.toUpperCase())) {
        const newAdType = adParam.toUpperCase() as AdType;
        setAdType(newAdType);
        // Salvar no localStorage
        localStorage.setItem('legado-vivo-ad', newAdType);
      }
    }
  }, []);

  return adType;
};

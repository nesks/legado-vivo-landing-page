"use client";

import { useState, useEffect } from "react";

export const useDeviceDetection = () => {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const detectDevice = () => {
      // Detectar iOS através do User Agent
      const userAgent = window.navigator.userAgent;
      const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
      
      setIsIOS(isIOSDevice);
      setIsLoading(false);
    };

    detectDevice();
  }, []);

  return { isIOS, isLoading };
};

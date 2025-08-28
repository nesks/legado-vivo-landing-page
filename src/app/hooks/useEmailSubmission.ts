"use client";

import { useState } from "react";
import { useDeviceDetection } from "./useDeviceDetection";
import { useAdParameter } from "./useAdParameter";

interface EmailSubmissionData {
  email: string;
}

interface ApiResponse {
  message?: string;
  error?: string;
  id?: string;
}

export const useEmailSubmission = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  
  const { isIOS } = useDeviceDetection();
  const adType = useAdParameter();

  const submitEmail = async (emailData: EmailSubmissionData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailData.email,
          isIOS,
          adType,
        }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao salvar email');
      }

      setSuccess(true);
      return { success: true, message: data.message, id: data.id };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      return { success: false, error: errorMessage };

    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  return {
    submitEmail,
    isLoading,
    error,
    success,
    resetState,
    deviceInfo: {
      isIOS,
      adType,
    }
  };
};

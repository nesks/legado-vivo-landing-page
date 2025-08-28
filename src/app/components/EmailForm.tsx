"use client";

import { useState } from "react";
import { useEmailSubmission } from "../hooks/useEmailSubmission";

export default function EmailForm() {
  const [email, setEmail] = useState<string>("");
  const { 
    submitEmail, 
    isLoading, 
    error, 
    success, 
    resetState,
    deviceInfo 
  } = useEmailSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    const result = await submitEmail({ email });
    
    if (result.success) {
      setEmail(""); // Limpar o campo após sucesso
      console.log("Email salvo com sucesso:", result);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error || success) {
      resetState(); // Limpar estado quando o usuário começar a digitar novamente
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Cadastre seu email
      </h2>
      
      {/* Informações de debug (remover em produção) */}
      <div className="mb-4 p-3 bg-gray-100 rounded text-sm">
        <p><strong>Dispositivo:</strong> {deviceInfo.isIOS ? 'iOS' : 'Outros'}</p>
        <p><strong>Parâmetro Ad:</strong> {deviceInfo.adType || 'Não definido'}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Digite seu email"
            required
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !email.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Salvando..." : "Cadastrar Email"}
        </button>

        {/* Mensagens de feedback */}
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Email cadastrado com sucesso!
          </div>
        )}
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useEmailSubmission } from "../hooks/useEmailSubmission";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  // Hook para submissão de email
  const {
    submitEmail,
    isLoading,
    error,
    success,
    resetState
  } = useEmailSubmission();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const result = await submitEmail({ email });
      
      if (result.success) {
        setEmail(""); // Limpar o campo após sucesso
        console.log("Email salvo com sucesso:", result);
      }
    }
  };

  return (
    <footer id="footer" className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] text-white">
      <div id="footer-container" className="max-w-4xl mx-auto px-6 text-center">
        <h2 id="footer-title" className="text-4xl md:text-5xl font-bold mb-6">
          Porque algumas palavras merecem ser{" "}
          <span id="footer-title-highlight" className="text-[#f6e05e]">eternas</span>
        </h2>
        
        <p id="footer-subtitle" className="text-xl text-blue-100 mb-12 leading-relaxed">
          Não deixe que suas palavras mais importantes se percam no tempo. 
          Seja um dos primeiros a criar seu legado digital.
        </p>
        
        {!success ? (
          <form id="footer-form" onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
            <div id="footer-form-wrapper" className="flex flex-col sm:flex-row gap-4">
              <input
                id="footer-email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) {
                    resetState(); // Limpar estado quando o usuário começar a digitar novamente
                  }
                }}
                placeholder="Seu melhor e-mail"
                required
                disabled={isLoading}
                className="flex-1 px-6 py-4 text-lg border-2 border-white/20 rounded-xl focus:border-[#f6e05e] focus:outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70 disabled:bg-white/5 disabled:cursor-not-allowed"
              />
              <button
                id="footer-submit-btn"
                type="submit"
                disabled={isLoading || !email.trim()}
                className="px-8 py-4 bg-gradient-to-r from-[#d69e2e] to-[#f6e05e] text-[#1a365d] text-lg font-semibold rounded-xl hover:from-[#f6e05e] hover:to-[#d69e2e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Salvando..." : "Quero ser avisado"}
              </button>
            </div>
            
            {/* Mensagens de erro */}
            {error && (
              <div className="mt-4 p-3 bg-red-100/90 border border-red-400 text-red-700 rounded-xl backdrop-blur-sm animate-pulse">
                {error}
              </div>
            )}
          </form>
        ) : (
          /* Animação de Sucesso - Footer */
          <div className="max-w-md mx-auto mb-12 text-center animate-fade-in">
            {/* Ícone de Coração Animado */}
            <div className="mb-6 animate-bounce">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <svg className="w-8 h-8 text-white animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>

            {/* Mensagem Principal */}
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
              Amor Registrado! 💝
            </h3>

            {/* Mensagem Secundária */}
            <p className="text-lg text-white/90 mb-6 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
              Vamos te avisar por email assim que o 
              <span className="text-[#f6e05e] font-semibold"> LegadoVivo</span> estiver no ar!
            </p>

            {/* Botão de Reset */}
            <button
              onClick={() => {
                resetState();
                setEmail("");
              }}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 animate-fade-in-up animation-delay-500"
            >
              Cadastrar Outro Email
            </button>
          </div>
        )}

        {/* Footer Navigation - 5 Columns */}
        <div id="footer-navigation" className="border-t border-white/20 pt-12 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

            {/* Column 1 - Sobre */}
            <div>
              <h4 className="font-bold text-white mb-4">Sobre</h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors duration-200">
                    O que é LegadoVivo
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors duration-200">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-white transition-colors duration-200">
                    Planos
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 - Recursos */}
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <a href="#seguranca" className="hover:text-white transition-colors duration-200">
                    Segurança
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors duration-200">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <a href="/politica-privacidade" className="hover:text-white transition-colors duration-200">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos-uso" className="hover:text-white transition-colors duration-200">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/seguranca-infantil" className="hover:text-white transition-colors duration-200">
                    Segurança Infantil
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors duration-200">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Suporte */}
            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <a href="mailto:felipesnunes@gmail.com" className="hover:text-white transition-colors duration-200">
                    felipesnunes@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5531994831043" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                    (31) 99483-1043
                  </a>
                </li>
                <li className="text-xs text-blue-200">
                  Resposta em até 15 dias
                </li>
              </ul>
            </div>

            {/* Column 5 - Logo e Redes Sociais */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/logos/logo-sem-titulo.png"
                    alt="Logo LegadoVivo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">LegadoVivo</span>
              </div>
              <p className="text-sm text-blue-100 mb-4">
                Transformando mensagens em eternidade.
              </p>
              {/* Future: Social media icons can be added here */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
              <div>
                © 2025 LegadoVivo. Todos os direitos reservados.
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Conformidade LGPD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
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
        
        <form id="footer-form" onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
          <div id="footer-form-wrapper" className="flex flex-col sm:flex-row gap-4">
            <input
              id="footer-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 text-lg border-2 border-white/20 rounded-xl focus:border-[#f6e05e] focus:outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
            />
            <button
              id="footer-submit-btn"
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-gradient-to-r from-[#d69e2e] to-[#f6e05e] text-[#1a365d] text-lg font-semibold rounded-xl hover:from-[#f6e05e] hover:to-[#d69e2e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
            >
              {isSubscribed ? "✓ Inscrito!" : "Quero ser avisado"}
            </button>
          </div>
        </form>
        
        <div id="footer-bottom" className="border-t border-white/20 pt-8">
          <div id="footer-bottom-content" className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div id="footer-brand" className="flex items-center space-x-2">
              <div id="footer-logo" className="w-8 h-8 flex items-center justify-center">
                <img 
                  id="footer-logo-image" 
                  src="/images/logos/logo.webp" 
                  alt="Logo LegadoVivo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span id="footer-brand-text" className="text-xl font-semibold">LegadoVivo</span>
            </div>
            
            <div id="footer-copyright" className="text-sm text-blue-200">
              © 2024 LegadoVivo. Transformando mensagens em eternidade.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
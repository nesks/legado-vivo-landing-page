"use client";

import { useState } from "react";
import PlansSection from "./components/PlansSection";
import SecuritySection from "./components/SecuritySection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function LegadoVivoLanding() {
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
    <div id="legado-vivo-landing" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-amber-50 overflow-hidden">
        <div id="hero-background" className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/5 to-[#d69e2e]/5"></div>
        
        {/* Decorative elements */}
        <div id="hero-decoration-left" className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#1a365d]/10 to-[#d69e2e]/10 rounded-full blur-xl"></div>
        <div id="hero-decoration-right" className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#d69e2e]/10 to-[#1a365d]/10 rounded-full blur-xl"></div>
        
        <div id="hero-content" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div id="hero-logo-container" className="mb-8">
            <div id="hero-logo-wrapper" className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg mb-8">
              <div id="hero-logo" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#d69e2e] rounded-2xl flex items-center justify-center">
                <svg id="hero-logo-icon" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] mb-6 leading-tight">
            Quando suas palavras forem{" "}
            <span id="hero-title-highlight" className="gradient-text">eternas</span>,<br />
            seu amor jamais será esquecido
          </h1>
          
          <p id="hero-subtitle" className="text-xl md:text-2xl text-[#4a5568] mb-12 max-w-3xl mx-auto leading-relaxed">
            Estamos construindo o <strong id="hero-brand-name" className="text-[#1a365d]">LegadoVivo</strong>: um aplicativo seguro que transforma mensagens em legados digitais de amor.
          </p>
          
          <form id="hero-form" onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div id="hero-form-wrapper" className="flex flex-col sm:flex-row gap-4">
              <input
                id="hero-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 text-lg border-2 border-[#1a365d]/20 rounded-xl focus:border-[#d69e2e] focus:outline-none transition-colors bg-white/80 backdrop-blur-sm"
              />
              <button
                id="hero-submit-btn"
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-4 bg-gradient-to-r from-[#1a365d] to-[#2d5aa0] text-white text-lg font-semibold rounded-xl hover:from-[#2d5aa0] hover:to-[#1a365d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
              >
                {isSubscribed ? "✓ Inscrito!" : "Quero ser avisado no lançamento"}
              </button>
            </div>
          </form>
          
          <div id="hero-illustration-container" className="mt-16">
            <div id="hero-illustration-wrapper" className="inline-block p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg">
              <div id="hero-illustration-icon" className="w-24 h-24 mx-auto bg-gradient-to-br from-[#d69e2e]/20 to-[#1a365d]/20 rounded-2xl flex items-center justify-center mb-4">
                <svg id="hero-phone-icon" className="w-12 h-12 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p id="hero-illustration-text" className="text-[#4a5568] text-sm">
                Pessoa segurando celular com luz suave,<br />
                simbolizando mensagem eterna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o LegadoVivo */}
      <section id="sobre" className="py-20 bg-white">
        <div id="sobre-container" className="max-w-6xl mx-auto px-6">
          <div id="sobre-header" className="text-center mb-16">
            <h2 id="sobre-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              O que é o <span id="sobre-title-highlight" className="gradient-text">LegadoVivo?</span>
            </h2>
            <p id="sobre-description" className="text-xl text-[#4a5568] max-w-4xl mx-auto leading-relaxed">
              Um aplicativo seguro e intuitivo onde você poderá escrever ou gravar mensagens para pessoas queridas — entregues automaticamente após seu falecimento, com total privacidade e cuidado.
            </p>
          </div>
          
          <div id="sobre-features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div id="feature-seguranca" className="text-center hover-lift p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white">
              <div id="feature-seguranca-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-2xl flex items-center justify-center mb-6">
                <svg id="seguranca-svg" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 id="feature-seguranca-title" className="text-xl font-semibold text-[#1a365d] mb-3">Segurança</h3>
              <p id="feature-seguranca-desc" className="text-[#4a5568]">Criptografia de ponta a ponta para proteger suas mensagens mais preciosas</p>
            </div>
            
            <div id="feature-empatia" className="text-center hover-lift p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white">
              <div id="feature-empatia-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-2xl flex items-center justify-center mb-6">
                <svg id="empatia-svg" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 id="feature-empatia-title" className="text-xl font-semibold text-[#1a365d] mb-3">Empatia</h3>
              <p id="feature-empatia-desc" className="text-[#4a5568]">Desenvolvido com carinho para momentos delicados e importantes</p>
            </div>
            
            <div id="feature-inovacao" className="text-center hover-lift p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white">
              <div id="feature-inovacao-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-2xl flex items-center justify-center mb-6">
                <svg id="inovacao-svg" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 id="feature-inovacao-title" className="text-xl font-semibold text-[#1a365d] mb-3">Inovação</h3>
              <p id="feature-inovacao-desc" className="text-[#4a5568]">Tecnologia moderna para preservar memórias para o futuro</p>
            </div>
            
            <div id="feature-legado" className="text-center hover-lift p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white">
              <div id="feature-legado-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-2xl flex items-center justify-center mb-6">
                <svg id="legado-svg" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 id="feature-legado-title" className="text-xl font-semibold text-[#1a365d] mb-3">Legado</h3>
              <p id="feature-legado-desc" className="text-[#4a5568]">Suas palavras preservadas para sempre, criando um legado eterno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Vai Funcionar */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div id="como-funciona-container" className="max-w-6xl mx-auto px-6">
          <div id="como-funciona-header" className="text-center mb-16">
            <h2 id="como-funciona-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Como Vai <span id="como-funciona-highlight" className="gradient-text">Funcionar?</span>
            </h2>
            <p id="como-funciona-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              Três passos simples para criar seu legado digital
            </p>
          </div>
          
          <div id="como-funciona-steps" className="grid md:grid-cols-3 gap-8">
            <div id="step-1-container" className="relative">
              <div id="step-1" className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                <div id="step-1-number" className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-2xl mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 id="step-1-title" className="text-2xl font-semibold text-[#1a365d] mb-4">Grave sua mensagem</h3>
                <p id="step-1-description" className="text-[#4a5568] leading-relaxed">
                  Escreva, grave em áudio ou filme um vídeo com suas palavras mais importantes para quem você ama.
                </p>
                <div id="step-1-icon-container" className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl">
                  <svg id="step-1-icon" className="w-12 h-12 text-[#1a365d] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              {/* Arrow */}
              <div id="arrow-1-2" className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-[#d69e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div id="step-2-container" className="relative">
              <div id="step-2" className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                <div id="step-2-number" className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-2xl mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 id="step-2-title" className="text-2xl font-semibold text-[#1a365d] mb-4">Escolha os destinatários</h3>
                <p id="step-2-description" className="text-[#4a5568] leading-relaxed">
                  Defina quem receberá suas mensagens e as condições para que sejam entregues no momento certo.
                </p>
                <div id="step-2-icon-container" className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-blue-50 rounded-xl">
                  <svg id="step-2-icon" className="w-12 h-12 text-[#d69e2e] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              {/* Arrow */}
              <div id="arrow-2-3" className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-[#d69e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div id="step-3" className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
              <div id="step-3-number" className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1a365d] to-[#d69e2e] rounded-2xl mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 id="step-3-title" className="text-2xl font-semibold text-[#1a365d] mb-4">Confie na entrega segura</h3>
              <p id="step-3-description" className="text-[#4a5568] leading-relaxed">
                Suas mensagens ficam protegidas e serão entregues de forma validada no momento certo, com total segurança.
              </p>
              <div id="step-3-icon-container" className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl">
                <svg id="step-3-icon" className="w-12 h-12 text-[#1a365d] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seções importadas */}
      <PlansSection />
      <SecuritySection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
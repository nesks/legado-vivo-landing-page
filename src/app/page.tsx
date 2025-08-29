"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import PlansSection from "./components/PlansSection";
import SecuritySection from "./components/SecuritySection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import LazySection from "./components/LazySection";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useEmailSubmission } from "./hooks/useEmailSubmission";
import { usePageLoader } from "./hooks/usePageLoader";

export default function LegadoVivoLanding() {
  const [email, setEmail] = useState("");
  
  // Hook para scroll suave
  useSmoothScroll();
  
  // Hook para carregamento da página
  const { isLoading: isPageLoading } = usePageLoader();
  
  // Hook para submissão de email
  const { 
    submitEmail, 
    isLoading, 
    error, 
    success, 
    resetState,
    deviceInfo 
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

  // Mostrar tela de loading enquanto carrega
  if (isPageLoading) {
    return <LoadingScreen onLoadingComplete={() => {}} />;
  }

  return (
    <div id="legado-vivo-landing" className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-amber-50 overflow-hidden pt-4 pb-8 sm:pt-16 page-transition-enter-active">
        <div id="hero-background" className="absolute inset-0 bg-optimized will-change-transform" style={{
          backgroundImage: 'url(/images/backgrounds/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div id="hero-overlay" className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/80 via-[#1a365d]/70 to-[#2d5aa0]/60"></div>
        
        {/* Decorative elements */}
        <div id="hero-decoration-left" className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#1a365d]/10 to-[#d69e2e]/10 rounded-full blur-xl"></div>
        <div id="hero-decoration-right" className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#d69e2e]/10 to-[#1a365d]/10 rounded-full blur-xl"></div>
        
        <div id="hero-content" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          
          {/* Logo no Mobile - aparece apenas quando o header está escondido */}
          <div id="hero-mobile-logo" className="md:hidden mb-6 animate-fade-in">
            <div className="flex justify-center">
              <Image 
                id="hero-mobile-logo-image"
                src="/images/logos/logo.png" 
                alt="Logo LegadoVivo" 
                width={120}
                height={120}
                className="w-28 h-28 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-6 leading-tight drop-shadow-2xl">
            Quando suas palavras forem{" "}
            <span id="hero-title-highlight" className="text-[#f6e05e] drop-shadow-lg">eternas</span>,<br />
            seu amor jamais será esquecido
          </h1>
          
          <p id="hero-subtitle" className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Estamos construindo o <strong id="hero-brand-name" className="text-[#f6e05e] drop-shadow-md">LegadoVivo</strong>: um aplicativo seguro que transforma mensagens em legados digitais de amor.
          </p>
          
          {/* Formulário de Email */}
          {!success ? (
            <form id="hero-form" onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div id="hero-form-wrapper" className="flex flex-col gap-3 sm:gap-4">
                <input
                  id="hero-email-input"
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
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-white/30 rounded-xl focus:border-[#f6e05e] focus:outline-none transition-all duration-500 bg-white/90 backdrop-blur-sm text-[#1a365d] placeholder-[#1a365d]/70 font-medium disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  id="hero-submit-btn"
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#f6e05e] to-[#d69e2e] text-[#1a365d] text-base sm:text-lg font-bold rounded-xl hover:from-[#d69e2e] hover:to-[#f6e05e] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 drop-shadow-lg disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <span className="hidden sm:inline">
                    {isLoading ? "Salvando..." : "Quero ser avisado no lançamento"}
                  </span>
                  <span className="sm:hidden">
                    {isLoading ? "Salvando..." : "Quero ser avisado"}
                  </span>
                </button>
              </div>
              
              {/* Mensagens de erro */}
              {error && (
                <div className="mt-4 p-3 bg-red-100/90 border border-red-400 text-red-700 rounded-xl backdrop-blur-sm animate-pulse">
                  {error}
                </div>
              )}
              
              {/* Informações de debug (comentar em produção) */}
              {process.env.NODE_ENV === 'development' && deviceInfo && (
                <div className="mt-4 p-3 bg-blue-100/90 border border-blue-400 text-blue-700 rounded-xl backdrop-blur-sm text-sm">
                  <strong>Debug:</strong> Dispositivo: {deviceInfo.isIOS ? 'iOS' : 'Outros'} | Parâmetro: {deviceInfo.adType || 'Não definido'}
                </div>
              )}
            </form>
          ) : (
            /* Animação de Sucesso - Entregar Amor */
            <div className="max-w-md mx-auto text-center animate-fade-in">
              {/* Ícone de Coração Animado */}
              <div className="mb-6 animate-bounce">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <svg className="w-12 h-12 text-white animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>

              {/* Mensagem Principal */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
                Amor Registrado! 💝
              </h3>

              {/* Mensagem Secundária */}
              <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
                Vamos te avisar por email assim que o 
                <span className="text-[#f6e05e] font-semibold"> LegadoVivo</span> estiver no ar!
              </p>

              {/* Ícones Flutuantes */}
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full animate-float opacity-80"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-float animation-delay-300 opacity-80"></div>
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-blue-300 rounded-full animate-float animation-delay-500 opacity-80"></div>
                <div className="absolute -bottom-4 right-6 w-5 h-5 bg-green-300 rounded-full animate-float animation-delay-700 opacity-80"></div>
              </div>

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

      {/* Seções importadas com lazy loading */}
      <LazySection>
        <PlansSection />
      </LazySection>
      
      <LazySection>
        <SecuritySection />
      </LazySection>
      
      <LazySection>
        <TestimonialSection />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
}

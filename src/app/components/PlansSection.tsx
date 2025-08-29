"use client";

import { useState, useEffect } from "react";
import { useAdParameter } from "../hooks/useAdParameter";
import { plansData } from "../data/plansData";

export default function PlansSection() {
  const adType = useAdParameter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play do slider
  useEffect(() => {
    if (!adType) return;

    const adData = plansData[adType];
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adData.plans.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [adType]);

  // Se não há parâmetro de anúncio, não renderiza a seção
  if (!adType) {
    return null;
  }

  const adData = plansData[adType];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % adData.plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + adData.plans.length) % adData.plans.length);
  };

  return (
    <section id="planos" className="py-20 bg-white">
      <div id="planos-container" className="max-w-6xl mx-auto px-6">
        <div id="planos-header" className="text-center mb-16">
          <h2 id="planos-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            <span id="planos-title-highlight" className="gradient-text">{adData.title}</span>
          </h2>
          <p id="planos-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto mb-8">
            {adData.subtitle}
          </p>
          <div id="planos-availability-notice" className="inline-block bg-gradient-to-r from-[#d69e2e]/10 to-[#1a365d]/10 rounded-full px-6 py-3">
            <p id="planos-availability-text" className="text-[#1a365d] font-medium">
              Os planos estarão disponíveis em breve. Deixe seu e-mail e seja o primeiro a experimentar.
            </p>
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div id="planos-grid" className="hidden md:grid md:grid-cols-3 gap-8">
          {adData.plans.map((plan, index) => (
            <div 
              key={plan.id}
              id={`plano-${plan.id}`}
              className={`relative rounded-3xl p-8 shadow-lg hover-lift border-2 border-transparent ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-50 to-white shadow-xl border-[#d69e2e]/30 transform scale-105' 
                  : index % 2 === 0 
                    ? 'bg-gradient-to-br from-blue-50 to-white hover:border-[#2d5aa0]/20'
                    : 'bg-gradient-to-br from-gray-50 to-white hover:border-[#1a365d]/20'
              }`}
            >
              
              
              <div id={`plano-${plan.id}-content`} className="text-center">
                <div 
                  id={`plano-${plan.id}-icon`} 
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(to bottom right, ${plan.gradient.from}, ${plan.gradient.to})`
                  }}
                >
                  <span id={`plano-${plan.id}-emoji`} className="text-2xl">{plan.emoji}</span>
                </div>
                
                <h3 id={`plano-${plan.id}-name`} className="text-2xl font-bold text-[#1a365d] mb-2">{plan.name}</h3>
                
                <div id={`plano-${plan.id}-price`} className="mb-6">
                  <span id={`plano-${plan.id}-value`} className="text-4xl font-bold text-[#1a365d]">{plan.price}</span>
                  <span id={`plano-${plan.id}-period`} className="text-[#4a5568]">{plan.period}</span>
                </div>
                
                <ul id={`plano-${plan.id}-features`} className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      id={`${plan.id}-feature-${featureIndex + 1}`} 
                      className="flex items-center text-[#4a5568]"
                    >
                      <svg 
                        id={`${plan.id}-check-${featureIndex + 1}`} 
                        className="w-5 h-5 mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: plan.checkColor }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
                         {/* Slider Container */}
             <div className="overflow-hidden">
               <div 
                 className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
               >
                {adData.plans.map((plan, index) => (
                  <div 
                    key={plan.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                                         <div 
                       id={`plano-mobile-${plan.id}`}
                       className={`relative rounded-3xl p-8 shadow-lg border-2 border-transparent ${
                         plan.popular 
                           ? 'bg-gradient-to-br from-amber-50 to-white shadow-xl border-[#d69e2e]/30' 
                           : index % 2 === 0 
                             ? 'bg-gradient-to-br from-blue-50 to-white'
                             : 'bg-gradient-to-br from-gray-50 to-white'
                       }`}
                     >
                      
                      <div className="text-center">
                        <div 
                          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                          style={{
                            background: `linear-gradient(to bottom right, ${plan.gradient.from}, ${plan.gradient.to})`
                          }}
                        >
                          <span className="text-2xl">{plan.emoji}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{plan.name}</h3>
                        
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-[#1a365d]">{plan.price}</span>
                          <span className="text-[#4a5568]">{plan.period}</span>
                        </div>
                        
                        <ul className="text-left space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex}
                              className="flex items-center text-[#4a5568]"
                            >
                              <svg 
                                className="w-5 h-5 mr-3" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                style={{ color: plan.checkColor }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#1a365d] hover:bg-white transition-all duration-200 z-10"
              aria-label="Plano anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#1a365d] hover:bg-white transition-all duration-200 z-10"
              aria-label="Próximo plano"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {adData.plans.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-[#1a365d] scale-125' 
                    : 'bg-[#1a365d]/30 hover:bg-[#1a365d]/50'
                }`}
                aria-label={`Ir para plano ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
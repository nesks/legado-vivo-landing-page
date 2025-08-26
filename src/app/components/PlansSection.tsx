export default function PlansSection() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div id="planos-container" className="max-w-6xl mx-auto px-6">
        <div id="planos-header" className="text-center mb-16">
          <h2 id="planos-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Planos de <span id="planos-title-highlight" className="gradient-text">Acesso</span>
          </h2>
          <p id="planos-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para preservar suas mensagens mais importantes
          </p>
          <div id="planos-availability-notice" className="inline-block bg-gradient-to-r from-[#d69e2e]/10 to-[#1a365d]/10 rounded-full px-6 py-3">
            <p id="planos-availability-text" className="text-[#1a365d] font-medium">
              Os planos estarão disponíveis em breve. Deixe seu e-mail e seja o primeiro a experimentar.
            </p>
          </div>
        </div>
        
        <div id="planos-grid" className="grid md:grid-cols-3 gap-8">
          {/* Plano Essencial */}
          <div id="plano-essencial" className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-[#2d5aa0]/20">
            <div id="plano-essencial-content" className="text-center">
              <div id="plano-essencial-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-2xl flex items-center justify-center mb-6">
                <span id="plano-essencial-emoji" className="text-2xl">🌱</span>
              </div>
              <h3 id="plano-essencial-name" className="text-2xl font-bold text-[#1a365d] mb-2">Essencial</h3>
              <div id="plano-essencial-price" className="mb-6">
                <span id="plano-essencial-value" className="text-4xl font-bold text-[#1a365d]">R$ 14,90</span>
                <span id="plano-essencial-period" className="text-[#4a5568]">/mês</span>
              </div>
              <ul id="plano-essencial-features" className="text-left space-y-3 mb-8">
                <li id="essencial-feature-1" className="flex items-center text-[#4a5568]">
                  <svg id="essencial-check-1" className="w-5 h-5 text-[#2d5aa0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Até 3 mensagens
                </li>
                <li id="essencial-feature-2" className="flex items-center text-[#4a5568]">
                  <svg id="essencial-check-2" className="w-5 h-5 text-[#2d5aa0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Texto ou áudio
                </li>
                <li id="essencial-feature-3" className="flex items-center text-[#4a5568]">
                  <svg id="essencial-check-3" className="w-5 h-5 text-[#2d5aa0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Segurança básica
                </li>
              </ul>
            </div>
          </div>
          
          {/* Plano Premium */}
          <div id="plano-premium" className="relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-xl hover-lift border-2 border-[#d69e2e]/30 transform scale-105">
            <div id="plano-premium-badge-container" className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span id="plano-premium-badge" className="bg-gradient-to-r from-[#d69e2e] to-[#f6e05e] text-white px-4 py-2 rounded-full text-sm font-medium">
                Mais Popular
              </span>
            </div>
            <div id="plano-premium-content" className="text-center">
              <div id="plano-premium-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-2xl flex items-center justify-center mb-6">
                <span id="plano-premium-emoji" className="text-2xl">🌟</span>
              </div>
              <h3 id="plano-premium-name" className="text-2xl font-bold text-[#1a365d] mb-2">Premium</h3>
              <div id="plano-premium-price" className="mb-6">
                <span id="plano-premium-value" className="text-4xl font-bold text-[#1a365d]">R$ 29,90</span>
                <span id="plano-premium-period" className="text-[#4a5568]">/mês</span>
              </div>
              <ul id="plano-premium-features" className="text-left space-y-3 mb-8">
                <li id="premium-feature-1" className="flex items-center text-[#4a5568]">
                  <svg id="premium-check-1" className="w-5 h-5 text-[#d69e2e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Até 10 mensagens
                </li>
                <li id="premium-feature-2" className="flex items-center text-[#4a5568]">
                  <svg id="premium-check-2" className="w-5 h-5 text-[#d69e2e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vídeos e anexos
                </li>
                <li id="premium-feature-3" className="flex items-center text-[#4a5568]">
                  <svg id="premium-check-3" className="w-5 h-5 text-[#d69e2e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Segurança avançada
                </li>
                <li id="premium-feature-4" className="flex items-center text-[#4a5568]">
                  <svg id="premium-check-4" className="w-5 h-5 text-[#d69e2e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte prioritário
                </li>
              </ul>
            </div>
          </div>
          
          {/* Plano Eterno */}
          <div id="plano-eterno" className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-[#1a365d]/20">
            <div id="plano-eterno-content" className="text-center">
              <div id="plano-eterno-icon" className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#d69e2e] rounded-2xl flex items-center justify-center mb-6">
                <span id="plano-eterno-emoji" className="text-2xl">👑</span>
              </div>
              <h3 id="plano-eterno-name" className="text-2xl font-bold text-[#1a365d] mb-2">Eterno</h3>
              <div id="plano-eterno-price" className="mb-6">
                <span id="plano-eterno-value" className="text-4xl font-bold text-[#1a365d]">R$ 49,90</span>
                <span id="plano-eterno-period" className="text-[#4a5568]">/mês</span>
              </div>
              <ul id="plano-eterno-features" className="text-left space-y-3 mb-8">
                <li id="eterno-feature-1" className="flex items-center text-[#4a5568]">
                  <svg id="eterno-check-1" className="w-5 h-5 text-[#1a365d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mensagens ilimitadas
                </li>
                <li id="eterno-feature-2" className="flex items-center text-[#4a5568]">
                  <svg id="eterno-check-2" className="w-5 h-5 text-[#1a365d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  &ldquo;Carta do Futuro&rdquo;
                </li>
                <li id="eterno-feature-3" className="flex items-center text-[#4a5568]">
                  <svg id="eterno-check-3" className="w-5 h-5 text-[#1a365d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Backup na nuvem
                </li>
                <li id="eterno-feature-4" className="flex items-center text-[#4a5568]">
                  <svg id="eterno-check-4" className="w-5 h-5 text-[#1a365d] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
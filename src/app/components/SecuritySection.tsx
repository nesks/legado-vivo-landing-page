export default function SecuritySection() {
  return (
    <section id="seguranca" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div id="seguranca-container" className="max-w-6xl mx-auto px-6">
        <div id="seguranca-header" className="text-center mb-16">
          <h2 id="seguranca-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Segurança e <span id="seguranca-title-highlight" className="gradient-text">Tecnologia</span>
          </h2>
          <p id="seguranca-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto">
            Suas mensagens protegidas com a mais alta tecnologia de segurança
          </p>
        </div>
        
        <div id="seguranca-content" className="grid md:grid-cols-2 gap-12 items-center">
          <div id="seguranca-features">
            <div id="seguranca-features-list" className="space-y-8">
              <div id="feature-criptografia" className="flex items-start space-x-4">
                <div id="feature-criptografia-icon" className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg id="criptografia-svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div id="feature-criptografia-content">
                  <h3 id="feature-criptografia-title" className="text-xl font-semibold text-[#1a365d] mb-2">Segurança Avançada</h3>
                  <p id="feature-criptografia-desc" className="text-[#4a5568]">Suas mensagens são protegidas com criptografia de nível bancário. Estamos implementando criptografia end-to-end para garantir que apenas você e o destinatário tenham acesso ao conteúdo.</p>
                </div>
              </div>
              
              <div id="feature-privacidade" className="flex items-start space-x-4">
                <div id="feature-privacidade-icon" className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg id="privacidade-svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div id="feature-privacidade-content">
                  <h3 id="feature-privacidade-title" className="text-xl font-semibold text-[#1a365d] mb-2">Privacidade total</h3>
                  <p id="feature-privacidade-desc" className="text-[#4a5568]">Nem nós mesmos temos acesso ao conteúdo das suas mensagens. Sua privacidade é nossa prioridade máxima.</p>
                </div>
              </div>
              
              <div id="feature-validacao" className="flex items-start space-x-4">
                <div id="feature-validacao-icon" className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg id="validacao-svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div id="feature-validacao-content">
                  <h3 id="feature-validacao-title" className="text-xl font-semibold text-[#1a365d] mb-2">Agendamento Preciso</h3>
                  <p id="feature-validacao-desc" className="text-[#4a5568]">Sistema inteligente de agendamento garante que as mensagens sejam entregues exatamente na data programada por você.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="seguranca-visual" className="flex justify-center">
            <div id="seguranca-animation" className="relative">
              <div id="security-circle-outer" className="w-80 h-80 bg-gradient-to-br from-[#1a365d]/10 to-[#d69e2e]/10 rounded-full flex items-center justify-center">
                <div id="security-circle-middle" className="w-64 h-64 bg-gradient-to-br from-[#1a365d]/20 to-[#d69e2e]/20 rounded-full flex items-center justify-center">
                  <div id="security-circle-inner" className="w-48 h-48 bg-gradient-to-br from-[#1a365d] to-[#d69e2e] rounded-full flex items-center justify-center shadow-2xl">
                    <svg id="security-main-icon" className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div id="floating-element-1" className="absolute top-8 right-8 w-4 h-4 bg-[#d69e2e] rounded-full animate-pulse"></div>
              <div id="floating-element-2" className="absolute bottom-8 left-8 w-6 h-6 bg-[#1a365d] rounded-full animate-pulse"></div>
              <div id="floating-element-3" className="absolute top-1/2 left-0 w-3 h-3 bg-[#d69e2e] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
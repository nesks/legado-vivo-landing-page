export default function TestimonialSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div id="depoimentos-container" className="max-w-4xl mx-auto px-6 text-center">
        <h2 id="depoimentos-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-12">
          Imagine o <span id="depoimentos-title-highlight" className="gradient-text">Impossível</span>
        </h2>
        
        <div id="depoimentos-card" className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <div id="depoimentos-icon-container" className="w-24 h-24 mx-auto bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-full flex items-center justify-center mb-8">
            <svg id="depoimentos-icon" className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          
          <blockquote id="depoimentos-quote" className="text-2xl md:text-3xl text-[#1a365d] font-medium leading-relaxed mb-8">
            "Imagine poder ouvir novamente a voz de quem ama.<br />
            O LegadoVivo tornará isso possível."
          </blockquote>
          
          <p id="depoimentos-description" className="text-lg text-[#4a5568] leading-relaxed">
            Um dia, quando você mais precisar, uma mensagem especial chegará até você. 
            Uma palavra de carinho, um conselho sábio, ou simplesmente um "eu te amo" 
            que atravessou o tempo para estar ali no momento exato em que você precisava ouvir.
          </p>
        </div>
      </div>
    </section>
  );
}
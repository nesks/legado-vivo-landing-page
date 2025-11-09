"use client";

import { contactData, contactReasons } from "../data/contactData";

export default function ContactSection() {
  const getIconForReason = (icon: string) => {
    switch (icon) {
      case "question":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      case "bug":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        );
      case "idea":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        );
      case "legal":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        );
      case "business":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div id="contato-container" className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div id="contato-header" className="text-center mb-16">
          <h2 id="contato-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p id="contato-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto">
            Estamos aqui para ajudar! Respondemos em {contactData.responseTime}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Contact Info */}
          <div id="contato-info" className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
              Informações de Contato
            </h3>

            {/* Responsible */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1">Responsável</h4>
                <p className="text-[#4a5568]">{contactData.responsible}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1">Email</h4>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-[#2d5aa0] hover:text-[#d69e2e] transition-colors duration-200 underline"
                >
                  {contactData.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1">Telefone/WhatsApp</h4>
                <a
                  href={`https://wa.me/5531994831043`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d5aa0] hover:text-[#d69e2e] transition-colors duration-200 underline"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d69e2e] to-[#f6e05e] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1">Localização</h4>
                <p className="text-[#4a5568]">
                  {contactData.address.city}, {contactData.address.state}
                  <br />
                  {contactData.address.country}
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 border-2 border-[#f6e05e]/30">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-[#d69e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-1">
                    Tempo de Resposta
                  </h4>
                  <p className="text-[#4a5568]">{contactData.responseTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Reasons */}
          <div id="contato-reasons">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
              Como podemos ajudar?
            </h3>
            <div className="space-y-4">
              {contactReasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#f6e05e] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1a365d]/10 to-[#2d5aa0]/10 group-hover:from-[#1a365d] group-hover:to-[#2d5aa0] rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#1a365d] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {getIconForReason(reason.icon)}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1a365d] mb-2 group-hover:text-[#2d5aa0] transition-colors duration-300">
                        {reason.title}
                      </h4>
                      <p className="text-[#4a5568] text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contato-cta" className="bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para criar seu legado?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Cadastre seu email para ser notificado assim que o LegadoVivo estiver disponível
          </p>
          <a
            href="#hero"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#f6e05e] to-[#d69e2e] text-[#1a365d] text-lg font-bold rounded-xl hover:from-[#d69e2e] hover:to-[#f6e05e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Quero ser avisado
          </a>
        </div>
      </div>
    </section>
  );
}

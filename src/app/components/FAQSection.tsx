"use client";

import { useState } from "react";
import { faqData, faqCategories } from "../data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filtrar FAQs por categoria
  const filteredFAQs = selectedCategory === "all"
    ? faqData
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div id="faq-container" className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div id="faq-header" className="text-center mb-12">
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p id="faq-subtitle" className="text-xl text-[#4a5568] max-w-3xl mx-auto">
            Tire suas dúvidas sobre o LegadoVivo
          </p>
        </div>

        {/* Category Filter */}
        <div id="faq-categories" className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-[#1a365d] to-[#2d5aa0] text-white shadow-lg"
                : "bg-white text-[#1a365d] hover:bg-gray-50 border-2 border-gray-200"
            }`}
          >
            Todas
          </button>
          {Object.entries(faqCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? "bg-gradient-to-r from-[#1a365d] to-[#2d5aa0] text-white shadow-lg"
                  : "bg-white text-[#1a365d] hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div id="faq-list" className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              id={`faq-item-${index}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#f6e05e]"
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1a365d] pr-4">
                    {faq.question}
                  </h3>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#d69e2e] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pl-20">
                  <p className="text-[#4a5568] leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após FAQ */}
        <div id="faq-cta" className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Entre em contato conosco, estamos aqui para ajudar!
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#f6e05e] to-[#d69e2e] text-[#1a365d] text-lg font-bold rounded-xl hover:from-[#d69e2e] hover:to-[#f6e05e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Falar com o Suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

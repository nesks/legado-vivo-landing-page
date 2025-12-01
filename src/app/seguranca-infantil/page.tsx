"use client";

import Image from "next/image";
import Link from "next/link";

export default function SegurancaInfantilPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Simples */}
      <header className="bg-[#1a365d] shadow-lg border-b border-[#2d5aa0]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/images/logos/logo-sem-titulo.png"
                alt="Logo LegadoVivo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 font-semibold text-lg text-white">
                LegadoVivo
              </span>
            </Link>
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Política de Normas de Segurança Infantil
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#4a5568]">
            <p><strong>Data de Vigência:</strong> 01/12/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Última Atualização:</strong> 01/12/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Versão:</strong> 1.0</p>
          </div>
        </div>

        {/* AESI Badge */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mb-12 border-2 border-green-300/50">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a365d] mb-1">Conformidade AESI - Google Play</h3>
              <p className="text-[#4a5568] text-sm">
                Esta política está em conformidade com a App Engaged Safety Initiative (AESI) do Google Play
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-12 border-2 border-green-400">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-4xl">🛡️</div>
            <div>
              <h3 className="font-semibold text-[#1a365d] mb-2 text-lg">Aplicativo Exclusivo para Adultos</h3>
              <p className="text-[#4a5568]">
                O <strong>Legado Vivo</strong> é destinado exclusivamente a usuários adultos, com idade mínima de <strong>18 anos</strong>.
                O produto não é voltado para crianças, não contém recursos direcionados a menores e não coleta dados pessoais de crianças.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Índice</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "sec1", title: "1. Escopo e Público-Alvo" },
              { id: "sec2", title: "2. Comunicação e Envio de Mensagens" },
              { id: "sec3", title: "3. Proteção Contra Contato Indesejado" },
              { id: "sec4", title: "4. Conteúdo Permitido e Proibido" },
              { id: "sec5", title: "5. Coleta e Tratamento de Dados" },
              { id: "sec6", title: "6. Denúncia e Moderação" },
              { id: "sec7", title: "7. Conformidade Google Play (AESI)" },
              { id: "sec8", title: "8. Mudanças Nesta Política" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#2d5aa0] hover:text-[#d69e2e] transition-colors duration-200 text-sm"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Sections */}
        <div className="prose prose-lg max-w-none space-y-12">

          {/* Section 1 */}
          <section id="sec1">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">1. Escopo e Público-Alvo</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              O <strong>Legado Vivo</strong> é um aplicativo destinado exclusivamente a usuários adultos, com idade mínima de <strong>18 anos</strong>.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-3">✅ Nosso Compromisso:</p>
              <ul className="list-disc list-inside space-y-2 text-[#4a5568]">
                <li>O produto <strong>NÃO é voltado para crianças</strong></li>
                <li>Não contém recursos direcionados a menores</li>
                <li><strong>NÃO coleta dados pessoais de crianças</strong></li>
                <li>Verificação de idade mínima no cadastro</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec2">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">2. Comunicação e Envio de Mensagens</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              O aplicativo permite que o usuário envie mensagens para o futuro, <strong>apenas para contatos cujo número telefônico o próprio usuário já possui</strong>.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">Para garantir segurança:</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-green-200 rounded-2xl p-5">
                <div className="flex items-center mb-3">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <h4 className="font-semibold text-[#1a365d]">Sem Descoberta de Contatos</h4>
                </div>
                <p className="text-[#4a5568] text-sm">
                  Não existe qualquer mecanismo de descoberta, busca ou sugestão de novos contatos.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-2xl p-5">
                <div className="flex items-center mb-3">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <h4 className="font-semibold text-[#1a365d]">Sem Desconhecidos</h4>
                </div>
                <p className="text-[#4a5568] text-sm">
                  Não é possível enviar mensagens para desconhecidos.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-2xl p-5">
                <div className="flex items-center mb-3">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <h4 className="font-semibold text-[#1a365d]">Sem Interação na Plataforma</h4>
                </div>
                <p className="text-[#4a5568] text-sm">
                  O app não permite interação entre usuários dentro da plataforma.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-2xl p-5">
                <div className="flex items-center mb-3">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <h4 className="font-semibold text-[#1a365d]">Prevenção de Spam</h4>
                </div>
                <p className="text-[#4a5568] text-sm">
                  Cada mensagem é paga, o que previne spam, uso indevido e envios repetitivos.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec3">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">3. Proteção Contra Contato Indesejado ou Abusivo</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Como o app exige que o usuário informe manualmente um número de telefone já existente em seus contatos, os seguintes riscos são <strong>drasticamente reduzidos</strong>:
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Riscos Mitigados:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🚫</span>
                  <p className="text-[#4a5568] text-sm font-medium">Contato com menores desconhecidos</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🎯</span>
                  <p className="text-[#4a5568] text-sm font-medium">Alvos aleatórios</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">⚠️</span>
                  <p className="text-[#4a5568] text-sm font-medium">Assédio ou contato não solicitado</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">Medidas Adicionais de Segurança:</h3>
            <ul className="space-y-3 text-[#4a5568]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Mensagens não podem ser enviadas para números inválidos ou gerados de forma automática.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Não há interação ou envio de mídia em tempo real.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>O conteúdo enviado é privado e acessível somente pelo destinatário no momento futuro programado.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec4">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">4. Conteúdo Permitido e Proibido</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Os usuários concordam em <strong>NÃO enviar</strong> conteúdos que envolvam:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">❌ Estritamente Proibido:</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span><strong>Qualquer material sexual envolvendo menores</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span><strong>Conteúdo de exploração infantil</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Assédio, ameaças ou mensagens abusivas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>Impressões de que o aplicativo pode ser usado para contato com crianças</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6 mt-6">
              <p className="text-[#1a365d] font-semibold mb-2">🔍 Mecanismos de Detecção</p>
              <p className="text-[#4a5568]">
                O Legado Vivo possui <strong>mecanismos automáticos e processos manuais</strong> para identificar e bloquear comportamentos de risco, conforme exigido pela Google Play.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec5">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">5. Coleta e Tratamento de Dados</h2>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a365d]">Proteção de Dados de Crianças</h3>
                </div>
              </div>
              <p className="text-[#4a5568] mb-4">
                O aplicativo <strong>NÃO coleta, processa ou armazena dados de crianças</strong>.
              </p>
              <p className="text-[#4a5568]">
                Apenas números inseridos voluntariamente por usuários adultos são utilizados, exclusivamente para o envio programado de mensagens.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-[#4a5568]">
                Para mais informações sobre como tratamos dados pessoais, consulte nossa{" "}
                <Link href="/politica-privacidade" className="text-[#2d5aa0] hover:underline font-medium">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec6">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">6. Denúncia e Moderação</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              O Legado Vivo disponibiliza canais para denúncia de abuso:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-center">
                <span className="text-3xl mb-3 block">📧</span>
                <h4 className="font-semibold text-[#1a365d] mb-2">E-mail de Suporte</h4>
                <a href="mailto:felipesnunes@gmail.com" className="text-[#2d5aa0] hover:underline text-sm">
                  felipesnunes@gmail.com
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-center">
                <span className="text-3xl mb-3 block">🔧</span>
                <h4 className="font-semibold text-[#1a365d] mb-2">Ferramentas Internas</h4>
                <p className="text-[#4a5568] text-sm">Revisão de conteúdo</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-center">
                <span className="text-3xl mb-3 block">🚫</span>
                <h4 className="font-semibold text-[#1a365d] mb-2">Ações</h4>
                <p className="text-[#4a5568] text-sm">Bloqueio e remoção de contas</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-2">⚠️ PRIORIDADE MÁXIMA</p>
              <p className="text-[#4a5568]">
                Qualquer violação envolvendo riscos a menores é tratada com <strong>prioridade máxima</strong>, podendo resultar em:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#4a5568] mt-3">
                <li><strong>Suspensão imediata da conta</strong></li>
                <li>Comunicação às autoridades competentes quando aplicável</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec7">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">7. Conformidade com a Política do Google Play (AESI)</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Esta política foi construída conforme os requisitos da <strong>App Engaged Safety Initiative (AESI)</strong> do Google Play, assegurando:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🛡️", title: "Proteção de Crianças", desc: "Não exposição de crianças a riscos" },
                { icon: "🎯", title: "Público-Alvo Definido", desc: "Não direcionamento do aplicativo para menores" },
                { icon: "👥", title: "Contatos Conhecidos", desc: "Comunicação apenas com contatos previamente conhecidos" },
                { icon: "🚫", title: "Prevenção de Abuso", desc: "Redução de risco de mensagens indesejadas ou abusivas" },
                { icon: "⚙️", title: "Moderação Ativa", desc: "Moderação e controles adequados" },
                { icon: "📋", title: "Transparência", desc: "Transparência sobre risco e uso correto" },
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-xl p-4 hover:border-green-400 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#1a365d]">{item.title}</h4>
                      <p className="text-[#4a5568] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section id="sec8">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">8. Mudanças Nesta Política</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Esta política poderá ser atualizada conforme novas exigências legais ou regulatórias.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-2">📢 Comunicação de Alterações</p>
              <p className="text-[#4a5568]">
                Mudanças relevantes serão comunicadas aos usuários através de:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#4a5568] mt-3">
                <li>Notificações no aplicativo</li>
                <li>E-mail para usuários cadastrados</li>
                <li>Atualização desta página com nova data de vigência</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contato">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Informações de Contato</h2>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-[#4a5568] mb-6">
                Para dúvidas, denúncias ou solicitações relacionadas à segurança infantil:
              </p>

              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Responsável Legal</h3>
              <p className="text-[#4a5568] mb-2"><strong>Felipe Sousa Nunes</strong> (Pessoa Física)</p>

              <div className="space-y-3 mt-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm text-[#4a5568]">E-mail:</p>
                    <a href="mailto:felipesnunes@gmail.com" className="text-[#2d5aa0] font-medium hover:underline">
                      felipesnunes@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-sm text-[#4a5568]">Telefone:</p>
                    <p className="text-[#1a365d] font-medium">(31) 99483-1043</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-[#4a5568]">Endereço:</p>
                    <p className="text-[#1a365d] font-medium">Rua Paineiras, 1155</p>
                  </div>
                </div>
              </div>

              <p className="text-[#4a5568] text-sm mt-6 italic">
                Denúncias de segurança infantil são tratadas com prioridade máxima.
              </p>
            </div>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#1a365d] to-[#2d5aa0] text-white text-lg font-bold rounded-xl hover:from-[#2d5aa0] hover:to-[#1a365d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Voltar para a Página Inicial
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-[#4a5568] text-sm">
          <p>© 2025 LegadoVivo. Transformando mensagens em eternidade.</p>
          <p className="mt-2 text-xs">
            Documento elaborado em conformidade com a App Engaged Safety Initiative (AESI) do Google Play
          </p>
        </div>
      </main>
    </div>
  );
}

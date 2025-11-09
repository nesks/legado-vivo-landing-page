"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermosUsoPage() {
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
            Termos de Uso
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#4a5568]">
            <p><strong>Data de Vigência:</strong> 08/11/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Última Atualização:</strong> 08/11/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Versão:</strong> 1.0</p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-6 mb-12 border-2 border-[#d69e2e]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-4xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-[#1a365d] mb-2 text-lg">Leia com Atenção</h3>
              <p className="text-[#4a5568]">
                Ao utilizar o <strong>Legado Vivo</strong>, você aceita integralmente estes Termos de Uso.
                Se você <strong>NÃO CONCORDAR</strong> com qualquer disposição destes termos, <strong>NÃO UTILIZE</strong> o serviço.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="font-bold text-[#1a365d] mb-4 flex items-center">
              <span className="text-2xl mr-2">✅</span> VOCÊ PODE:
            </h3>
            <ul className="space-y-2 text-[#4a5568] text-sm">
              <li>• Usar o serviço conforme descrito</li>
              <li>• Gravar e armazenar vídeos pessoais</li>
              <li>• Cancelar sua conta a qualquer momento</li>
              <li>• Solicitar exclusão de dados (LGPD)</li>
              <li>• Solicitar reembolso (condições aplicáveis)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
            <h3 className="font-bold text-[#1a365d] mb-4 flex items-center">
              <span className="text-2xl mr-2">❌</span> VOCÊ NÃO PODE:
            </h3>
            <ul className="space-y-2 text-[#4a5568] text-sm">
              <li>• Postar conteúdo proibido (violência, ódio)</li>
              <li>• Transferir ou vender sua conta</li>
              <li>• Violar direitos autorais de terceiros</li>
              <li>• Usar múltiplas contas</li>
              <li>• Abusar do serviço ou de outros usuários</li>
            </ul>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Índice</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "sec1", title: "1. Aceitação dos Termos" },
              { id: "sec2", title: "2. Descrição do Serviço" },
              { id: "sec3", title: "3. Idade Mínima e Capacidade Legal" },
              { id: "sec4", title: "4. Cadastro e Conta" },
              { id: "sec5", title: "5. Conteúdos Proibidos" },
              { id: "sec6", title: "6. Propriedade Intelectual" },
              { id: "sec7", title: "7. Responsabilidades do Usuário" },
              { id: "sec8", title: "8. Limitações de Responsabilidade" },
              { id: "sec9", title: "9. Cancelamento e Suspensão" },
              { id: "sec10", title: "10. Política de Reembolso" },
              { id: "sec11", title: "11. Modificações dos Termos" },
              { id: "sec12", title: "12. Disposições Gerais" },
              { id: "sec13", title: "13. Lei Aplicável e Foro" },
              { id: "sec14", title: "14. Informações de Contato" },
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
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">1. Aceitação dos Termos</h2>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              Ao utilizar o <strong>Legado Vivo</strong>, você aceita integralmente estes Termos de Uso e se compromete a cumpri-los.
            </p>
            <p className="text-[#4a5568] leading-relaxed">
              O uso continuado da plataforma após modificações nestes termos constitui aceitação das alterações.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec2">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">2. Descrição do Serviço</h2>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              O Legado Vivo é uma plataforma digital que permite:
            </p>
            <ul className="space-y-2 text-[#4a5568] mb-6">
              <li>✅ Gravar vídeos com mensagens pessoais</li>
              <li>✅ Armazenar esses vídeos de forma segura</li>
              <li>✅ Programar entrega futura para pessoas especiais</li>
              <li>✅ Criar legados digitais no tempo</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-2">⚠️ IMPORTANTE</p>
              <p className="text-[#4a5568]">
                O serviço é fornecido <strong>&quot;COMO ESTÁ&quot; (AS IS)</strong>, sem garantias absolutas de disponibilidade, funcionamento ininterrupto ou livre de erros.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec3">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">3. Idade Mínima e Capacidade Legal</h2>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.1. Idade Mínima</h3>
            <p className="text-[#4a5568] mb-4">
              Recomendamos o uso apenas para <strong>maiores de 18 anos</strong>.
            </p>
            <p className="text-[#4a5568] mb-6">
              Menores de idade necessitam de autorização e supervisão de pais ou responsáveis legais.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.2. Declaração do Usuário</h3>
            <p className="text-[#4a5568] mb-3">Ao criar uma conta, você declara:</p>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li>Ter capacidade legal para contratar</li>
              <li>Fornecer informações verdadeiras e corretas</li>
              <li>Cumprir estes termos e a legislação brasileira</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec4">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">4. Cadastro e Conta</h2>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">4.1. Responsabilidades do Usuário</h3>
            <p className="text-[#4a5568] mb-3">Você é responsável por:</p>
            <ul className="space-y-2 text-[#4a5568] mb-6">
              <li>✅ Manter a segurança da sua conta</li>
              <li>✅ Não compartilhar credenciais de acesso</li>
              <li>✅ Notificar imediatamente sobre uso não autorizado</li>
              <li>✅ Fornecer dados cadastrais verdadeiros e atualizados</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">4.2. Proibições</h3>
            <p className="text-[#4a5568] mb-3">É <strong>PROIBIDO</strong>:</p>
            <ul className="space-y-2 text-[#4a5568] mb-4">
              <li>❌ Criar múltiplas contas</li>
              <li>❌ Transferir ou vender sua conta a terceiros</li>
              <li>❌ Usar contas de outras pessoas</li>
              <li>❌ Automatizar o acesso (bots, scripts)</li>
            </ul>
            <p className="text-[#4a5568] italic">
              <strong>Sua conta é pessoal, única e intransferível.</strong>
            </p>
          </section>

          {/* Section 5 */}
          <section id="sec5">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">5. Conteúdos Proibidos</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              É <strong>ESTRITAMENTE PROIBIDO</strong> gravar, enviar ou armazenar vídeos com:
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">5.1. Violência ou Ameaças</h3>
                <ul className="space-y-1 text-[#4a5568]">
                  <li>❌ Incitação à violência</li>
                  <li>❌ Ameaças a pessoas ou grupos</li>
                  <li>❌ Apologia ao terrorismo</li>
                  <li>❌ Bullying ou assédio</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">5.2. Discurso de Ódio</h3>
                <ul className="space-y-1 text-[#4a5568]">
                  <li>❌ Racismo</li>
                  <li>❌ Homofobia</li>
                  <li>❌ Xenofobia</li>
                  <li>❌ Intolerância religiosa</li>
                  <li>❌ Discriminação de qualquer tipo</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">5.3. Ilegalidades</h3>
                <ul className="space-y-1 text-[#4a5568]">
                  <li>❌ Apologia ao crime</li>
                  <li>❌ Tráfico de drogas</li>
                  <li>❌ Atividades ilegais</li>
                  <li>❌ Fraude ou golpes</li>
                  <li>❌ Violação de leis brasileiras</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6 mt-6">
              <p className="text-[#1a365d] font-semibold mb-2">⚠️ IMPORTANTE</p>
              <p className="text-[#4a5568]">
                Violações podem resultar em <strong>cancelamento imediato da conta</strong> sem aviso prévio e sem reembolso.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec6">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">6. Direitos de Propriedade Intelectual</h2>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">6.1. Seu Conteúdo</h3>
            <p className="text-[#4a5568] mb-4">
              Você <strong>mantém todos os direitos</strong> sobre os vídeos que grava.
            </p>
            <p className="text-[#4a5568] mb-3">
              Ao usar o serviço, você concede ao Legado Vivo uma <strong>licença limitada</strong> para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li>Armazenar seus vídeos em servidores seguros</li>
              <li>Processar e entregar aos destinatários designados</li>
              <li>Realizar backups de segurança</li>
              <li>Otimizar para diferentes dispositivos</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">6.2. Músicas e Imagens de Terceiros</h3>
            <p className="text-[#4a5568] mb-3">
              <strong>Você é 100% responsável</strong> por obter autorizações para uso de:
            </p>
            <ul className="space-y-2 text-[#4a5568] mb-4">
              <li>🎵 Músicas protegidas por direitos autorais</li>
              <li>🖼️ Imagens de terceiros</li>
              <li>™️ Marcas registradas</li>
              <li>📹 Vídeos de outras fontes</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold">
                O Legado Vivo NÃO SE RESPONSABILIZA por violações de direitos autorais cometidas por usuários.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="sec10">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">10. Política de Reembolso</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-4">
                  ✅ Reembolso Integral
                </h3>
                <p className="text-[#4a5568] mb-3">Você tem direito a <strong>reembolso total</strong> (100%) se:</p>
                <ul className="space-y-2 text-[#4a5568] text-sm">
                  <li>• A memória não for entregue por falha técnica nossa</li>
                  <li>• Houver erro do sistema que impeça o serviço</li>
                  <li>• Cancelamento antes do processamento do vídeo</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-4">
                  ❌ NÃO Há Reembolso
                </h3>
                <p className="text-[#4a5568] mb-3"><strong>NÃO há reembolso</strong> em caso de:</p>
                <ul className="space-y-2 text-[#4a5568] text-sm">
                  <li>• Memória já entregue ao destinatário</li>
                  <li>• Destinatário não visualizar (escolha dele)</li>
                  <li>• Arrependimento após envio</li>
                  <li>• Cancelamento por violação de termos</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">10.3. Como Solicitar Reembolso</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <p className="text-[#4a5568] mb-4">
                <strong>Prazo para solicitar:</strong> 30 dias após o pagamento
              </p>
              <p className="text-[#4a5568] font-semibold mb-3">Procedimento:</p>
              <ol className="list-decimal list-inside space-y-2 text-[#4a5568]">
                <li>Envie e-mail para: felipesnunes@gmail.com</li>
                <li>Assunto: &quot;Solicitação de Reembolso&quot;</li>
                <li>Informe: nome, telefone, data de pagamento e motivo</li>
                <li>Anexe comprovante de pagamento</li>
              </ol>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-[#4a5568]"><strong>Análise:</strong> até 15 dias corridos</p>
                <p className="text-[#4a5568]"><strong>Devolução:</strong> até 7 dias após aprovação</p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="sec13">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">13. Lei Aplicável e Foro</h2>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">13.1. Legislação Brasileira</h3>
            <p className="text-[#4a5568] mb-4">
              Estes termos são regidos pela <strong>legislação brasileira</strong>, especialmente:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-3 text-[#1a365d] font-semibold">Lei</th>
                    <th className="pb-3 text-[#1a365d] font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5568]">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Lei 10.406/2002</td>
                    <td className="py-3">Código Civil Brasileiro</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Lei 8.078/1990</td>
                    <td className="py-3">Código de Defesa do Consumidor</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Lei 12.965/2014</td>
                    <td className="py-3">Marco Civil da Internet</td>
                  </tr>
                  <tr>
                    <td className="py-3">Lei 13.709/2018</td>
                    <td className="py-3">LGPD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">13.2. Foro Competente</h3>
            <p className="text-[#4a5568]">
              Fica eleito o <strong>foro do domicílio do consumidor</strong> para dirimir quaisquer controvérsias decorrentes destes termos, conforme previsto no <strong>Art. 101, I do Código de Defesa do Consumidor</strong>.
            </p>
          </section>

          {/* Section 14 */}
          <section id="sec14">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">14. Informações de Contato</h2>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-gray-200">
              <p className="text-[#4a5568] mb-6">
                Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso:
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
                Solicitações respondidas em até 15 dias corridos
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
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-[#4a5568]">
          <p className="mb-4">
            <strong>Ao utilizar o Legado Vivo, você declara ter lido, compreendido e concordado com estes Termos de Uso.</strong>
          </p>
          <p>© 2025 LegadoVivo. Transformando mensagens em eternidade.</p>
          <p className="mt-2 text-xs">
            Documento elaborado em conformidade com a legislação brasileira vigente. | Versão 1.0
          </p>
        </div>
      </main>
    </div>
  );
}

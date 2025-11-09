"use client";

import Image from "next/image";
import Link from "next/link";

export default function PoliticaPrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#4a5568]">
            <p><strong>Data de Vigência:</strong> 08/11/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Última Atualização:</strong> 08/11/2025</p>
            <span className="hidden md:inline">•</span>
            <p><strong>Versão:</strong> 1.0</p>
          </div>
        </div>

        {/* LGPD Badge */}
        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 mb-12 border-2 border-[#f6e05e]/30">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a365d] mb-1">Conformidade LGPD</h3>
              <p className="text-[#4a5568] text-sm">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Índice</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "sec1", title: "1. Identificação do Controlador" },
              { id: "sec2", title: "2. Aplicabilidade e Aceitação" },
              { id: "sec3", title: "3. Dados Pessoais Coletados" },
              { id: "sec4", title: "4. Finalidades do Tratamento" },
              { id: "sec5", title: "5. Compartilhamento com Terceiros" },
              { id: "sec6", title: "6. Privacidade e Segurança" },
              { id: "sec7", title: "7. Retenção e Exclusão" },
              { id: "sec8", title: "8. Cookies e Rastreamento" },
              { id: "sec9", title: "9. Direitos dos Titulares (LGPD)" },
              { id: "sec10", title: "10. Segurança da Informação" },
              { id: "sec11", title: "11. Alterações nesta Política" },
              { id: "sec12", title: "12. Legislação Aplicável" },
              { id: "sec13", title: "13. Informações de Contato" },
              { id: "sec14", title: "14. Observações Importantes" },
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
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">1. Identificação do Controlador de Dados</h2>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              A plataforma <strong>Legado Vivo</strong> é operada por:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><strong>Responsável Legal:</strong> Felipe Sousa Nunes (Pessoa Física)</p>
              <p><strong>E-mail:</strong> <a href="mailto:felipesnunes@gmail.com" className="text-[#2d5aa0] hover:underline">felipesnunes@gmail.com</a></p>
              <p><strong>Telefone:</strong> (31) 99483-1043</p>
              <p><strong>Endereço:</strong> Rua Paineiras, 1155</p>
            </div>
            <p className="text-[#4a5568] leading-relaxed mt-4">
              O Legado Vivo é uma plataforma de mensagens no tempo que permite aos usuários gravar e enviar vídeos com legados digitais para serem entregues em momentos futuros a pessoas especiais.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec2">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">2. Aplicabilidade e Aceitação</h2>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              Esta Política de Privacidade se aplica a todos os usuários da plataforma Legado Vivo, seja através do aplicativo mobile (iOS e Android) ou da versão web.
            </p>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              Ao utilizar nossos serviços, você declara ter lido, compreendido e concordado com os termos desta Política de Privacidade e com o tratamento de seus dados pessoais conforme aqui descrito.
            </p>
            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-2">⚠️ IMPORTANTE</p>
              <p className="text-[#4a5568]">
                Recomendamos que o serviço seja utilizado apenas por pessoas maiores de 18 anos. Caso seja menor de idade, é necessária a autorização e supervisão de pais ou responsáveis legais.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec3">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">3. Dados Pessoais Coletados</h2>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.1. Dados de Cadastro e Autenticação</h3>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li><strong>Número de telefone celular:</strong> Utilizado como identificador único e para autenticação via código de verificação enviado por WhatsApp.</li>
              <li><strong>Código de verificação:</strong> Código de 6 dígitos enviado para validação de identidade (temporário, descartado após validação).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.2. Dados de Destinatários</h3>
            <p className="text-[#4a5568] mb-3">Informações sobre as pessoas para quem você deseja enviar mensagens/legados:</p>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li>Nome completo</li>
              <li>Número de telefone</li>
              <li>E-mail (opcional)</li>
              <li>Rede social (opcional - ex: Instagram)</li>
              <li>Tipo de relacionamento (ex: namorado, amigo, esposo, mãe, pai, filho, irmão, outro)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.3. Conteúdo de Mídia</h3>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li><strong>Vídeos:</strong> Gravações realizadas através da câmera do seu dispositivo, incluindo áudio.</li>
              <li><strong>Miniaturas (thumbnails):</strong> Imagens extraídas dos vídeos para visualização prévia.</li>
              <li><strong>Metadados associados:</strong> Data e hora da gravação, duração do vídeo, cidade onde foi gravado.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.4. Dados de Localização</h3>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-4">
              <li><strong>Coordenadas GPS:</strong> Latitude e longitude capturadas durante a gravação do vídeo.</li>
              <li><strong>Cidade:</strong> Nome da cidade extraído das coordenadas GPS através de reverse geocoding.</li>
            </ul>
            <p className="text-[#4a5568] italic mb-6">
              <strong>Finalidade:</strong> A localização é coletada exclusivamente para adicionar contexto emocional à mensagem, permitindo que o destinatário saiba em qual cidade a memória foi gravada.
            </p>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.5. Dados de Contatos</h3>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li><strong>Contato selecionado:</strong> Quando você utiliza a funcionalidade de busca de contatos no seu dispositivo, apenas o contato específico que você escolher será enviado ao nosso servidor.</li>
              <li><strong>Lista completa de contatos:</strong> NÃO é coletada nem armazenada. A lista de contatos permanece apenas no seu dispositivo para facilitar a seleção.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">3.6. Dados de Dispositivo e Sessão</h3>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li><strong>Token de notificações push (Expo Push Token):</strong> Para envio de notificações sobre mensagens recebidas e atualizações do serviço.</li>
              <li><strong>Tokens de autenticação (JWT):</strong> Access token e refresh token para manter sua sessão ativa de forma segura.</li>
              <li><strong>Tipo de dispositivo:</strong> Identificação se é iOS, Android ou Web.</li>
            </ul>
          </section>

          {/* Section 4 - Finalidades */}
          <section id="sec4">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">4. Finalidades do Tratamento de Dados</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Utilizamos seus dados pessoais exclusivamente para os seguintes propósitos:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-3 text-[#1a365d] font-semibold">Dado Coletado</th>
                    <th className="pb-3 text-[#1a365d] font-semibold">Finalidade</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5568]">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Número de telefone</td>
                    <td className="py-3">Autenticação e identificação do usuário</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Dados do destinatário</td>
                    <td className="py-3">Identificar e entregar mensagens às pessoas corretas</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Vídeos e áudio</td>
                    <td className="py-3">Armazenar e entregar legados digitais</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Localização (cidade)</td>
                    <td className="py-3">Adicionar contexto emocional às mensagens</td>
                  </tr>
                  <tr>
                    <td className="py-3">Token de notificações</td>
                    <td className="py-3">Enviar alertas sobre mensagens recebidas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-3">✅ NÃO utilizamos seus dados para:</p>
              <ul className="list-disc list-inside space-y-1 text-[#4a5568]">
                <li>Publicidade direcionada</li>
                <li>Compartilhamento com parceiros comerciais</li>
                <li>Venda de dados a terceiros</li>
                <li>Criação de perfis comportamentais</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Compartilhamento */}
          <section id="sec5">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">5. Compartilhamento de Dados com Terceiros</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Seus dados pessoais podem ser compartilhados apenas com os seguintes terceiros, estritamente necessários para funcionamento do serviço:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Amazon Web Services (AWS)</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  <li><strong>Serviço:</strong> AWS S3 (Simple Storage Service)</li>
                  <li><strong>Dados compartilhados:</strong> Vídeos, thumbnails, metadados</li>
                  <li><strong>Finalidade:</strong> Armazenamento seguro dos vídeos</li>
                  <li><strong>Localização:</strong> Região sa-east-1 (São Paulo, Brasil)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">n8n (Automação WhatsApp)</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  <li><strong>Serviço:</strong> Plataforma de automação para envio de códigos</li>
                  <li><strong>Dados compartilhados:</strong> Número de telefone e código de verificação</li>
                  <li><strong>Finalidade:</strong> Envio de código de autenticação via WhatsApp</li>
                  <li><strong>Localização:</strong> Servidor próprio no Brasil (AWS sa-east-1)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Expo Platform</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  <li><strong>Serviço:</strong> Expo Push Notifications</li>
                  <li><strong>Dados compartilhados:</strong> Expo Push Token e conteúdo das notificações</li>
                  <li><strong>Finalidade:</strong> Envio de notificações push no aplicativo</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mt-6">
              <p className="text-[#1a365d] font-semibold mb-2">🇧🇷 Dados 100% no Brasil</p>
              <p className="text-[#4a5568]">
                <strong>NÃO REALIZAMOS</strong> transferência internacional de dados. Todos os servidores e armazenamento estão localizados no Brasil (região AWS sa-east-1 - São Paulo).
              </p>
            </div>
          </section>

          {/* Section 6 - Privacidade dos Vídeos */}
          <section id="sec6">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">6. Privacidade e Segurança dos Vídeos</h2>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">Privacidade Total</h3>
              <p className="text-[#4a5568] mb-4">Os vídeos que você grava são <strong>totalmente privados</strong>:</p>
              <ul className="space-y-2 text-[#4a5568]">
                <li>✅ Não são analisados por inteligência artificial</li>
                <li>✅ Não passam por moderação humana</li>
                <li>✅ Não são acessados pela equipe do Legado Vivo</li>
                <li>✅ Apenas você e o destinatário escolhido têm acesso ao conteúdo</li>
              </ul>
              <p className="text-[#4a5568] text-sm italic mt-4">
                <strong>Exceção:</strong> Em casos extremos de ordem judicial ou investigação criminal, podemos ser obrigados a fornecer acesso às autoridades competentes.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-[#1a365d] mb-3">Segurança dos Dados</h3>
            <p className="text-[#4a5568] mb-4">Implementamos medidas técnicas e organizacionais de segurança, incluindo:</p>
            <ul className="list-disc list-inside space-y-2 text-[#4a5568] mb-6">
              <li><strong>HTTPS:</strong> Toda comunicação entre o app e nossos servidores é criptografada.</li>
              <li><strong>Armazenamento seguro de tokens:</strong> Tokens de autenticação são armazenados de forma criptografada usando Keychain (iOS) e Keystore (Android).</li>
              <li><strong>Autenticação via SMS/WhatsApp:</strong> Two-factor authentication para proteger sua conta.</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-[#d69e2e] rounded-r-xl p-6">
              <p className="text-[#1a365d] font-semibold mb-2">🔒 Em Desenvolvimento</p>
              <p className="text-[#4a5568]">
                Estamos trabalhando na implementação de <strong>criptografia end-to-end (E2EE)</strong> para os vídeos, garantindo que apenas você e o destinatário possam acessar o conteúdo, mesmo em caso de comprometimento dos servidores.
              </p>
            </div>
          </section>

          {/* Section 9 - Direitos LGPD */}
          <section id="sec9">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">9. Direitos dos Titulares de Dados (LGPD)</h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você possui os seguintes direitos:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Confirmação e Acesso", desc: "Saber se tratamos seus dados e acessá-los" },
                { title: "Correção", desc: "Corrigir dados incompletos, inexatos ou desatualizados" },
                { title: "Anonimização/Bloqueio", desc: "Tornar seus dados anônimos ou bloquear temporariamente" },
                { title: "Eliminação", desc: "Excluir dados desnecessários ou tratados indevidamente" },
                { title: "Portabilidade", desc: "Receber seus dados em formato estruturado" },
                { title: "Revogação do Consentimento", desc: "Retirar consentimento a qualquer momento" },
                { title: "Informação sobre Compartilhamento", desc: "Saber com quem compartilhamos seus dados" },
                { title: "Oposição", desc: "Opor-se a tratamento de dados" },
              ].map((direito, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#f6e05e] transition-all duration-300">
                  <h4 className="font-semibold text-[#1a365d] mb-2">{direito.title}</h4>
                  <p className="text-[#4a5568] text-sm">{direito.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d5aa0] rounded-2xl p-8 mt-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Canal de Atendimento LGPD</h3>
              <div className="space-y-2">
                <p><strong>E-mail:</strong> felipesnunes@gmail.com</p>
                <p><strong>Prazo de resposta:</strong> Até 15 dias corridos</p>
                <p><strong>Custo:</strong> Gratuito (primeira solicitação)</p>
              </div>
            </div>
          </section>

          {/* Section 13 - Contato */}
          <section id="sec13">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">13. Informações de Contato</h2>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Controlador de Dados</h3>
              <p className="text-[#4a5568] mb-2"><strong>Felipe Sousa Nunes</strong></p>

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
                Solicitações por e-mail são respondidas em até 15 dias corridos.
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
            Documento elaborado em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)
          </p>
        </div>
      </main>
    </div>
  );
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'funcionamento' | 'privacidade' | 'tecnico' | 'planos';
}

export const faqData: FAQItem[] = [
  {
    question: "Como funciona o sistema de créditos?",
    answer: "1 crédito = 1 mensagem enviada. O plano gratuito oferece 1 crédito para testar o serviço. Você pode comprar pacotes adicionais conforme sua necessidade, com preços que variam de R$ 4,90 (5 créditos) até R$ 249,90 (500 créditos).",
    category: "planos"
  },
  {
    question: "Minhas mensagens estão realmente seguras?",
    answer: "Sim! Utilizamos criptografia de ponta a ponta AES-256, a mesma tecnologia usada por bancos e governos. Seus dados são armazenados em servidores AWS no Brasil, com conformidade total à LGPD. Ninguém, nem mesmo nossa equipe, pode ler suas mensagens.",
    category: "privacidade"
  },
  {
    question: "Como vocês garantem a entrega após meu falecimento?",
    answer: "Temos um sistema de verificação com múltiplas camadas: certificados de óbito oficiais, validação por documentos, confirmação por familiares autorizados, e prazos de segurança. Nunca liberamos mensagens sem validação adequada.",
    category: "funcionamento"
  },
  {
    question: "Posso cancelar ou modificar uma mensagem depois de enviada?",
    answer: "Sim! Você pode editar, deletar ou modificar destinatários de suas mensagens a qualquer momento enquanto estiverem pendentes. Apenas após a validação de entrega é que as mensagens se tornam definitivas.",
    category: "funcionamento"
  },
  {
    question: "Posso enviar mensagens para várias pessoas?",
    answer: "Sim! Você pode criar mensagens individuais para múltiplos destinatários. Cada mensagem enviada consome 1 crédito por destinatário. Por exemplo, enviar para 5 pessoas diferentes consome 5 créditos.",
    category: "funcionamento"
  },
  {
    question: "Qual o tamanho máximo dos vídeos?",
    answer: "Vídeos podem ter até 2 minutos de duração. Nosso sistema de compressão inteligente reduz o tamanho em até 85% sem perder qualidade visível, garantindo upload rápido mesmo em conexões 4G.",
    category: "tecnico"
  },
  {
    question: "O que acontece se eu esquecer minha senha?",
    answer: "Temos um sistema de recuperação seguro por email. No entanto, devido à criptografia forte, algumas informações podem não ser recuperáveis se você perder completamente o acesso. Recomendamos sempre manter seus dados de acesso seguros.",
    category: "tecnico"
  },
  {
    question: "Vocês vendem meus dados pessoais?",
    answer: "NUNCA! Somos 100% financiados por nossos usuários através dos créditos. Não vendemos, compartilhamos ou monetizamos seus dados de nenhuma forma. Sua privacidade é nosso compromisso fundamental.",
    category: "privacidade"
  },
  {
    question: "Posso testar antes de comprar?",
    answer: "Sim! Todo novo usuário recebe 1 crédito gratuito para testar todas as funcionalidades: gravar vídeo, escolher destinatário, e entender como funciona o sistema de entrega.",
    category: "planos"
  },
  {
    question: "Como faço para deletar minha conta?",
    answer: "Você pode solicitar a exclusão completa da sua conta a qualquer momento através das configurações do app. Deletaremos todos os seus dados em até 30 dias, conforme exigido pela LGPD. Mensagens agendadas serão canceladas.",
    category: "privacidade"
  },
  {
    question: "O app funciona em iOS e Android?",
    answer: "Sim! O LegadoVivo está disponível para iOS (iPhone/iPad) e Android. Utilizamos React Native com Expo para garantir a mesma experiência de qualidade em ambas as plataformas.",
    category: "tecnico"
  },
  {
    question: "Posso gravar mensagens em áudio ou apenas vídeo?",
    answer: "Atualmente focamos em vídeos pois transmitem mais emoção e presença. Você pode gravar vídeos curtos (até 2 minutos) com qualidade ajustável de 480p até 2160p (4K).",
    category: "funcionamento"
  },
  {
    question: "Quanto custa manter o serviço rodando?",
    answer: "Somos transparentes: nossos custos de infraestrutura AWS são aproximadamente R$ 0,19 por 1000 vídeos armazenados mensalmente, graças às nossas otimizações de compressão (92% de economia). Os créditos cobrem esses custos e o desenvolvimento contínuo.",
    category: "planos"
  },
  {
    question: "E se a empresa fechar?",
    answer: "Temos planos de contingência: backup em múltiplas regiões AWS, código-fonte em repositórios seguros, e um plano de transição caso necessário. Seus dados nunca serão perdidos ou expostos.",
    category: "privacidade"
  },
  {
    question: "Posso usar o LegadoVivo para mensagens corporativas ou apenas pessoais?",
    answer: "O LegadoVivo foi projetado para mensagens pessoais e emocionais para entes queridos. Para uso corporativo ou institucional, entre em contato para soluções personalizadas.",
    category: "funcionamento"
  }
];

export const faqCategories = {
  funcionamento: "Como Funciona",
  privacidade: "Privacidade e Segurança",
  tecnico: "Aspectos Técnicos",
  planos: "Planos e Pagamentos"
} as const;

export interface Feature {
  title: string;
  description: string;
  icon: "video" | "users" | "calendar" | "lock" | "heart" | "map" | "credit" | "bell";
  highlight?: string;
}

export const mainFeatures: Feature[] = [
  {
    title: "Gravação de Vídeos",
    description: "Grave mensagens em vídeo de até 2 minutos com excelente qualidade. Seus vídeos são otimizados automaticamente para envio rápido.",
    icon: "video",
    highlight: "Rápido e fácil"
  },
  {
    title: "Gerenciamento de Destinatários",
    description: "Cadastre múltiplos destinatários com informações detalhadas: nome, telefone, email, rede social e tipo de relacionamento. Organize suas mensagens por pessoa.",
    icon: "users"
  },
  {
    title: "Agendamento Futuro",
    description: "Programe a entrega das suas mensagens para datas específicas no futuro. As mensagens são enviadas automaticamente na data escolhida por você.",
    icon: "calendar",
    highlight: "Envio programado"
  },
  {
    title: "Privacidade Total",
    description: "Seus vídeos são 100% privados. Não passam por moderação, não são analisados, e apenas você e o destinatário têm acesso. Suas mensagens são completamente confidenciais.",
    icon: "lock",
    highlight: "100% privado"
  },
  {
    title: "Reações em Vídeo",
    description: "Destinatários podem gravar reações em vídeo às mensagens recebidas, criando uma troca emocional única e preservando memórias de ambos os lados.",
    icon: "heart"
  },
  {
    title: "Geolocalização Emocional",
    description: "Cada vídeo captura a cidade onde foi gravado, adicionando contexto geográfico às suas memórias. Apenas a cidade é armazenada, nunca o endereço exato.",
    icon: "map"
  },
  {
    title: "Sistema de Créditos Flexível",
    description: "1 crédito = 1 mensagem enviada. Sem assinaturas mensais! Compre apenas o que precisa, de R$ 4,90 (5 créditos) até R$ 249,90 (500 créditos). Teste grátis com 1 crédito.",
    icon: "credit",
    highlight: "Sem mensalidade"
  },
  {
    title: "Notificações Inteligentes",
    description: "Receba alertas quando mensagens forem entregues, visualizadas, ou quando houver reações. Funciona perfeitamente em iPhone e Android.",
    icon: "bell"
  }
];

export interface TechnicalDifferential {
  title: string;
  description: string;
  metric?: string;
  icon: "compression" | "brazil" | "encryption" | "speed" | "backup" | "monitoring";
}

export const technicalDifferentials: TechnicalDifferential[] = [
  {
    title: "Envio Rápido e Fácil",
    description: "Seus vídeos ocupam muito menos espaço sem perder qualidade, permitindo envios rápidos até mesmo com internet lenta pelo celular.",
    metric: "Super rápido",
    icon: "compression"
  },
  {
    title: "100% no Brasil",
    description: "Todos os seus dados ficam armazenados no Brasil, seguindo rigorosamente as leis brasileiras de proteção de dados (LGPD).",
    metric: "Conformidade LGPD",
    icon: "brazil"
  },
  {
    title: "Segurança Total",
    description: "Suas mensagens são protegidas com a mesma segurança usada por bancos, garantindo total privacidade e proteção.",
    metric: "Nível bancário",
    icon: "encryption"
  },
  {
    title: "Aplicativo Veloz",
    description: "O aplicativo é super rápido e responsivo. Você consegue enviar suas mensagens em segundos, mesmo com internet mais lenta.",
    metric: "Muito rápido",
    icon: "speed"
  },
  {
    title: "Suas Memórias Sempre Seguras",
    description: "Fazemos várias cópias de segurança dos seus vídeos, garantindo que suas memórias nunca serão perdidas.",
    metric: "Proteção total",
    icon: "backup"
  },
  {
    title: "Sempre Disponível",
    description: "Nosso sistema funciona 24 horas por dia, 7 dias por semana, para estar sempre disponível quando você precisar.",
    metric: "24/7 online",
    icon: "monitoring"
  }
];

export interface ValueProposition {
  title: string;
  description: string;
  emotion: "trust" | "empathy" | "innovation" | "legacy";
}

export const valuePropositions: ValueProposition[] = [
  {
    title: "Confiança",
    description: "Seus momentos mais preciosos merecem o mais alto nível de segurança e privacidade.",
    emotion: "trust"
  },
  {
    title: "Empatia",
    description: "Desenvolvido com sensibilidade para momentos delicados e importantes da vida.",
    emotion: "empathy"
  },
  {
    title: "Inovação",
    description: "Tecnologia moderna que torna simples preservar o que realmente importa.",
    emotion: "innovation"
  },
  {
    title: "Legado",
    description: "Suas palavras e sentimentos preservados para atravessar o tempo.",
    emotion: "legacy"
  }
];

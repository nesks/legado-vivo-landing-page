export interface Feature {
  title: string;
  description: string;
  icon: "video" | "users" | "calendar" | "lock" | "heart" | "map" | "credit" | "bell";
  highlight?: string;
}

export const mainFeatures: Feature[] = [
  {
    title: "Gravação de Vídeos",
    description: "Grave mensagens em vídeo de até 2 minutos com qualidade ajustável (480p a 4K). Compressão automática reduz o tamanho em 85% sem perder qualidade visível.",
    icon: "video",
    highlight: "85% de economia"
  },
  {
    title: "Gerenciamento de Destinatários",
    description: "Cadastre múltiplos destinatários com informações detalhadas: nome, telefone, email, rede social e tipo de relacionamento. Organize suas mensagens por pessoa.",
    icon: "users"
  },
  {
    title: "Agendamento Futuro",
    description: "Programe a entrega das suas mensagens para momentos específicos no futuro. Sistema de validação garante entrega apenas após confirmação apropriada.",
    icon: "calendar",
    highlight: "Entrega validada"
  },
  {
    title: "Privacidade Total",
    description: "Seus vídeos são 100% privados. Não passam por moderação, não são analisados por IA, e apenas você e o destinatário têm acesso. Criptografia end-to-end em desenvolvimento.",
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
    description: "Receba alertas quando mensagens forem entregues, visualizadas, ou quando houver reações. Sistema de push notifications nativo para iOS e Android.",
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
    title: "Compressão Inteligente",
    description: "Tecnologia avançada de compressão reduz vídeos em até 85% sem perda perceptível de qualidade. Um vídeo de 2 minutos que seria 100MB fica com apenas 15MB.",
    metric: "92% economia S3",
    icon: "compression"
  },
  {
    title: "Infraestrutura 100% Brasil",
    description: "Todos os servidores e armazenamento estão na região AWS São Paulo (sa-east-1). Seus dados nunca saem do Brasil, garantindo conformidade total com a LGPD.",
    metric: "0% transferência internacional",
    icon: "brazil"
  },
  {
    title: "Criptografia Avançada",
    description: "HTTPS/TLS para todas as comunicações. Tokens de autenticação armazenados com Keychain (iOS) e Keystore (Android). Criptografia end-to-end em desenvolvimento.",
    metric: "Segurança bancária",
    icon: "encryption"
  },
  {
    title: "Performance Otimizada",
    description: "API com tempo de resposta < 200ms (p95). Upload 4x mais rápido graças à compressão. Lazy loading nas seções para carregamento instantâneo da página.",
    metric: "<200ms API",
    icon: "speed"
  },
  {
    title: "Backup Automático",
    description: "Múltiplas cópias dos seus vídeos em diferentes zonas de disponibilidade AWS. Redundância geográfica garante que suas memórias nunca sejam perdidas.",
    metric: "99.999999999% durabilidade",
    icon: "backup"
  },
  {
    title: "Monitoramento 24/7",
    description: "CloudWatch monitora continuamente a saúde do sistema. Alertas automáticos para CPU, memória, disco e taxa de erros. Uptime target de 99.9%.",
    metric: "99.9% uptime",
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

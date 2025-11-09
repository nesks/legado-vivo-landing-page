export interface ContactInfo {
  responsible: string;
  email: string;
  phone: string;
  responseTime: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
}

export const contactData: ContactInfo = {
  responsible: "Felipe Sousa Nunes",
  email: "felipesnunes@gmail.com",
  phone: "(31) 99483-1043",
  responseTime: "até 15 dias úteis",
  address: {
    street: "Disponível mediante solicitação",
    city: "Belo Horizonte",
    state: "MG",
    country: "Brasil"
  }
};

export interface SocialLink {
  name: string;
  icon: "instagram" | "facebook" | "twitter" | "linkedin";
  url: string;
}

export const socialLinks: SocialLink[] = [
  // Adicione seus links de redes sociais aqui quando disponíveis
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   url: "https://instagram.com/legadovivo"
  // },
];

export interface ContactReason {
  title: string;
  description: string;
  icon: "question" | "bug" | "idea" | "legal" | "business";
}

export const contactReasons: ContactReason[] = [
  {
    title: "Dúvidas Gerais",
    description: "Perguntas sobre o funcionamento do app, planos, ou recursos",
    icon: "question"
  },
  {
    title: "Suporte Técnico",
    description: "Problemas com login, upload de vídeos, ou funcionalidades",
    icon: "bug"
  },
  {
    title: "Sugestões",
    description: "Ideias para melhorar o LegadoVivo",
    icon: "idea"
  },
  {
    title: "Questões Legais/LGPD",
    description: "Privacidade, exclusão de dados, ou conformidade LGPD",
    icon: "legal"
  },
  {
    title: "Parcerias",
    description: "Oportunidades de negócios ou colaborações",
    icon: "business"
  }
];

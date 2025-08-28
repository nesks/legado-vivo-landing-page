import { AdType } from "../hooks/useAdParameter";

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  emoji: string;
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  gradient: {
    from: string;
    to: string;
  };
  checkColor: string;
}

export interface AdData {
  title: string;
  subtitle: string;
  plans: Plan[];
}

export const plansData: Record<Exclude<AdType, null>, AdData> = {
  A: {
    title: "Tecnologia que Cuida do Amor",
    subtitle: "Planos desenvolvidos para preservar seus momentos mais importantes",
    plans: [
      {
        id: "basico",
        emoji: "🔹",
        name: "Básico",
        price: "R$ 19,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#2d5aa0" },
        checkColor: "#2d5aa0",
        features: [
          { text: "Até 5 mensagens", included: true },
          { text: "1 vídeo incluído", included: true },
          { text: "Segurança básica", included: true },
          { text: "Suporte por email", included: true }
        ]
      },
      {
        id: "avancado",
        emoji: "⚡",
        name: "Avançado",
        price: "R$ 24,90",
        period: "/mês",
        popular: true,
        gradient: { from: "#d69e2e", to: "#f6e05e" },
        checkColor: "#d69e2e",
        features: [
          { text: "Até 20 mensagens", included: true },
          { text: "Modo confiança", included: true },
          { text: "Validadores", included: true },
          { text: "Segurança avançada", included: true },
          { text: "Suporte prioritário", included: true }
        ]
      },
      {
        id: "eterno-plus",
        emoji: "♾️",
        name: "Eterno+",
        price: "R$ 59,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#d69e2e" },
        checkColor: "#1a365d",
        features: [
          { text: "Mensagens ilimitadas", included: true },
          { text: "Documentos digitais", included: true },
          { text: "Testamento digital", included: true },
          { text: "Backup na nuvem", included: true },
          { text: "Suporte 24/7", included: true }
        ]
      }
    ]
  },
  B: {
    title: "Seu Legado Digital",
    subtitle: "Escolha o plano ideal para preservar suas mensagens mais importantes",
    plans: [
      {
        id: "essencial",
        emoji: "🌱",
        name: "Essencial",
        price: "R$ 14,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#2d5aa0" },
        checkColor: "#2d5aa0",
        features: [
          { text: "Até 3 mensagens", included: true },
          { text: "Texto ou áudio", included: true },
          { text: "Segurança básica", included: true }
        ]
      },
      {
        id: "premium",
        emoji: "🌟",
        name: "Premium",
        price: "R$ 29,90",
        period: "/mês",
        popular: true,
        gradient: { from: "#d69e2e", to: "#f6e05e" },
        checkColor: "#d69e2e",
        features: [
          { text: "Até 10 mensagens", included: true },
          { text: "Vídeos e anexos", included: true },
          { text: "Segurança avançada", included: true },
          { text: "Suporte prioritário", included: true }
        ]
      },
      {
        id: "eterno",
        emoji: "👑",
        name: "Eterno",
        price: "R$ 49,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#d69e2e" },
        checkColor: "#1a365d",
        features: [
          { text: "Mensagens ilimitadas", included: true },
          { text: "Carta do Futuro", included: true },
          { text: "Datas especiais", included: true },
          { text: "Backup na nuvem", included: true },
          { text: "Suporte 24/7", included: true }
        ]
      }
    ]
  },
  C: {
    title: "A Última Palavra é Sua",
    subtitle: "Planos empresariais e pessoais para seu legado completo",
    plans: [
      {
        id: "seguro",
        emoji: "🔒",
        name: "Seguro",
        price: "R$ 24,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#2d5aa0" },
        checkColor: "#2d5aa0",
        features: [
          { text: "10 mensagens criptografadas", included: true },
          { text: "Criptografia de ponta", included: true },
          { text: "Proteção total", included: true }
        ]
      },
      {
        id: "confianca",
        emoji: "🔑",
        name: "Confiança",
        price: "R$ 39,90",
        period: "/mês",
        popular: true,
        gradient: { from: "#d69e2e", to: "#f6e05e" },
        checkColor: "#d69e2e",
        features: [
          { text: "Vídeos e anexos", included: true },
          { text: "Validação por responsáveis", included: true },
          { text: "Segurança empresarial", included: true },
          { text: "Suporte dedicado", included: true }
        ]
      },
      {
        id: "infinito",
        emoji: "🌌",
        name: "Infinito",
        price: "R$ 69,90",
        period: "/mês",
        gradient: { from: "#1a365d", to: "#d69e2e" },
        checkColor: "#1a365d",
        features: [
          { text: "Mensagens ilimitadas", included: true },
          { text: "Legado empresarial", included: true },
          { text: "Datas futuras especiais", included: true },
          { text: "Gestão corporativa", included: true },
          { text: "Suporte VIP 24/7", included: true }
        ]
      }
    ]
  }
};

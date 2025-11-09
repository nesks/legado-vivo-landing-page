import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LegadoVivo - Transforme Mensagens em Legados Eternos",
    template: "%s | LegadoVivo"
  },
  description: "Plataforma segura para gravar e enviar mensagens em vídeo para pessoas queridas. Conformidade LGPD, criptografia avançada e infraestrutura 100% no Brasil. Cadastre-se para ser avisado no lançamento.",
  keywords: [
    "legado digital",
    "mensagens no tempo",
    "vídeos eternos",
    "testamento digital",
    "memórias de família",
    "legado familiar",
    "mensagens póstumas",
    "aplicativo seguro",
    "LGPD",
    "criptografia",
    "AWS Brasil",
    "react native",
    "nestjs"
  ],
  authors: [{ name: "Felipe Sousa Nunes" }],
  creator: "Felipe Sousa Nunes",
  publisher: "LegadoVivo",
  applicationName: "LegadoVivo",
  category: "Productivity",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "LegadoVivo - Quando suas palavras forem eternas, seu amor jamais será esquecido",
    description: "Grave mensagens em vídeo para pessoas queridas e programe entregas futuras. 100% seguro, privado e com conformidade LGPD.",
    type: "website",
    locale: "pt_BR",
    siteName: "LegadoVivo",
  },

  twitter: {
    card: "summary_large_image",
    title: "LegadoVivo - Transforme Mensagens em Legados Eternos",
    description: "Plataforma segura para gravar mensagens em vídeo e criar legados digitais.",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a365d" },
    { media: "(prefers-color-scheme: dark)", color: "#1a365d" }
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LegadoVivo",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/PreOrder"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "description": "Plataforma segura para gravar e enviar mensagens em vídeo para pessoas queridas. Conformidade LGPD, criptografia avançada e infraestrutura 100% no Brasil.",
    "author": {
      "@type": "Person",
      "name": "Felipe Sousa Nunes",
      "email": "felipesnunes@gmail.com",
      "telephone": "+55-31-99483-1043"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LegadoVivo",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-31-99483-1043",
        "contactType": "customer support",
        "email": "felipesnunes@gmail.com",
        "availableLanguage": "Portuguese"
      }
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preload da imagem de fundo crítica */}
        <link
          rel="preload"
          href="/images/backgrounds/background.png"
          as="image"
          type="image/png"
        />
        {/* Preload de outras imagens críticas se necessário */}
        <link
          rel="preload"
          href="/images/logos/logo.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

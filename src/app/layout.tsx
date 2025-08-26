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
  title: "LegadoVivo - Quando suas palavras forem eternas, seu amor jamais será esquecido",
  description: "Um aplicativo seguro que transforma mensagens em legados digitais de amor. Inscreva-se para ser avisado no lançamento.",
  keywords: "legado digital, mensagens eternas, aplicativo seguro, criptografia, memórias, amor, família",
  openGraph: {
    title: "LegadoVivo - Transforme mensagens em legados eternos",
    description: "Um aplicativo seguro que transforma mensagens em legados digitais de amor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

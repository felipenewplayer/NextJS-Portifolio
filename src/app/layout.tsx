import "./globals.css";
import { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: "Felipe Alves | Desenvolvedor FullStack",
  description: "Portfólio de Felipe Alves com projetos em React, Java, PHP, C++, TypeScript, e mais.",
  keywords: ["Portfólio", "Desenvolvedor FullStack", "JavaScript", "PHP", "Java", "React", "C++", "Next.js"],
  authors: [{ name: "Felipe Alves", url: "https://github.com/seuusuario" }],
  creator: "Felipe Alves",
  openGraph: {
    title: "Felipe Alves | Desenvolvedor FullStack",
    description: "Veja projetos e tecnologias dominadas por Felipe Alves. FullStack Developer com foco em soluções modernas.",
    url: "https://seudominio.vercel.app",
    siteName: "Portfólio de Felipe Alves",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Felipe Alves",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${firaCode.variable} font-mono`}>
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>

  );
}

import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import type React from 'react';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pcideal.com.br',
  ),
  title: {
    default: 'PcIdeal - Monte seu primeiro PC sem errar na peça',
    template: '%s | PcIdeal',
  },
  description:
    'Diga para que vai usar e quanto pode gastar. O PcIdeal mostra 3 builds com peças que encaixam e preços na KaBuM. Sem cadastro.',
  keywords: [
    'montar primeiro pc',
    'pc para iniciante',
    'montar pc',
    'computador gamer',
    'build pc',
    'componentes pc',
    'pc builder',
    'orçamento pc',
  ],
  authors: [{ name: 'PcIdeal' }],
  creator: 'PcIdeal',
  publisher: 'PcIdeal',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'PcIdeal',
    title: 'PcIdeal - Monte seu primeiro PC sem errar na peça',
    description:
      'Diga para que vai usar e quanto pode gastar. 3 builds com peças que encaixam e preços na KaBuM. Sem cadastro.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PcIdeal - Monte seu primeiro PC sem errar na peça',
    description:
      'Diga para que vai usar e quanto pode gastar. 3 builds com peças que encaixam e preços na KaBuM.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
          >
            Pular para o conteúdo
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

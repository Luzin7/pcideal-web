import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'PcIdeal - Monte seu PC Perfeito',
    template: '%s | PcIdeal',
  },
  description:
    'Monte seu PC perfeito com componentes compatíveis dentro do seu orçamento. Recomendações inteligentes para jogos, trabalho e criação de conteúdo.',
  keywords: [
    'montar pc',
    'monte seu pc',
    'computador gamer',
    'build pc',
    'componentes pc',
    'hardware',
    'pc builder',
    'orçamento pc',
  ],
  authors: [{ name: 'PcIdeal' }],
  creator: 'PcIdeal',
  publisher: 'PcIdeal',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pcideal.com.br',
    siteName: 'PcIdeal',
    title: 'PcIdeal - Monte seu PC Perfeito',
    description:
      'Monte seu PC perfeito com componentes compatíveis dentro do seu orçamento',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PcIdeal - Monte seu PC Perfeito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PcIdeal - Monte seu PC Perfeito',
    description:
      'Monte seu PC perfeito com componentes compatíveis dentro do seu orçamento',
    images: ['/og-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
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

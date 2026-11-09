import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monte seu PC',
  description:
    'Diga para que vai usar e quanto pode gastar. Em 2 minutos você vê 3 builds com preços atualizados nas lojas, sem cadastro.',
  openGraph: {
    title: 'Monte seu PC | PcIdeal',
    description:
      'Diga para que vai usar e quanto pode gastar. Em 2 minutos você vê 3 builds com preços atualizados nas lojas.',
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monte seu primeiro PC',
  description:
    'Diga para que vai usar e quanto pode gastar. Em 2 minutos você vê 3 builds com preços na KaBuM, sem cadastro.',
  openGraph: {
    title: 'Monte seu primeiro PC | PcIdeal',
    description:
      'Diga para que vai usar e quanto pode gastar. Em 2 minutos você vê 3 builds com preços na KaBuM.',
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

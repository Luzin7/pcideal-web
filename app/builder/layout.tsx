import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monte seu PC',
  description:
    'Configure seu PC ideal em 3 passos simples. Escolha seu objetivo, defina o orçamento e receba recomendações personalizadas.',
  openGraph: {
    title: 'Monte seu PC | PcIdeal',
    description: 'Configure seu PC ideal em 3 passos simples',
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

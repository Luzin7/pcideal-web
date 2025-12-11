import BuilderPreview from '@/components/builder-preview';
import FeatureCard from '@/components/feature-card';
import HowItWorks from '@/components/how-it-works';
import { Button } from '@/components/ui/button';
import { localRoutePaths } from '@/constants/localRoutePaths';
import {
    ArrowRight,
    Check,
    Cpu,
    DollarSign,
    MonitorPlay,
    Share2,
    Zap,
} from 'lucide-react';
import Link from 'next/link';

// Cache da página por 1 hora (revalidate ISR)
export const revalidate = 3600;

export default function Home() {
  const { howItWorks, builder } = localRoutePaths;
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Monte seu <span className="text-gradient">PC Ideal</span> sem
                  complicações
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Sem conhecimento técnico necessário. Sem problemas de
                  compatibilidade. Apenas o melhor PC dentro do seu orçamento.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 min-[400px]:flex-row">
                <Link href={builder}>
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90"
                  >
                    Montar Meu PC
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={howItWorks}>
                  <Button size="lg" variant="outline">
                    Como Funciona
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BuilderPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Recursos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Tudo o que você precisa para montar o PC perfeito
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                O PcIdeal combina tecnologia avançada com uma interface simples
                para ajudar você a encontrar os melhores componentes
                compatíveis.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Cpu />}
              title="Compatibilidade Garantida"
              description="Verificação automática de compatibilidade entre todos os componentes do PC."
            />
            <FeatureCard
              icon={<DollarSign />}
              title="Otimização de Orçamento"
              description="Sugestões inteligentes que podem variar o orçamento em ±10% para melhor custo-benefício."
            />
            <FeatureCard
              icon={<MonitorPlay />}
              title="Perfis de Uso"
              description="Recomendações personalizadas para jogos, trabalho, edição de vídeo e mais."
            />
            <FeatureCard
              icon={<Zap />}
              title="Comparação de Preços"
              description="Busca automática pelos melhores preços nas principais lojas brasileiras."
            />
            <FeatureCard
              icon={<Check />}
              title="Explicações Simples"
              description="Entenda o motivo de cada escolha com explicações visuais e fáceis de entender."
            />
            <FeatureCard
              icon={<Share2 />}
              title="Compartilhe sua Montagem"
              description="Compartilhe sua configuração via link ou exporte como PDF para compra posterior."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Como Funciona
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Monte seu PC em 3 Passos Simples
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nosso processo é simples e rápido, projetado para qualquer
                pessoa usar.
              </p>
            </div>
          </div>
          <HowItWorks />
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Pronto para montar o PC dos seus sonhos?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comece agora e tenha o computador ideal para suas necessidades
                em minutos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={builder}>
                <Button size="lg" variant="secondary" className="group">
                  Montar Meu PC
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

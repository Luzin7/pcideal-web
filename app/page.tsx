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
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const revalidate = 86400;

export default function Home() {
  const { howItWorks, builder } = localRoutePaths;
  return (
    <div className="flex flex-col">
      <section className="w-full pt-20 pb-8 md:pt-32 md:pb-10 lg:pt-40 lg:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/10 backdrop-blur-sm">
              <Check className="mr-1 h-3 w-3" /> Para quem não quer errar na
              compra
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Monte seu PC <br />
              <span className="text-primary">sem medo de errar na peça.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Diga para que vai usar e quanto pode gastar. Em 2 minutos você
              recebe 3 opções que encaixam entre si, com preço atualizado na
              loja. Sem cadastro.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link href={builder} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg h-14 px-8 font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
                >
                  Montar meu PC agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={howItWorks} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg h-14 px-8 bg-background/50 backdrop-blur-sm hover:bg-accent/50"
                >
                  Ver como funciona
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-primary" /> Sem cadastro
              </span>
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-primary" /> Preços
                atualizados
              </span>
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-primary" /> Você decide a
                compra
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Por que usar o PcIdeal?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Sem letra miúda. <br />
                <span className="text-primary">Sem peça errada.</span>
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Antes de sugerir, a gente confere se as peças encaixam e se
                cabem no seu orçamento.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 h-full">
              <FeatureCard
                icon={<Cpu className="h-10 w-10 text-primary" />}
                title="Nada de peça que não encaixa"
                description="Conferimos processador, placa-mãe, memória, fonte e gabinete antes de sugerir. O que está na lista funciona junto."
              />
            </div>
            <div className="md:col-span-1 h-full">
              <FeatureCard
                icon={<DollarSign className="h-10 w-10 text-primary" />}
                title="Dentro do que você pode gastar"
                description="Você define o teto. A build é montada para caber nele, sem peça cara que não muda o seu dia."
              />
            </div>
            <div className="md:col-span-1 h-full">
              <FeatureCard
                icon={<MonitorPlay className="h-10 w-10 text-primary" />}
                title="Ajustado para o seu uso"
                description="Jogos, trabalho ou edição: as peças mudam de prioridade conforme o que você faz."
              />
            </div>
            <div className="md:col-span-2 h-full">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="O melhor desempenho por real"
                description="O dinheiro vai para o que faz diferença no seu uso, não para número grande na caixa."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Como Funciona
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Monte seu PC em 3 passos
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sem cadastro e sem termo técnico. Você informa o uso e o
                orçamento; a gente monta as opções.
              </p>
            </div>
          </div>
          <HowItWorks />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Pronto para ver sua build?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Em 2 minutos, com preços atualizados e sem cadastro.
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

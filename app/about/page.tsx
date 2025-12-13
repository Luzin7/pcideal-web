import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code2, Heart, Lightbulb, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nós | PcIdeal',
  description:
    'Conheça a missão do PcIdeal: democratizar o acesso à performance de hardware através de tecnologia e simplicidade.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Democratizando a <br />
          <span className="text-primary">Alta Performance</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Acreditamos que montar um computador não deveria exigir um diploma em
          engenharia. O PcIdeal nasceu para traduzir especificações técnicas em
          experiências reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/10">
            Nossa Missão
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            O fim da "Taxa de Leigo"
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Todos os dias, milhares de pessoas gastam mais do que precisam em
            peças incompatíveis ou superdimensionadas, simplesmente porque o
            mercado de hardware é (muito) confuso.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nós criamos uma engine imparcial que ignora o marketing das marcas e
            foca no que importa: <strong>matemática e performance</strong>. Se
            uma peça não vale o preço, ela não entra na nossa recomendação.
          </p>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border border-border/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <div className="relative z-10 p-8 bg-background/80 backdrop-blur-md rounded-2xl border shadow-2xl max-w-xs text-center">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Imparcialidade Total</h3>
            <p className="text-sm text-muted-foreground">
              Não somos patrocinados por fabricantes. Nossas sugestões são 100%
              baseadas em dados de performance e preço atual.
            </p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Lightbulb className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Simplicidade Radical</h3>
              <p className="text-muted-foreground">
                Transformamos dados técnicos em 3 opções claras. A complexidade
                fica no nosso servidor, não na sua tela.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Tecnologia, não Mágica</h3>
              <p className="text-muted-foreground">
                Não usamos "chutes". Nosso algoritmo calcula gargalos
                (bottleneck) entre CPU e GPU para garantir eficiência máxima.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Foco no Usuário</h3>
              <p className="text-muted-foreground">
                Seu orçamento é sagrado. Buscamos extrair cada frame de
                performance possível de cada real investido.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para montar sua máquina?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Junte-se ao clube de usuários que economizaram tempo e dinheiro com
            o PcIdeal.
          </p>
          <Link href="/builder" className="inline-block">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-bold text-lg h-12 px-8 shadow-lg"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

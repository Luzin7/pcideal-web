import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code2, Heart, Lightbulb, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nós | PcIdeal',
  description:
    'O PcIdeal ajuda quem vai montar o primeiro PC a escolher peças que encaixam e cabem no orçamento.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Comprar PC não deveria <br />
          <span className="text-primary">ser um chute caro.</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          O PcIdeal existe para quem vai montar o primeiro computador e tem medo
          de gastar errado. Você diz o uso e o orçamento; a gente mostra peças
          que encaixam.
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
            Quem nunca montou um PC costuma pagar mais do que precisa: peça que
            não encaixa, peça que não muda nada no uso, ou as duas coisas.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A gente confere o conjunto antes de sugerir: tudo combina, cabe no
            seu orçamento e faz diferença no que você vai fazer.
          </p>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border border-border/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <div className="relative z-10 p-8 bg-background/80 backdrop-blur-md rounded-2xl border shadow-2xl max-w-xs text-center">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">
              Sem cadastro, sem pressão
            </h3>
            <p className="text-sm text-muted-foreground">
              Você vê as peças, os preços e os links da KaBuM. A compra é sua.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Lightbulb className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Direto ao ponto</h3>
              <p className="text-muted-foreground">
                Três opções claras, sem termo técnico e sem planilha.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Conferência de verdade</h3>
              <p className="text-muted-foreground">
                Checamos se as peças encaixam e se o conjunto faz sentido para o
                seu uso.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="pt-8">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">O seu dinheiro manda</h3>
              <p className="text-muted-foreground">
                A build cabe no limite que você define. Nada de peça cara que
                não muda o seu dia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para montar seu primeiro PC?
          </h2>
          <p className="text-primary-foreground/90 text-lg">
            Sem cadastro. Em 2 minutos você vê sua build com preços na KaBuM.
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

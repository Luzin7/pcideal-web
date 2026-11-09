import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Check,
  Cpu,
  DollarSign,
  HardDrive,
  MemoryStick,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

export const revalidate = 86400;

export default function HowItWorksPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/10">
            Para quem não quer errar na compra
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Como funciona o <span className="text-primary">PcIdeal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Três passos, sem cadastro e sem termo técnico. Você informa o uso e
            o orçamento; a gente monta opções que encaixam.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <MonitorPlay className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Diga para que vai usar
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Jogos, trabalho, estudos ou edição de vídeo. Você não precisa
                  saber o nome de cada peça.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Diga quanto pode gastar
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Você define o teto. A gente escolhe as peças que cabem nele e
                  que funcionam juntas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Compare e escolha</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Três opções prontas: econômica, balanceada e performance. Cada
                  peça vem com preço e link da KaBuM.
                </p>
              </div>
            </div>
          </section>

          <div className="py-12">
            <Separator className="opacity-50" />
          </div>

          <section className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O que a gente confere por você
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Nada de peça aleatória: cada item é checado antes de entrar na
                  build.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">
                      Peças que combinam
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conferimos processador, placa-mãe, memória, fonte e
                      gabinete. O que está na lista funciona junto.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">
                      Peças equilibradas
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Não colocamos placa de vídeo forte com processador básico.
                      O conjunto faz sentido para o seu uso.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <HardDrive className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">Preço do dia</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O valor que você vê é o da loja no dia da consulta. Sem
                      cadastro e sem taxa nossa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              O que a gente confere em cada peça
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 ">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Se encaixa</h3>
                  <p className="text-sm text-muted-foreground">
                    Processador, placa-mãe, memória, fonte e gabinete: tudo
                    precisa combinar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Se faz sentido para o seu uso</h3>
                  <p className="text-sm text-muted-foreground">
                    A prioridade muda entre jogos, trabalho e edição de vídeo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Se cabe no orçamento</h3>
                  <p className="text-sm text-muted-foreground">
                    Buscamos o conjunto que rende mais dentro do seu limite.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Preço na KaBuM</h3>
                  <p className="text-sm text-muted-foreground">
                    Mostramos o valor da loja no dia da consulta.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Sua preferência de marca</h3>
                  <p className="text-sm text-muted-foreground">
                    Se você prefere AMD, Intel ou NVIDIA, a build respeita.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Equilíbrio</h3>
                  <p className="text-sm text-muted-foreground">
                    Evitamos peça forte demais para o resto do conjunto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">
              As peças que entram na build
            </h2>
            <p className="text-muted-foreground mb-6">
              Toda build vem com os itens essenciais para o PC ligar e
              funcionar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Processador (CPU)</h3>
                <p className="text-sm text-muted-foreground">
                  Faz o trabalho pesado do dia a dia.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <MonitorPlay className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Placa de Vídeo (GPU)</h3>
                <p className="text-sm text-muted-foreground">
                  Cuida dos gráficos dos jogos e da edição de vídeo.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <MemoryStick className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Memória RAM</h3>
                <p className="text-sm text-muted-foreground">
                  Deixa você abrir vários programas ao mesmo tempo.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Armazenamento</h3>
                <p className="text-sm text-muted-foreground">
                  Guarda o sistema, os programas e os arquivos.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Fonte de Alimentação</h3>
                <p className="text-sm text-muted-foreground">
                  Entrega energia para todas as peças.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Placa-mãe</h3>
                <p className="text-sm text-muted-foreground">
                  Liga todas as peças umas às outras.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold">O serviço é gratuito?</h3>
                <p className="text-muted-foreground">
                  Sim. Você não paga nada para usar o PcIdeal e não precisa
                  criar conta.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Como vocês ganham dinheiro?</h3>
                <p className="text-muted-foreground">
                  Recebemos uma comissão da KaBuM quando você compra por um link
                  nosso. O preço que você paga é o mesmo da loja.
                </p>
              </div>

              <div>
                <h3 className="font-bold">As recomendações são confiáveis?</h3>
                <p className="text-muted-foreground">
                  A gente mostra as peças, os preços e os links para você
                  conferir antes de comprar. A decisão de comprar é sua.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Posso modificar as recomendações?</h3>
                <p className="text-muted-foreground">
                  Hoje você escolhe entre três builds prontas e pode ver os
                  detalhes de cada peça. Ainda não dá para trocar peça por peça.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

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
            Processo Simplificado
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Como Funciona o <span className="text-primary">PcIdeal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entenda como nossa engine transforma seu orçamento em performance
            máxima, sem desperdícios e sem complicações.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <MonitorPlay className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Análise de Objetivo</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Você nos diz o que quer fazer: jogar, editar vídeos ou apenas
                  trabalhar. Diz quanto quer gastar. Nós fazemos o resto.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Otimização de Orçamento
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  O algoritmo vai em busca do melhor preço/performance, evitando
                  gargalos que fariam você jogar dinheiro fora.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">A Build Perfeita</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Receba 3 opções: Econômica, Balanceada e Performance. Tudo com
                  links diretos e garantia de compatibilidade.
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
                  Por que confiar na PcIdeal?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Não somos apenas um gerador aleatório. Somos uma ferramenta de
                  precisão para hardware.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">
                      Compatibilidade 100%
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Verificamos socket, TDP, dimensões físicas e barramentos.
                      Se está na lista, funciona junto.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">Zero Gargalo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Não sugerimos uma GPU topo de linha com um processador
                      básico. O equilíbrio é a chave.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <HardDrive className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="font-bold text-xl mb-3">Peças Modernas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nossa base de dados é atualizada constantemente com os
                      lançamentos mais recentes do mercado.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              O que analisamos em cada componente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 ">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Compatibilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantimos que todos os componentes funcionem perfeitamente
                    juntos, sem problemas de compatibilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Desempenho</h3>
                  <p className="text-sm text-muted-foreground">
                    Priorizamos componentes que oferecem o melhor desempenho
                    para o seu caso de uso específico.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Custo-benefício</h3>
                  <p className="text-sm text-muted-foreground">
                    Buscamos o melhor valor pelo seu dinheiro, evitando
                    componentes com preço inflacionado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Preços atualizados</h3>
                  <p className="text-sm text-muted-foreground">
                    Comparamos preços em tempo real nas principais lojas
                    brasileiras para encontrar as melhores ofertas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Preferências de marca</h3>
                  <p className="text-sm text-muted-foreground">
                    Respeitamos suas preferências por marcas específicas de
                    processador ou placa de vídeo.
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
                    Evitamos gargalos, garantindo que todos os componentes
                    trabalhem em harmonia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Componentes que selecionamos
            </h2>
            <p className="text-muted-foreground mb-6">
              Nosso sistema seleciona todos os componentes essenciais para um PC
              completo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Processador (CPU)</h3>
                <p className="text-sm text-muted-foreground">
                  O cérebro do computador, responsável por processar todas as
                  informações.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <MonitorPlay className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Placa de Vídeo (GPU)</h3>
                <p className="text-sm text-muted-foreground">
                  Responsável pelo processamento gráfico, essencial para jogos e
                  edição de vídeo.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <MemoryStick className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Memória RAM</h3>
                <p className="text-sm text-muted-foreground">
                  Armazenamento temporário que permite executar múltiplos
                  programas simultaneamente.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Armazenamento</h3>
                <p className="text-sm text-muted-foreground">
                  SSDs e HDDs para armazenar seu sistema operacional, programas
                  e arquivos.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Fonte de Alimentação</h3>
                <p className="text-sm text-muted-foreground">
                  Fornece energia estável e suficiente para todos os componentes
                  do sistema.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium">Placa-mãe</h3>
                <p className="text-sm text-muted-foreground">
                  Conecta todos os componentes e permite que se comuniquem entre
                  si.
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
                  Sim, o PcIdeal é completamente gratuito para os usuários.
                  Nosso modelo de negócio é baseado em comissões de afiliados
                  quando você compra componentes através dos nossos links.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Como vocês ganham dinheiro?</h3>
                <p className="text-muted-foreground">
                  Recebemos pequenas comissões das lojas parceiras quando você
                  compra componentes através dos nossos links. Isso não aumenta
                  o preço que você paga e nos permite manter o serviço gratuito.
                </p>
              </div>

              <div>
                <h3 className="font-bold">As recomendações são confiáveis?</h3>
                <p className="text-muted-foreground">
                  Embora o projeto esteja em fase inicial, nosso algoritmo é
                  imparcial e prioriza sempre o melhor custo-benefício para o
                  usuário. Não favorecemos nenhuma marca ou loja específica em
                  nossas recomendações.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Posso modificar as recomendações?</h3>
                <p className="text-muted-foreground">
                  Ainda não, oferecemos três opções de configuração e você pode
                  visualizar os detalhes de cada componente. Em breve,
                  adicionaremos a funcionalidade de personalizar ainda mais sua
                  configuração.
                </p>
              </div>

              {/* <div>
                <h3 className="font-bold">
                  Como compartilhar minha configuração?
                </h3>
                <p className="text-muted-foreground">
                  Você pode compartilhar sua configuração através de um link ou
                  exportá-la como PDF para referência futura ou para enviar a
                  amigos.
                </p>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

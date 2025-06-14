import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Check,
  Cpu,
  DollarSign,
  HardDrive,
  MemoryStick,
  MonitorPlay,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Como Funciona o PcIdeal</h1>
          <p className="text-xl text-muted-foreground">
            Entenda como nossa plataforma ajuda você a montar o PC perfeito para
            suas necessidades
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-muted-foreground mb-6">
              O PcIdeal utiliza um algoritmo avançado que analisa milhares de
              combinações de componentes para encontrar a configuração ideal
              para você. Nosso processo é simples e direto:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. Defina seu Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Informe para que você usará seu PC: jogos, trabalho, edição
                    de vídeo ou uso geral. Isso nos ajuda a priorizar os
                    componentes certos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. Defina seu Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Informe quanto você pode investir. Nosso sistema trabalha
                    dentro desse valor, com pequenas variações para otimizar o
                    custo-benefício.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Receba Recomendações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Apresentamos três opções de configuração otimizadas para
                    suas necessidades, com todos os componentes compatíveis
                    entre si.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">O que consideramos</h2>
            <p className="text-muted-foreground mb-6">
              Nosso algoritmo leva em conta diversos fatores para recomendar os
              melhores componentes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
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

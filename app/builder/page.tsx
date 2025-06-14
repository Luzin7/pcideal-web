'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { convertSmallestUnitToCurrency } from '@/lib/utils';
import {
  BuildParts,
  Part,
  RecommendationBuild,
} from '@/services/pcIdeal-api/models/recommendedBuild';
import {
  CpuPreference,
  createBuild,
  GpuPreference,
  UsageType,
} from '@/services/pcIdeal-api/modules/build';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircuitBoard,
  Cpu,
  Download,
  HardDrive,
  Info,
  MemoryStick,
  MonitorPlay,
  Share2,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const partLabels = {
  cpu: 'Processador',
  mobo: 'Placa-mãe',
  ram: 'Memória RAM',
  primary_storage: 'Armazenamento',
  gpu: 'Placa de Vídeo',
  psu: 'Fonte',
};

const typePartIconMapper = {
  cpu: <Cpu className="h-6 w-6 text-primary" />,
  mobo: <CircuitBoard className="h-6 w-6 text-primary" />,
  ram: <MemoryStick className="h-6 w-6 text-primary" />,
  primary_storage: <HardDrive className="h-6 w-6 text-primary" />,
  gpu: <MonitorPlay className="h-6 w-6 text-primary" />,
  psu: <Zap className="h-6 w-6 text-primary" />,
};
type BuildType = 'economic' | 'balanced' | 'pro';
const typeMapper = {
  economic: 'Econômico',
  balanced: 'Balanceado',
  pro: 'Plus',
};

export default function BuilderPage() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(5000);
  const [usageType, setUsageType] = useState<UsageType>('GAMING');
  const [cpuPreference, setCpuPreference] =
    useState<CpuPreference>('no-preference');
  const [gpuPreference, setGpuPreference] =
    useState<GpuPreference>('no-preference');
  const [loading, setLoading] = useState(false);
  const [selectedBuild, setSelectedBuild] = useState(0);
  type BuildCompleteType = RecommendationBuild[] | null;
  const [buildComplete, setBuildComplete] = useState<BuildCompleteType>(null);

  const handleBuild = async (): Promise<RecommendationBuild[] | null> => {
    setLoading(true);
    const result = await createBuild({
      budget,
      cpuPreference,

      gpuPreference,
      usageType,
    });

    if (!result.success) {
      console.error(result.error);
      setLoading(false);
      return null;
    }

    return result.data.data.builds;
  };

  const handleNextStep = async () => {
    if (step === 2) {
      setStep(3);
      const builds = await handleBuild();
      if (!builds) {
        setLoading(false);
        return console.log('deu errado');
      }
      setBuildComplete(builds);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/30">
      <div className="container py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 1 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                1
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Objetivo
              </div>
            </div>
            <div className="flex-1 mx-4">
              <Progress
                value={step === 1 ? 33 : step === 2 ? 66 : 100}
                className="h-2"
              />
            </div>
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 2 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                2
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Orçamento
              </div>
            </div>
            <div className="flex-1 mx-4">
              <Progress
                value={step === 1 ? 0 : step === 2 ? 33 : 100}
                className="h-2"
              />
            </div>
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 3 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                3
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Resultado
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Para que você usará seu PC?
                  </CardTitle>
                  <CardDescription>
                    Escolha o objetivo principal do seu computador para
                    otimizarmos os componentes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <RadioGroup
                      value={usageType}
                      onValueChange={(value) =>
                        setUsageType(value as UsageType)
                      }
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem
                          value="GAMING"
                          id="GAMING"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="GAMING"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <MonitorPlay className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Jogos</h3>
                            <p className="text-sm text-muted-foreground">
                              Otimizado para jogos modernos com altas taxas de
                              quadros
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="WORK"
                          id="WORK"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="WORK"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Cpu className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Trabalho</h3>
                            <p className="text-sm text-muted-foreground">
                              Para produtividade, multitarefas e aplicativos de
                              escritório
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="CONTENT_CREATOR"
                          id="CONTENT_CREATOR"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="CONTENT_CREATOR"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <HardDrive className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Criação de Conteúdo</h3>
                            <p className="text-sm text-muted-foreground">
                              Para edição de vídeo, design gráfico e modelagem
                              3D
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Preferências de Hardware
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="cpu-preference">
                            Preferência de Processador
                          </Label>
                          <Select
                            value={cpuPreference}
                            onValueChange={(value) =>
                              setCpuPreference(value as CpuPreference)
                            }
                          >
                            <SelectTrigger id="cpu-preference">
                              <SelectValue placeholder="Selecione uma preferência" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no-preference">
                                Sem preferência
                              </SelectItem>
                              <SelectItem value="amd">Prefiro AMD</SelectItem>
                              <SelectItem value="intel">
                                Prefiro Intel
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gpu-preference">
                            Preferência de Placa de Vídeo
                          </Label>
                          <Select
                            value={gpuPreference}
                            onValueChange={(value) =>
                              setGpuPreference(value as GpuPreference)
                            }
                          >
                            <SelectTrigger id="gpu-preference">
                              <SelectValue placeholder="Selecione uma preferência" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no-preference">
                                Sem preferência
                              </SelectItem>
                              <SelectItem value="nvidia">
                                Prefiro NVIDIA
                              </SelectItem>
                              <SelectItem value="amd">Prefiro AMD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Isso nos ajuda a personalizar as recomendações de acordo
                        com suas preferências, mas sempre priorizaremos
                        desempenho e custo-benefício.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Próximo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Qual é o seu orçamento?
                  </CardTitle>
                  <CardDescription>
                    Defina quanto você deseja investir no seu PC. Podemos
                    sugerir pequenas variações para otimizar o custo-benefício.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="budget">Orçamento (R$)</Label>
                      <span className="font-medium text-primary">
                        R$ {budget.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <Slider
                      id="budget"
                      min={2000}
                      max={15000}
                      step={500}
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>R$ 2.000</span>
                      <span>R$ 15.000</span>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 bg-muted/20">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Variação de Orçamento
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permitimos uma variação de até 10% no orçamento para
                      otimizar o custo-benefício das peças. Isso significa que
                      podemos sugerir configurações entre R${' '}
                      {Math.floor(budget * 0.9).toLocaleString('pt-BR')} e R${' '}
                      {Math.ceil(budget * 1.1).toLocaleString('pt-BR')}.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Gerar PC Ideal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {(loading && !buildComplete) || buildComplete === null ? (
                <Card className="shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-xl font-medium mb-2">
                      Montando seu PC ideal...
                    </h3>
                    <p className="text-muted-foreground">
                      Estamos analisando milhares de combinações para encontrar
                      a melhor configuração para você.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['economic', 'balanced', 'pro'].map((type, index) => {
                      const build = buildComplete.find(
                        (b) => b.build_type.toLowerCase() === type,
                      );

                      return (
                        <Card
                          key={index}
                          className={`cursor-pointer transition-all duration-300 ${
                            selectedBuild === index
                              ? 'card-highlight'
                              : 'hover:border-primary/30 hover:shadow-sm'
                          }`}
                          onClick={() => build && setSelectedBuild(index)}
                        >
                          <CardHeader>
                            <CardTitle>
                              {typeMapper[type as BuildType]}
                            </CardTitle>
                            <CardDescription>
                              {index === 0
                                ? 'Melhor custo-benefício'
                                : index === 1
                                  ? 'Recomendado'
                                  : 'Mais desempenho'}
                            </CardDescription>
                          </CardHeader>
                          {build ? (
                            <>
                              <CardContent>
                                <div className="text-2xl font-bold mb-4">
                                  R${' '}
                                  {(build.build_value / 100).toLocaleString(
                                    'pt-BR',
                                  )}
                                </div>
                                <div className="space-y-2">
                                  {Object.entries(build.parts)
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    .filter(([_, part]) => part)
                                    .slice(0, 3)
                                    .map(([key, part], idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center text-sm"
                                      >
                                        <div className="mr-2 text-primary">
                                          {
                                            typePartIconMapper[
                                              key as keyof BuildParts
                                            ]
                                          }
                                        </div>
                                        <div className="flex-1">
                                          {partLabels[key as keyof BuildParts]}:{' '}
                                          {part!.brand} {part!.model}
                                        </div>
                                      </div>
                                    ))}
                                  <div className="text-sm text-muted-foreground">
                                    + {Object.keys(build.parts).length - 3}{' '}
                                    componentes
                                  </div>
                                </div>
                              </CardContent>
                              <CardFooter>
                                <Button
                                  variant={
                                    selectedBuild === index
                                      ? 'default'
                                      : 'outline'
                                  }
                                  className={`w-full ${
                                    selectedBuild === index
                                      ? 'bg-primary hover:bg-primary/90'
                                      : ''
                                  }`}
                                >
                                  {selectedBuild === index
                                    ? 'Selecionado'
                                    : 'Selecionar'}
                                </Button>
                              </CardFooter>
                            </>
                          ) : (
                            <CardContent>
                              <div className="text-center text-muted-foreground">
                                Ainda não temos uma build ideal para esta
                                categoria, mas estamos trabalhando para expandir
                                nossas recomendações. Em breve, mais opções
                                estarão disponíveis.
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="shadow-sm">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <div>
                              <CardTitle className="text-2xl">
                                Seu PC Ideal -{' '}
                                {
                                  typeMapper[
                                    buildComplete[
                                      selectedBuild
                                    ].build_type.toLowerCase() as BuildType
                                  ]
                                }
                              </CardTitle>
                              <CardDescription>
                                Configuração otimizada para{' '}
                                {usageType === 'GAMING'
                                  ? 'jogos'
                                  : usageType === 'WORK'
                                    ? 'trabalho'
                                    : 'criação de conteúdo'}
                              </CardDescription>
                            </div>
                            <Badge className="bg-primary hover:bg-primary/90">
                              Excelente custo-benefício
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="components">
                            <TabsList className="grid w-full grid-cols-1">
                              <TabsTrigger value="components">
                                Componentes
                              </TabsTrigger>
                              {/* <TabsTrigger value="prices">Preços</TabsTrigger> */}
                            </TabsList>
                            <TabsContent
                              value="components"
                              className="space-y-4 pt-4"
                            >
                              <div className="space-y-4">
                                {buildComplete[selectedBuild].parts &&
                                  Object.entries(
                                    buildComplete[selectedBuild].parts,
                                  ).map(([key, part]) => (
                                    <ComponentItem
                                      key={key}
                                      icon={
                                        typePartIconMapper[
                                          key as keyof BuildParts
                                        ]
                                      }
                                      label={
                                        partLabels[key as keyof BuildParts]
                                      }
                                      part={part!}
                                    />
                                  ))}
                              </div>
                            </TabsContent>
                            {/* <TabsContent value="prices" className="pt-4">
                              <div className="space-y-4">
                                <div className="rounded-lg border p-4">
                                  <h3 className="font-medium mb-2">
                                    Comparação de Preços
                                  </h3>
                                  <div className="space-y-3">
                                    <PriceItem
                                      store="KaBuM!"
                                      price={
                                        buildComplete[selectedBuild].build_value
                                      }
                                      bestPrice={true}
                                    />
                                  </div>
                                </div>
                                <div className="rounded-lg border p-4 bg-muted/20">
                                  <h3 className="font-medium mb-2">Economia</h3>
                                  <p className="text-sm text-muted-foreground">
                                    Esta configuração está{' '}
                                    <span className="text-green-500 font-medium">
                                      {convertSmallestUnitToCurrency(
                                        buildComplete[selectedBuild]
                                          .build_value,
                                      ) < budget
                                        ? `R$ ${(
                                            budget -
                                            convertSmallestUnitToCurrency(
                                              buildComplete[selectedBuild]
                                                .build_value,
                                            )
                                          ).toLocaleString('pt-BR')} abaixo`
                                        : `R$ ${(
                                            convertSmallestUnitToCurrency(
                                              buildComplete[selectedBuild]
                                                .build_value,
                                            ) - budget
                                          ).toLocaleString('pt-BR')} acima`}
                                    </span>{' '}
                                    do seu orçamento de R${' '}
                                    {budget.toLocaleString('pt-BR')}.
                                  </p>
                                </div>
                              </div>
                            </TabsContent> */}
                          </Tabs>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={handlePrevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Ajustar Orçamento
                          </Button>
                          <div className="flex space-x-2">
                            <Button variant="outline">
                              <Share2 className="mr-2 h-4 w-4" />
                              Compartilhar
                            </Button>
                            <Button variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Exportar PDF
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Comprar Componentes
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <h3 className="font-medium mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-2 text-primary" />
                          Verifique os dados
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Apesar de buscar trazer os melhores resultados, o
                          PcIdeal pode apresentar imprecisões. Valide
                          informações importantes antes de usá-las.
                        </p>
                      </div>
                      <Card className="shadow-sm">
                        <CardHeader>
                          <CardTitle>Resumo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Objetivo
                              </span>
                              <span className="font-medium">
                                {usageType === 'GAMING'
                                  ? 'Jogos'
                                  : usageType === 'WORK'
                                    ? 'Trabalho'
                                    : 'Criação de Conteúdo'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Preferência CPU
                              </span>
                              <span className="font-medium">
                                {cpuPreference === 'no-preference'
                                  ? 'Sem Preferência'
                                  : cpuPreference === 'AMD'
                                    ? 'AMD'
                                    : 'Intel'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Preferência GPU
                              </span>
                              <span className="font-medium">
                                {gpuPreference === 'no-preference'
                                  ? 'Sem Preferência'
                                  : gpuPreference === 'NVIDIA'
                                    ? 'NVIDIA'
                                    : 'AMD'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Orçamento
                              </span>
                              <span className="font-medium">
                                R$ {budget.toLocaleString('pt-BR')}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Total
                              </span>
                              <span className="font-medium">
                                R${' '}
                                {convertSmallestUnitToCurrency(
                                  buildComplete[selectedBuild].build_value,
                                ).toLocaleString('pt-BR')}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Diferença
                              </span>
                              <span
                                className={`font-medium ${
                                  convertSmallestUnitToCurrency(
                                    buildComplete[selectedBuild].build_value,
                                  ) <= budget
                                    ? 'text-green-500'
                                    : 'text-amber-500'
                                }`}
                              >
                                {convertSmallestUnitToCurrency(
                                  buildComplete[selectedBuild].build_value,
                                ) <= budget
                                  ? `- R$ ${(
                                      budget -
                                      buildComplete[selectedBuild].build_value /
                                        100
                                    ).toLocaleString('pt-BR')}`
                                  : `+ R$ ${(
                                      buildComplete[selectedBuild].build_value /
                                        100 -
                                      budget
                                    ).toLocaleString('pt-BR')}`}
                              </span>
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="font-medium mb-2">
                              Compatibilidade
                            </h3>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">
                                  Todos os componentes são compatíveis
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">
                                  Fonte tem potência adequada
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">
                                  Resfriamento suficiente
                                </span>
                              </div>
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="font-medium mb-2">Avaliação</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Desempenho</span>
                                <span className="font-medium text-green-500">
                                  {selectedBuild === 0
                                    ? 'Bom'
                                    : selectedBuild === 1
                                      ? 'Ótimo'
                                      : 'Excelente'}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Custo-benefício</span>
                                <span className="font-medium text-green-500">
                                  {selectedBuild === 0
                                    ? 'Excelente'
                                    : selectedBuild === 1
                                      ? 'Ótimo'
                                      : 'Bom'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ComponentItem({
  icon,
  label,
  part,
}: {
  icon: React.ReactNode;
  label: string;
  part: Part;
}) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border p-3 transition-all hover:border-primary hover:bg-primary/5">
      <div className="rounded-full p-2 bg-primary/10 text-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-medium">{label}</p>
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-[200px]">{explanation}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </div>
        <p className="text-sm">{part.model}</p>
        {/* <p className="text-xs text-muted-foreground">asdad</p> */}
      </div>
      <div className="text-right">
        <p className="font-medium">
          R${' '}
          {convertSmallestUnitToCurrency(part.price_cents).toLocaleString(
            'pt-BR',
          )}
        </p>
        <a
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          Ver detalhes
        </a>
      </div>
    </div>
  );
}

// function PriceItem({
//   store,
//   price,
//   bestPrice = false,
// }: {
//   store: string;
//   price: number;
//   bestPrice: boolean;
// }) {
//   return (
//     <div
//       className={`flex justify-between items-center p-2 rounded ${bestPrice ? 'bg-primary/10' : ''}`}
//     >
//       <div className="flex items-center">
//         {bestPrice && <Check className="h-4 w-4 text-primary mr-2" />}
//         <span>{store}</span>
//       </div>
//       <div className="flex items-center">
//         <span className={`font-medium ${bestPrice ? 'text-primary' : ''}`}>
//           R$ {price.toLocaleString('pt-BR')}
//         </span>
//         {bestPrice && (
//           <Badge
//             variant="outline"
//             className="ml-2 text-xs border-primary text-primary"
//           >
//             Melhor preço
//           </Badge>
//         )}
//       </div>
//     </div>
//   );
// }

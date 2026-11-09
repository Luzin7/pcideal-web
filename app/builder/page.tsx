'use client';

import { BuilderLoadingSkeleton } from '@/components/builder-loading';
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { cn, convertSmallestUnitToCurrency } from '@/lib/utils';
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
  Aperture,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CircuitBoard,
  Cpu,
  HardDrive,
  Info,
  MemoryStick,
  MonitorPlay,
  X,
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
type BuildType = 'economic' | 'balanced' | 'performance';
const typeMapper = {
  economic: 'Econômico',
  balanced: 'Balanceado',
  performance: 'Performance',
};

const minBudget = 2500;
const maxBudget = 15000;

const clampBudget = (value: number) => {
  if (!Number.isFinite(value)) {
    return minBudget;
  }
  return Math.min(maxBudget, Math.max(minBudget, Math.round(value)));
};

const formatPartFreshness = (updatedAt: string) => {
  const timestamp = new Date(updatedAt).getTime();
  if (Number.isNaN(timestamp)) {
    return null;
  }
  const hours = Math.floor((Date.now() - timestamp) / 3_600_000);
  if (hours < 0) {
    return null;
  }
  if (hours < 1) {
    return 'atualizado há menos de 1h';
  }
  return `atualizado há ${hours}h`;
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
  const [buildNotFound, setBuildNotFound] = useState<boolean>(false);

  const handleBuild = async (
    budgetValue: number,
  ): Promise<RecommendationBuild[] | null> => {
    setLoading(true);
    const result = await createBuild({
      budget: budgetValue,
      cpuPreference,
      gpuPreference,
      usageType,
    });

    if (!result.success) {
      console.error(result.error);
      setLoading(false);
      setBuildNotFound(true);
      return null;
    }

    setBuildNotFound(false);
    setLoading(false);

    return result.data.data.builds;
  };

  const handleNextStep = async () => {
    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      const clampedBudget = clampBudget(budget);
      setBudget(clampedBudget);
      setStep(3);
      const builds = await handleBuild(clampedBudget);
      if (!builds) {
        setLoading(false);
      }
      setBuildComplete(builds);
      return;
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container py-12 relative z-10 max-w-4xl">
        <h1 className="sr-only">Montar meu PC</h1>
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-border -z-10" />

            <div className="flex flex-col items-center px-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step >= 1
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                1
              </div>
              <span
                className={`mt-2 text-sm font-medium transition-colors ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Para que vai usar?
              </span>
            </div>

            <div className="flex flex-col items-center px-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step >= 2
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                2
              </div>
              <span
                className={`mt-2 text-sm font-medium transition-colors ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Quanto pode gastar?
              </span>
            </div>

            <div className="flex flex-col items-center px-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step >= 3
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                3
              </div>
              <span
                className={`mt-2 text-sm font-medium transition-colors ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Sua build
              </span>
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
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Para que vai usar o PC?
                  </CardTitle>
                  <CardDescription>
                    Escolha o uso principal. Isso muda a prioridade das peças.
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
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card/50 p-6 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:shadow-md [&:has([data-state=checked])]:border-primary"
                        >
                          <MonitorPlay className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Jogos</h3>
                            <p className="text-sm text-muted-foreground">
                              Para jogar com boa qualidade e sem travamentos
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
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card/50 p-6 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:shadow-md [&:has([data-state=checked])]:border-primary"
                        >
                          <Cpu className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Trabalho</h3>
                            <p className="text-sm text-muted-foreground">
                              Para estudar, trabalhar e usar vários programas ao
                              mesmo tempo
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
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card/50 p-6 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:shadow-md [&:has([data-state=checked])]:border-primary"
                        >
                          <Aperture className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Criação de Conteúdo</h3>
                            <p className="text-sm text-muted-foreground">
                              Para editar vídeo, música, design ou modelagem 3D
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <Collapsible className="space-y-4 border rounded-lg p-4">
                      <CollapsibleTrigger className="flex w-full items-center justify-between font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                        <span>Opções avançadas (marcas)</span>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-4 pt-4">
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
                                  Sem preferência (Recomendado)
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
                                  Sem preferência (Recomendado)
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
                          Se você não tem preferência, deixe em "Sem
                          preferência": a gente busca o melhor custo-benefício.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Continuar
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
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Quanto você pode gastar?
                  </CardTitle>
                  <CardDescription>
                    Defina o limite. A build é montada para caber nele.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <Label htmlFor="budget" className="text-lg font-semibold">
                        Seu limite
                      </Label>

                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Slider
                            id="budget"
                            min={minBudget}
                            max={maxBudget}
                            step={100}
                            value={[clampBudget(budget)]}
                            onValueChange={(value) => setBudget(value[0])}
                            className="py-4"
                          />
                        </div>
                        <div className="w-32">
                          <div className="relative">
                            <span className="absolute left-3 top-2.5 text-muted-foreground">
                              R$
                            </span>
                            <Input
                              type="number"
                              value={budget}
                              onChange={(e) =>
                                setBudget(Number(e.target.value))
                              }
                              onBlur={() => setBudget(clampBudget(budget))}
                              className="pl-9 font-bold text-lg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>R$ 2.500</span>
                        <span>R$ 15.000</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 bg-muted/20">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Variação de orçamento
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Podemos variar até 15% para encaixar as melhores peças.
                      Nesse caso, a build fica entre R${' '}
                      {Math.floor(budget * 0.85).toLocaleString('pt-BR')} e R${' '}
                      {Math.ceil(budget * 1.15).toLocaleString('pt-BR')}.
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
                    Gerar minha build
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
              {loading || buildComplete === null ? (
                buildNotFound ? (
                  <Card className="shadow-sm bg-background">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <div className="mb-4">
                        <X className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        Não deu para montar sua build
                      </h3>
                      <p className="text-muted-foreground text-center mb-6 max-w-md">
                        Você pode ter atingido o limite de consultas por hora,
                        ou não temos peças que caibam nesse orçamento agora.
                        Tente ajustar o valor ou as preferências.
                      </p>
                      <Button
                        onClick={() => {
                          setBuildNotFound(false);
                          setStep(2);
                        }}
                        className="mt-2"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Ajustar orçamento
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <BuilderLoadingSkeleton />
                )
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['economic', 'balanced', 'performance'].map(
                      (type, index) => {
                        const build = buildComplete.find(
                          (b) => b.build_type.toLowerCase() === type,
                        );
                        const isBalanced = type === 'balanced';

                        return (
                          <Card
                            key={index}
                            className={`cursor-pointer transition-all duration-300 relative ${
                              selectedBuild === index
                                ? 'card-highlight'
                                : 'hover:border-primary/30 hover:shadow-sm'
                            } ${isBalanced && selectedBuild !== index ? 'border-primary/40' : ''}`}
                            onClick={() => build && setSelectedBuild(index)}
                          >
                            {isBalanced && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                                Recomendado
                              </div>
                            )}
                            <CardHeader>
                              <CardTitle>
                                {typeMapper[type as BuildType]}
                              </CardTitle>
                              <CardDescription>
                                {index === 0
                                  ? 'A mais barata das três'
                                  : index === 1
                                    ? 'Meio-termo entre preço e desempenho'
                                    : 'A mais forte das três'}
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
                                            {
                                              partLabels[
                                                key as keyof BuildParts
                                              ]
                                            }
                                            : {part!.brand} {part!.model}
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
                                  Não encontramos uma build para essa opção
                                  agora. Tente ajustar o orçamento.
                                </div>
                              </CardContent>
                            )}
                          </Card>
                        );
                      },
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="shadow-sm">
                        <CardHeader>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <CardTitle className="text-2xl">
                                Sua build -{' '}
                                {
                                  typeMapper[
                                    buildComplete[
                                      selectedBuild
                                    ].build_type.toLowerCase() as BuildType
                                  ]
                                }
                              </CardTitle>
                              <CardDescription>
                                Build para{' '}
                                {usageType === 'GAMING'
                                  ? 'jogos'
                                  : usageType === 'WORK'
                                    ? 'trabalho'
                                    : 'criação de conteúdo'}
                              </CardDescription>
                            </div>
                            <Badge className="bg-primary hover:bg-primary/90">
                              Peças conferidas
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="components">
                            <TabsList className="grid w-full grid-cols-1">
                              <TabsTrigger value="components">
                                Componentes
                              </TabsTrigger>
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
                          </Tabs>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={handlePrevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Ajustar orçamento
                          </Button>
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
                          Confira os dados antes de comprar. Preços e links vêm
                          da loja e podem mudar a qualquer momento.
                        </p>
                      </div>
                      <Card className="shadow-sm">
                        <CardHeader>
                          <CardTitle>Resumo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <SummaryRow
                              label="Objetivo"
                              value={
                                usageType === 'GAMING'
                                  ? 'Jogos'
                                  : usageType === 'WORK'
                                    ? 'Trabalho'
                                    : 'Criação de Conteúdo'
                              }
                            />
                            <SummaryRow
                              label="Processador"
                              value={
                                cpuPreference === 'no-preference'
                                  ? 'Sem Preferência'
                                  : cpuPreference === 'AMD'
                                    ? 'AMD'
                                    : 'Intel'
                              }
                            />
                            <SummaryRow
                              label="Placa de vídeo"
                              value={
                                gpuPreference === 'no-preference'
                                  ? 'Sem Preferência'
                                  : gpuPreference === 'NVIDIA'
                                    ? 'NVIDIA'
                                    : 'AMD'
                              }
                            />
                            <SummaryRow
                              label="Orçamento"
                              value={`R$ ${budget.toLocaleString('pt-BR')}`}
                            />
                            <SummaryRow
                              label="Total"
                              value={`R$ ${convertSmallestUnitToCurrency(
                                buildComplete[selectedBuild].build_value,
                              ).toLocaleString('pt-BR')}`}
                            />
                            <SummaryRow
                              label="Diferença"
                              value={
                                convertSmallestUnitToCurrency(
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
                                    ).toLocaleString('pt-BR')}`
                              }
                              valueClassName={
                                convertSmallestUnitToCurrency(
                                  buildComplete[selectedBuild].build_value,
                                ) <= budget
                                  ? 'text-green-700 dark:text-green-400'
                                  : 'text-amber-700 dark:text-amber-400'
                              }
                            />
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
                            </div>
                          </div>
                          <Separator />
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
  const freshness = part.updated_at
    ? formatPartFreshness(part.updated_at)
    : null;
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-3 transition-all hover:border-primary hover:bg-primary/5 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex min-w-0 items-start gap-3 sm:flex-1">
        <div className="shrink-0 rounded-full p-2 bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="font-medium">{label}</p>
          <p className="text-sm break-words">
            {part.brand.toUpperCase()} {part.model}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:shrink-0 sm:items-end sm:text-right">
        <div>
          <p className="font-medium">
            R${' '}
            {convertSmallestUnitToCurrency(part.price_cents).toLocaleString(
              'pt-BR',
            )}
          </p>
          {freshness && (
            <p className="text-xs text-muted-foreground">{freshness}</p>
          )}
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
        >
          <a
            href={part.affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar na loja
          </a>
        </Button>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn('text-right font-medium', valueClassName)}>
        {value}
      </span>
    </div>
  );
}

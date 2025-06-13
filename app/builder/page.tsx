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
import { Checkbox } from '@/components/ui/checkbox';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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
  const [buildComplete, setBuildComplete] = useState(false);

  const handleBuild = async () => {
    setLoading(true);

    const result = await createBuild({
      budget,
      cpuPreference,
      gpuPreference,
      usageType,
    });

    if (!result.success) {
      console.error(result.error.response?.data || result.error.message);
      setLoading(false);
      return;
    }

    console.log(result.data);
    setBuildComplete(true);
    setLoading(false);
  };

  const handleNextStep = async () => {
    if (step === 2) {
      setStep(3);
      await handleBuild();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const builds = [
    {
      name: 'Econômico',
      price: 4750.95,
      components: [
        {
          icon: <Cpu className="h-6 w-6" />,
          name: 'Processador',
          value: 'AMD Ryzen 5 5600X',
          description: '6 núcleos, 12 threads, 3.7GHz (4.6GHz Turbo)',
          price: 1099.99,
          explanation:
            'Excelente processador para jogos com ótimo custo-benefício.',
        },
        {
          icon: <MonitorPlay className="h-6 w-6" />,
          name: 'Placa de Vídeo',
          value: 'NVIDIA RTX 3060',
          description: '12GB GDDR6, Ray Tracing',
          price: 1899.99,
          explanation:
            'Boa performance para jogos em 1080p com suporte a Ray Tracing e DLSS.',
        },
        {
          icon: <MemoryStick className="h-6 w-6" />,
          name: 'Memória',
          value: '16GB DDR4 3200MHz',
          description: '2x8GB, CL16',
          price: 349.99,
          explanation:
            'Capacidade suficiente para jogos atuais com boa velocidade.',
        },
        {
          icon: <HardDrive className="h-6 w-6" />,
          name: 'Armazenamento',
          value: 'SSD NVMe 1TB',
          description: 'PCIe 3.0, 3500MB/s',
          price: 499.99,
          explanation:
            'Armazenamento rápido com boa capacidade para jogos e aplicativos.',
        },
        {
          icon: <Zap className="h-6 w-6" />,
          name: 'Fonte',
          value: '650W 80+ Bronze',
          description: 'Semi-modular, certificada',
          price: 399.99,
          explanation:
            'Potência adequada com certificação de eficiência e margem para upgrades.',
        },
      ],
    },
    {
      name: 'Equilibrado',
      price: 5000.95,
      components: [
        {
          icon: <Cpu className="h-6 w-6" />,
          name: 'Processador',
          value: 'AMD Ryzen 7 5800X',
          description: '8 núcleos, 16 threads, 3.8GHz (4.7GHz Turbo)',
          price: 1499.99,
          explanation:
            'Processador potente com mais núcleos, ideal para jogos e multitarefas.',
        },
        {
          icon: <MonitorPlay className="h-6 w-6" />,
          name: 'Placa de Vídeo',
          value: 'NVIDIA RTX 3060 Ti',
          description: '8GB GDDR6, Ray Tracing',
          price: 2199.99,
          explanation:
            'Excelente performance para jogos em 1440p com Ray Tracing e DLSS.',
        },
        {
          icon: <MemoryStick className="h-6 w-6" />,
          name: 'Memória',
          value: '32GB DDR4 3600MHz',
          description: '2x16GB, CL18',
          price: 649.99,
          explanation: 'Capacidade ampla para jogos exigentes e multitarefas.',
        },
        {
          icon: <HardDrive className="h-6 w-6" />,
          name: 'Armazenamento',
          value: 'SSD NVMe 1TB',
          description: 'PCIe 4.0, 5000MB/s',
          price: 649.99,
          explanation: 'Armazenamento de alta velocidade com boa capacidade.',
        },
        {
          icon: <Zap className="h-6 w-6" />,
          name: 'Fonte',
          value: '750W 80+ Gold',
          description: 'Modular, certificada',
          price: 499.99,
          explanation:
            'Fonte de alta qualidade com eficiência Gold e totalmente modular.',
        },
      ],
    },
    {
      name: 'Premium',
      price: 5499.95,
      components: [
        {
          icon: <Cpu className="h-6 w-6" />,
          name: 'Processador',
          value: 'AMD Ryzen 7 5800X3D',
          description: '8 núcleos, 16 threads, 3.4GHz (4.5GHz Turbo)',
          price: 1799.99,
          explanation:
            'O melhor processador para jogos com tecnologia 3D V-Cache.',
        },
        {
          icon: <MonitorPlay className="h-6 w-6" />,
          name: 'Placa de Vídeo',
          value: 'NVIDIA RTX 3070',
          description: '8GB GDDR6, Ray Tracing',
          price: 2699.99,
          explanation:
            'Placa de vídeo potente para jogos em 1440p/4K com Ray Tracing e DLSS.',
        },
        {
          icon: <MemoryStick className="h-6 w-6" />,
          name: 'Memória',
          value: '32GB DDR4 3600MHz',
          description: '2x16GB, CL16',
          price: 699.99,
          explanation:
            'Memória de alta velocidade com baixa latência para máximo desempenho.',
        },
        {
          icon: <HardDrive className="h-6 w-6" />,
          name: 'Armazenamento',
          value: 'SSD NVMe 2TB',
          description: 'PCIe 4.0, 7000MB/s',
          price: 999.99,
          explanation:
            'Armazenamento ultra-rápido com ampla capacidade para biblioteca de jogos.',
        },
        {
          icon: <Zap className="h-6 w-6" />,
          name: 'Fonte',
          value: '850W 80+ Gold',
          description: 'Modular, certificada',
          price: 599.99,
          explanation:
            'Fonte de alta qualidade com potência extra para upgrades futuros.',
        },
      ],
    },
  ];

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
                    <div className="flex items-center space-x-2">
                      <Checkbox id="allow-variation" defaultChecked />
                      <label
                        htmlFor="allow-variation"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Permitir variação de orçamento para melhor
                        custo-benefício
                      </label>
                    </div>
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
              {loading ? (
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
                    {builds.map((build, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer transition-all duration-300 ${selectedBuild === index ? 'card-highlight' : 'hover:border-primary/30 hover:shadow-sm'}`}
                        onClick={() => setSelectedBuild(index)}
                      >
                        <CardHeader>
                          <CardTitle>{build.name}</CardTitle>
                          <CardDescription>
                            {index === 0
                              ? 'Melhor custo-benefício'
                              : index === 1
                                ? 'Recomendado'
                                : 'Alto desempenho'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold mb-4">
                            R$ {build.price.toLocaleString('pt-BR')}
                          </div>
                          <div className="space-y-2">
                            {build.components
                              .slice(0, 3)
                              .map((component, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center text-sm"
                                >
                                  <div className="mr-2 text-primary">
                                    {component.icon}
                                  </div>
                                  <div className="flex-1">
                                    {component.name}: {component.value}
                                  </div>
                                </div>
                              ))}
                            <div className="text-sm text-muted-foreground">
                              + 2 componentes
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant={
                              selectedBuild === index ? 'default' : 'outline'
                            }
                            className={`w-full ${selectedBuild === index ? 'bg-primary hover:bg-primary/90' : ''}`}
                          >
                            {selectedBuild === index
                              ? 'Selecionado'
                              : 'Selecionar'}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="shadow-sm">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <div>
                              <CardTitle className="text-2xl">
                                Seu PC Ideal - {builds[selectedBuild].name}
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
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="components">
                                Componentes
                              </TabsTrigger>
                              {/* <TabsTrigger value="performance">
                                Desempenho
                              </TabsTrigger> */}
                              <TabsTrigger value="prices">Preços</TabsTrigger>
                            </TabsList>
                            <TabsContent
                              value="components"
                              className="space-y-4 pt-4"
                            >
                              <div className="space-y-4">
                                {builds[selectedBuild].components.map(
                                  (component, index) => (
                                    <ComponentItem
                                      key={index}
                                      icon={component.icon}
                                      name={component.name}
                                      value={component.value}
                                      description={component.description}
                                      price={component.price}
                                      explanation={component.explanation}
                                    />
                                  ),
                                )}
                              </div>
                            </TabsContent>
                            {/* <TabsContent value="performance" className="pt-4">
                              <div className="space-y-6">
                                <div>
                                  <h3 className="font-medium mb-2">
                                    Desempenho em Jogos (1080p)
                                  </h3>
                                  <div className="space-y-3">
                                    <PerformanceBar
                                      game="Cyberpunk 2077"
                                      fps={
                                        selectedBuild === 0
                                          ? 65
                                          : selectedBuild === 1
                                            ? 85
                                            : 100
                                      }
                                    />
                                    <PerformanceBar
                                      game="Fortnite"
                                      fps={
                                        selectedBuild === 0
                                          ? 180
                                          : selectedBuild === 1
                                            ? 240
                                            : 300
                                      }
                                    />
                                    <PerformanceBar
                                      game="CS2"
                                      fps={
                                        selectedBuild === 0
                                          ? 250
                                          : selectedBuild === 1
                                            ? 300
                                            : 400
                                      }
                                    />
                                    <PerformanceBar
                                      game="Valorant"
                                      fps={
                                        selectedBuild === 0
                                          ? 280
                                          : selectedBuild === 1
                                            ? 360
                                            : 400
                                      }
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">
                                    Desempenho em Aplicativos
                                  </h3>
                                  <div className="space-y-3">
                                    <PerformanceBar
                                      app="Adobe Premiere Pro"
                                      score={
                                        selectedBuild === 0
                                          ? 82
                                          : selectedBuild === 1
                                            ? 92
                                            : 98
                                      }
                                    />
                                    <PerformanceBar
                                      app="Blender"
                                      score={
                                        selectedBuild === 0
                                          ? 78
                                          : selectedBuild === 1
                                            ? 88
                                            : 95
                                      }
                                    />
                                    <PerformanceBar
                                      app="Photoshop"
                                      score={
                                        selectedBuild === 0
                                          ? 85
                                          : selectedBuild === 1
                                            ? 95
                                            : 98
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </TabsContent> */}
                            <TabsContent value="prices" className="pt-4">
                              <div className="space-y-4">
                                <div className="rounded-lg border p-4">
                                  <h3 className="font-medium mb-2">
                                    Comparação de Preços
                                  </h3>
                                  <div className="space-y-3">
                                    <PriceItem
                                      store="KaBuM!"
                                      price={builds[selectedBuild].price}
                                      bestPrice={true}
                                    />
                                    {/* <PriceItem
                                      store="Terabyte"
                                      price={builds[selectedBuild].price * 1.02}
                                    />
                                    <PriceItem
                                      store="Pichau"
                                      price={builds[selectedBuild].price * 1.03}
                                    />
                                    <PriceItem
                                      store="Amazon"
                                      price={builds[selectedBuild].price * 1.05}
                                    /> */}
                                  </div>
                                </div>
                                <div className="rounded-lg border p-4 bg-muted/20">
                                  <h3 className="font-medium mb-2">Economia</h3>
                                  <p className="text-sm text-muted-foreground">
                                    Esta configuração está{' '}
                                    <span className="text-green-500 font-medium">
                                      {builds[selectedBuild].price < budget
                                        ? `R$ ${(budget - builds[selectedBuild].price).toLocaleString('pt-BR')} abaixo`
                                        : `R$ ${(builds[selectedBuild].price - budget).toLocaleString('pt-BR')} acima`}
                                    </span>{' '}
                                    do seu orçamento de R${' '}
                                    {budget.toLocaleString('pt-BR')}.
                                  </p>
                                </div>
                              </div>
                            </TabsContent>
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
                    <div>
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
                                {builds[selectedBuild].price.toLocaleString(
                                  'pt-BR',
                                )}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Diferença
                              </span>
                              <span
                                className={`font-medium ${builds[selectedBuild].price <= budget ? 'text-green-500' : 'text-amber-500'}`}
                              >
                                {builds[selectedBuild].price <= budget
                                  ? `- R$ ${(budget - builds[selectedBuild].price).toLocaleString('pt-BR')}`
                                  : `+ R$ ${(builds[selectedBuild].price - budget).toLocaleString('pt-BR')}`}
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
                              <div className="flex justify-between text-sm">
                                <span>Durabilidade</span>
                                <span className="font-medium text-green-500">
                                  {selectedBuild === 0
                                    ? '3-4 anos'
                                    : selectedBuild === 1
                                      ? '4-5 anos'
                                      : '5+ anos'}
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

function ComponentItem({ icon, name, value, description, price, explanation }) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border p-3 transition-all hover:border-primary hover:bg-primary/5">
      <div className="rounded-full p-2 bg-primary/10 text-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-medium">{name}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-[200px]">{explanation}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">R$ {price.toLocaleString('pt-BR')}</p>
        <a href="#" className="text-xs text-primary hover:underline">
          Ver detalhes
        </a>
      </div>
    </div>
  );
}

// function PerformanceBar({ game, fps, app, score }) {
//   const value = fps || score;
//   const label = game || app;
//   const metric = fps ? 'FPS' : 'Pontos';

//   let color = 'bg-red-500';
//   if (value > 60 && fps) color = 'bg-yellow-500';
//   if (value > 100 && fps) color = 'bg-green-500';
//   if (value > 80 && !fps) color = 'bg-green-500';
//   if (value > 60 && !fps) color = 'bg-yellow-500';

//   return (
//     <div className="space-y-1">
//       <div className="flex justify-between text-sm">
//         <span>{label}</span>
//         <span className="font-medium">
//           {value} {metric}
//         </span>
//       </div>
//       <div className="h-2 w-full rounded-full bg-muted">
//         <div
//           className={`h-2 rounded-full ${color}`}
//           style={{ width: `${fps ? Math.min(value / 4, 100) : value}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

function PriceItem({ store, price, bestPrice = false }) {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded ${bestPrice ? 'bg-primary/10' : ''}`}
    >
      <div className="flex items-center">
        {bestPrice && <Check className="h-4 w-4 text-primary mr-2" />}
        <span>{store}</span>
      </div>
      <div className="flex items-center">
        <span className={`font-medium ${bestPrice ? 'text-primary' : ''}`}>
          R$ {price.toLocaleString('pt-BR')}
        </span>
        {bestPrice && (
          <Badge
            variant="outline"
            className="ml-2 text-xs border-primary text-primary"
          >
            Melhor preço
          </Badge>
        )}
      </div>
    </div>
  );
}

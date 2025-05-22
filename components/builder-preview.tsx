'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, MonitorPlay, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BuilderPreview() {
  const [progress, setProgress] = useState(0);
  const [activeComponent, setActiveComponent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);

    const interval = setInterval(() => {
      setActiveComponent((prev) => (prev + 1) % 5);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const components = [
    {
      name: 'Processador',
      icon: <Cpu className="h-6 w-6" />,
      description: 'AMD Ryzen 5 5600X',
    },
    {
      name: 'Placa de Vídeo',
      icon: <MonitorPlay className="h-6 w-6" />,
      description: 'NVIDIA RTX 3060',
    },
    {
      name: 'Memória',
      icon: <MemoryStick className="h-6 w-6" />,
      description: '16GB DDR4 3200MHz',
    },
    {
      name: 'Armazenamento',
      icon: <HardDrive className="h-6 w-6" />,
      description: 'SSD NVMe 1TB',
    },
    {
      name: 'Fonte',
      icon: <Zap className="h-6 w-6" />,
      description: '650W 80+ Bronze',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border shadow-lg animate-float">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">PC Gamer - R$ 5.000</h3>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-4">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-4 rounded-lg border p-3 transition-all ${
                    activeComponent === index
                      ? 'border-primary bg-primary/5 pulse-glow'
                      : ''
                  }`}
                  animate={{
                    scale: activeComponent === index ? 1.02 : 1,
                    borderColor:
                      activeComponent === index
                        ? 'hsl(var(--primary))'
                        : 'hsl(var(--border))',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`rounded-full p-2 ${
                      activeComponent === index
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{component.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    ✓
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg bg-muted p-3">
              <div className="flex justify-between text-sm">
                <span>Compatibilidade</span>
                <span className="font-medium text-green-500">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Desempenho</span>
                <span className="font-medium text-green-500">Excelente</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Custo-benefício</span>
                <span className="font-medium text-green-500">Ótimo</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

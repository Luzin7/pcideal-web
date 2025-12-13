'use client';

import { motion } from 'framer-motion';
import { Cpu, DollarSign, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Defina seu Objetivo',
      description:
        'Escolha para que você usará seu PC: jogos, trabalho, edição de vídeo ou uso geral.',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Defina seu Orçamento',
      description:
        'Informe quanto você pode investir e deixe nosso algoritmo trabalhar para você.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Receba Recomendações',
      description:
        'Veja as melhores configurações compatíveis e escolha a que mais gostar.',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-transparent hover:border-primary/10 transition-all duration-300"
          >
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-inner ring-1 ring-inset ring-primary/10 group-hover:bg-primary/10 transition-colors">
                {step.icon}
              </div>
              <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg ring-4 ring-background">
                {index + 1}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border bg-card/50 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">100%</div>
            <p className="text-muted-foreground font-medium">
              Compatibilidade garantida
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">3k+</div>
            <p className="text-muted-foreground font-medium">
              Componentes catalogados
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">2 min</div>
            <p className="text-muted-foreground font-medium">
              Para gerar sua build
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

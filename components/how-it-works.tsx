'use client';

import { motion } from 'framer-motion';
import { Cpu, DollarSign, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Cpu />,
      title: 'Defina seu Objetivo',
      description:
        'Escolha para que você usará seu PC: jogos, trabalho, edição de vídeo ou uso geral.',
    },
    {
      icon: <DollarSign />,
      title: 'Defina seu Orçamento',
      description:
        'Informe quanto você pode investir e deixe nosso sistema trabalhar para você.',
    },
    {
      icon: <Sparkles />,
      title: 'Receba Recomendações',
      description:
        'Veja as melhores configurações compatíveis e escolha a que mais gostar.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover-card"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 relative">
              <div className="text-primary">{step.icon}</div>
              <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-center text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-lg border p-6 bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <p className="text-muted-foreground">
              Compatibilidade garantida. Se não funciona, a gente nem sugere.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold text-primary">1.000+</div>
            <p className="text-muted-foreground">
              Componentes catalogados — com novos entrando todo mês
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold text-primary">2 minutos</div>
            <p className="text-muted-foreground">
              É o tempo médio pra gerar sua build perfeita, sem complicação
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

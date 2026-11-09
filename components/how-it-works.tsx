import { Cpu, DollarSign, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Diga para que vai usar',
      description:
        'Jogos, trabalho, estudos ou edição de vídeo. Sem termo técnico.',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Diga quanto pode gastar',
      description: 'Você define o limite. A build é montada para caber nele.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Escolha entre 3 builds',
      description:
        'Econômica, balanceada e performance. Compare peça por peça e siga para a compra.',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-transparent hover:border-primary/10 transition-all duration-300"
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
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border bg-card/50 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              3
            </div>
            <p className="text-muted-foreground font-medium">
              opções para comparar
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              2 min
            </div>
            <p className="text-muted-foreground font-medium">
              para ver sua build
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Preço atual
            </div>
            <p className="text-muted-foreground font-medium">
              preço no dia da consulta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

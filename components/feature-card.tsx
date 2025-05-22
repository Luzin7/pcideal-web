import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover-card">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
}

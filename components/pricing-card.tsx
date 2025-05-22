import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col ${popular ? 'border-primary shadow-md' : ''}`}
    >
      {popular && (
        <div className="rounded-t-lg bg-primary py-1 text-center text-xs font-medium text-primary-foreground">
          MOST POPULAR
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? 'default' : 'outline'}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

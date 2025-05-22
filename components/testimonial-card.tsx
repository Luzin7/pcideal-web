import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col hover-card">
      <CardContent className="flex-1 pt-6">
        <Quote className="h-8 w-8 text-primary/40" />
        <p className="mt-4 text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">
              {author
                .split(' ')
                .map((name) => name[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

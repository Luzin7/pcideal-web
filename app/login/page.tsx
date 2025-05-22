import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login - PcIdeal',
  description: 'Entre na sua conta PcIdeal',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader className="space-y-1 text-center">
          <Link
            href="/"
            className="mx-auto mb-4 flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-gradient">PcIdeal</span>
          </Link>
          <CardTitle className="text-2xl font-bold">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription>Entre na sua conta para continuar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link
                href="/recuperar-senha"
                className="text-xs text-primary hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            Entrar
          </Button>
          <Separator className="my-4" />
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            Continuar com Github
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Não tem uma conta?{' '}
            <Link href="/cadastro" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

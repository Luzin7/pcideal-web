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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { localRoutePaths } from '@/constants/localRoutePaths';
import { Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cadastro - PcIdeal',
  description: 'Crie sua conta PcIdeal',
};

export default function RegisterPage() {
  const { landingPage, terms } = localRoutePaths;
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader className="space-y-1 text-center">
          <Link
            href={landingPage}
            className="mx-auto mb-4 flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-gradient">PcIdeal</span>
          </Link>
          <CardTitle className="text-2xl font-bold">Criar uma conta</CardTitle>
          <CardDescription>Comece a montar seu PC ideal hoje</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Nome</Label>
              <Input id="first-name" placeholder="João" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Sobrenome</Label>
              <Input id="last-name" placeholder="Silva" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar Senha</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              Eu concordo com os{' '}
              <Link href={terms} className="text-primary hover:underline">
                Termos de Serviço
              </Link>{' '}
              e{' '}
              <Link
                href="/privacidade"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </Link>
            </label>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            Criar Conta
          </Button>
          <Separator className="my-4" />
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            Continuar com Github
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Entrar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

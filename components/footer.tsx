import { localRoutePaths } from '@/constants/localRoutePaths';
import { Github, HardDrive, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t py-8 md:py-12 bg-background">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <HardDrive className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold">PcIdeal</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Monte seu PC perfeito com componentes compatíveis dentro do seu
            orçamento.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Luzin7"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lvictordutra/"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Produto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={localRoutePaths.builder}
                className="text-muted-foreground hover:text-primary"
              >
                Montar PC
              </Link>
            </li>
            <li>
              <Link
                href={localRoutePaths.howItWorks}
                className="text-muted-foreground hover:text-primary"
              >
                Como Funciona
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Recursos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={localRoutePaths.howItWorks}
                className="text-muted-foreground hover:text-primary"
              >
                Perguntas Frequentes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">PcIdeal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={localRoutePaths.landingPage}
                className="text-muted-foreground hover:text-primary"
              >
                Sobre
              </Link>
            </li>
            {/* <li>
              <Link
                href="/privacidade"
                className="text-muted-foreground hover:text-primary"
              >
                Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/termos"
                className="text-muted-foreground hover:text-primary"
              >
                Termos
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} PcIdeal.
          </p>
          {/* <div className="flex space-x-4 text-sm">
            <Link
              href="/privacidade"
              className="text-muted-foreground hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-muted-foreground hover:text-primary"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary"
            >
              Política de Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

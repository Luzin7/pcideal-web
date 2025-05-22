import { Facebook, Github, HardDrive, Instagram, Twitter } from 'lucide-react';
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
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Produto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/montar"
                className="text-muted-foreground hover:text-primary"
              >
                Montar PC
              </Link>
            </li>
            <li>
              <Link
                href="/componentes"
                className="text-muted-foreground hover:text-primary"
              >
                Componentes
              </Link>
            </li>
            <li>
              <Link
                href="/como-funciona"
                className="text-muted-foreground hover:text-primary"
              >
                Como Funciona
              </Link>
            </li>
            <li>
              <Link
                href="/doar"
                className="text-muted-foreground hover:text-primary"
              >
                Apoie o Projeto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Recursos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guias"
                className="text-muted-foreground hover:text-primary"
              >
                Guias
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary"
              >
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link
                href="/suporte"
                className="text-muted-foreground hover:text-primary"
              >
                Suporte
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/sobre"
                className="text-muted-foreground hover:text-primary"
              >
                Sobre
              </Link>
            </li>
            <li>
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
            </li>
            <li>
              <Link
                href="/contato"
                className="text-muted-foreground hover:text-primary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PcIdeal. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-sm">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

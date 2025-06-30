'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { localRoutePaths } from '@/constants/localRoutePaths';
import { HardDrive, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  const { builder, howItWorks } = localRoutePaths;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <HardDrive className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold">PcIdeal</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Início
            </Link>
            <Link
              href={builder}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/montar') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Montar PC
            </Link>
            {/* <Link
              href="/componentes"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/componentes') ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              Componentes
            </Link> */}
            <Link
              href={howItWorks}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/como-funciona')
                  ? 'text-primary'
                  : 'text-foreground/60'
              }`}
            >
              Como Funciona
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Cadastrar
              </Button>
            </Link>
          </div> */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href={localRoutePaths.landingPage}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground/60'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href={localRoutePaths.builder}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/montar') ? 'text-primary' : 'text-foreground/60'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Montar PC
              </Link>
              {/* <Link
                href="/componentes"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/componentes')
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Componentes
              </Link> */}
              <Link
                href={localRoutePaths.howItWorks}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/como-funciona')
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </Link>
            </nav>
            {/* <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Entrar
                </Button>
              </Link>
              <Link href="/cadastro" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Cadastrar
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}

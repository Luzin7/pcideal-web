import { localRoutePaths } from '@/constants/localRoutePaths';
import { HardDrive } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { landingPage } = localRoutePaths;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        {children}
      </div>
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <Link
            href={landingPage}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <HardDrive className="h-5 w-5 text-primary" />
            <span className="gradient-text">PcIdeal</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PcIdeal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

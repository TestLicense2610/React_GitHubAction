'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/appointments', label: 'Appointments' },
    { href: '/records', label: 'Records' },
    { href: '/pharmacy', label: 'Pharmacy' },
    { href: '/consultation', label: 'Consultation' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-bold text-lg">
              H
            </div>
            <span className="font-bold text-lg">HealthHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  pathname === route.href
                    ? 'bg-primary-foreground text-primary'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: 'default' | 'large';
}

export default function PageHeader({ title, subtitle, breadcrumbs, variant = 'default' }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden ${variant === 'large' ? 'py-24' : 'py-16'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-white/50" />
                  {item.href ? (
                    <Link href={item.href} className="text-white/70 hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className={`font-bold ${variant === 'large' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`} style={{ color: '#FFFFFF' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`mt-4 text-white/90 max-w-3xl ${variant === 'large' ? 'text-xl' : 'text-lg'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

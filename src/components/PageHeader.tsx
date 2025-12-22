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
    <section className={`bg-[var(--color-gray-light)] ${variant === 'large' ? 'py-24' : 'py-16'}`}>
      <div className="container">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-[var(--color-slate)]" />
                  {item.href ? (
                    <Link href={item.href} className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[var(--color-charcoal)]">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className={`text-[var(--color-navy)] ${variant === 'large' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`mt-4 text-[var(--color-slate)] max-w-3xl ${variant === 'large' ? 'text-xl' : 'text-lg'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

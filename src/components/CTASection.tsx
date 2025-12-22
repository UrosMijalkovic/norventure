import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'dark';
}

export default function CTASection({
  title = 'Discuss Your Requirements',
  description = 'Contact us to discuss how we can support your business with accounting, tax, and corporate services.',
  buttonText = 'Contact Us',
  buttonHref = '/contact',
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'dark') {
    return (
      <section className="bg-[var(--color-navy)] py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>
            <p className="text-gray-300 mb-8">{description}</p>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--color-gray-light)] py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">{title}</h2>
          <p className="text-[var(--color-slate)] mb-8">{description}</p>
          <Link href={buttonHref} className="btn btn-primary">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

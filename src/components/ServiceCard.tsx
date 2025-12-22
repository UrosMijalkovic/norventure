import Link from 'next/link';
import { ArrowRight, Calculator, Landmark, Users, Building, Globe, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  landmark: Landmark,
  users: Users,
  building: Building,
  globe: Globe,
  briefcase: Briefcase,
};

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Calculator;

  return (
    <Link href={href} className="block">
      <div className="card card-bordered h-full group">
        <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-[var(--color-teal)]" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-teal)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-slate)] text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center text-[var(--color-teal)] text-sm font-medium">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

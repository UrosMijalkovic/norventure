import { Factory, Monitor, Briefcase, ShoppingBag, Building2, Landmark, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Monitor,
  Briefcase,
  ShoppingBag,
  Building2,
  Landmark,
};

interface IndustryIconProps {
  name: string;
  className?: string;
}

export default function IndustryIcon({ name, className = 'w-8 h-8' }: IndustryIconProps) {
  const Icon = iconMap[name] || Factory;
  return <Icon className={className} />;
}

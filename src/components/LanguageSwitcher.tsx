'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'en'
            ? 'bg-[var(--color-teal)] text-white'
            : 'text-[var(--color-charcoal)] hover:text-[var(--color-teal)]'
        }`}
      >
        EN
      </button>
      <span className="text-[var(--color-slate)]">|</span>
      <button
        onClick={() => setLanguage('sr')}
        className={`px-2 py-1 rounded transition-colors ${
          language === 'sr'
            ? 'bg-[var(--color-teal)] text-white'
            : 'text-[var(--color-charcoal)] hover:text-[var(--color-teal)]'
        }`}
      >
        SR
      </button>
    </div>
  );
}

import { Language } from '../types';
import { Globe } from 'lucide-react';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg z-50">
      <Globe className="w-4 h-4 text-gray-600" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent text-gray-800 text-sm font-medium focus:outline-none cursor-pointer"
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
import { Shield, Zap } from 'lucide-react';
import { Translations } from '../types';

export default function Hero({ translations }: { translations: Translations }) {
  const handleSubscribe = () => {
    window.open('https://t.me/QuickVPN24_bot', '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {translations.hero.title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {translations.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>256-bit AES</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>150 Mbps</span>
            </div>
          </div>
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {translations.hero.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

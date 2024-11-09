import { Check } from 'lucide-react';
import { Translations } from '../types';

export default function Pricing({ translations }: { translations: Translations }) {
  const handleSubscribe = () => {
    window.open('https://t.me/QuickVPN24_bot', '_blank');
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{translations.pricing.title}</h2>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-gray-900">{translations.pricing.price}</span>
                <span className="text-gray-500 ml-2">{translations.pricing.period}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {translations.pricing.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleSubscribe}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              {translations.pricing.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Shield, Zap, Server, HeadphonesIcon } from 'lucide-react';
import { Translations } from '../types';

export default function Features({ translations }: { translations: Translations }) {
  const features = [
    { icon: Server, text: translations.features.servers },
    { icon: Shield, text: translations.features.security },
    { icon: Zap, text: translations.features.speed },
    { icon: HeadphonesIcon, text: translations.features.support },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { Monitor, Smartphone, Laptop } from 'lucide-react';
import { Translations } from '../types';

interface Props {
  translations: Translations;
}

export default function ProductShowcase({ translations }: Props) {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{translations.showcase.title}</h2>
          <p className="mt-4 text-xl text-gray-600">{translations.showcase.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/xYsKQpv/Capture-d-cran-2024-11-08-17-45-19.png"
                alt="VPN Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <Monitor className="w-5 h-5" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/BPggm3F/Capture-d-cran-2024-11-08-17-45-37.png"
                  alt="Mobile App"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white flex items-center gap-1">
                  <Monitor className="w-4 h-4" />
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.ibb.co/gjnYP8x/Capture-d-cran-2024-11-08-17-45-04.png"
                  alt="Login window"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white flex items-center gap-1">
                  <Monitor className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{translations.showcase.whyChoose}</h3>
            <ul className="space-y-4">
              {translations.showcase.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
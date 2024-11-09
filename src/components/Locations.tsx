import { MapPin } from 'lucide-react';
import { Translations } from '../types';

export default function Locations({ translations }: { translations: Translations }) {
  const locations = [
    { country: translations.locations.latvia, servers: 2 },
    { country: translations.locations.kazakhstan, servers: 2 },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{translations.locations.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{location.country}</h3>
                  <p className="text-gray-500">{location.servers} servers</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
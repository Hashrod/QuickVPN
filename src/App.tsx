import { useState } from 'react';
import { Language } from './types';
import { translations } from './translations';
import LanguageSelector from './components/LanguageSelector';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import Locations from './components/Locations';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

  return (
    <div className="min-h-screen">
      <LanguageSelector
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <Hero translations={translations[currentLang]} />
      <Features translations={translations[currentLang]} />
      <ProductShowcase translations={translations[currentLang]} />
      <Pricing translations={translations[currentLang]} />
      <Locations translations={translations[currentLang]} />
    </div>
  );
}

export default App;
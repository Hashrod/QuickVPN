export type Language = 'ru' | 'en' | 'fr';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    servers: string;
    security: string;
    speed: string;
    support: string;
  };
  pricing: {
    title: string;
    price: string;
    period: string;
    features: string[];
    button: string;
  };
  locations: {
    title: string;
    latvia: string;
    kazakhstan: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    desktopInterface: string;
    mobileApp: string;
    laptopClient: string;
    whyChoose: string;
    benefits: string[];
  };
}
export interface ProductCollection {
  id: string;
  title: string;
  badge?: string;
  tagline?: string;
  description: string;
  bgColor: string;
  textColor: string;
  buttonText: string;
  buttonVariant: 'primary' | 'dark' | 'light' | 'outline';
  image: string;
  imageAlt: string;
  category: 'coleccion' | 'personalizable' | 'posters' | 'stickers' | 'otros';
  accentColor: string;
  features?: string[];
  dimensions?: string;
  material?: string;
  priceNote?: string;
  isLegalNotice?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

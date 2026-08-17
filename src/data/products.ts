import { ProductCollection } from '../types';
import hozierImg from '../assets/img/hozier.png';
import personalizablesImg from '../assets/img/personalizables.png';
import postersImg from '../assets/img/posters.png';
import stickersImg from '../assets/img/stickers.png';
import ymuchomasImg from '../assets/img/ymuchomas.png';

export const topRowProducts: ProductCollection[] = [
  {
    id: 'hozier',
    title: 'COLECCIÓN HOZIER',
    badge: 'Fanmade Merch',
    tagline: 'Mística botánica, lírica y resonancia cósmica',
    description: 'Serie fanmade inspirada en la atmósfera lírica de Hozier. Arte impreso en láminas de alta calidad para coleccionar o regalar.',
    bgColor: '#C9EFD4',
    textColor: '#241B36',
    buttonText: 'Ver más',
    buttonVariant: 'dark',
    image: hozierImg,
    imageAlt: 'Ilustración fanmade de la Colección Hozier — Cosmicdesign',
    category: 'coleccion',
    accentColor: '#3B2465',
    features: [
      'Papel ilustración premium de alto gramaje',
      'Fanmade merch & diseño de autor',
      'Ideal para fans y coleccionistas'
    ],
    dimensions: 'A3 (29.7 × 42 cm) y A4 (21 × 29.7 cm)',
    material: 'Impresión digital de alta definición',
    priceNote: 'Consultas por MD'
  },
  {
    id: 'personalizables',
    title: 'DISEÑOS PERSONALIZADOS',
    badge: 'Emprendimientos & Fandom',
    tagline: 'Tu idea, fandom o marca en cada pieza',
    description: 'Diseños a medida para tu fandom favorito, regalos especiales o la identidad visual y papelería de tu emprendimiento.',
    bgColor: '#D9C9F0',
    textColor: '#241B36',
    buttonText: 'Consultar',
    buttonVariant: 'dark',
    image: personalizablesImg,
    imageAlt: 'Diseños personalizados para emprendimientos y fandom — Cosmicdesign',
    category: 'personalizable',
    accentColor: '#3B2465',
    features: [
      'Logos, stickers y papelería para emprendimientos',
      'Fanart y diseños personalizados a pedido',
      'Muestra digital previa antes de imprimir'
    ],
    dimensions: 'Formatos y medidas adaptables a tu necesidad',
    material: 'Láminas, vinilos y papelería personalizada',
    priceNote: 'Cotizaciones por MD'
  }
];

export const bottomRowProducts: ProductCollection[] = [
  {
    id: 'posters',
    title: 'POSTERS',
    tagline: 'Paredes con onda, música y fandom',
    description: 'Posters de alta definición con estética cósmica, fandoms, música, cine y arte visual para transformar tus espacios.',
    bgColor: '#FBEFE0',
    textColor: '#241B36',
    buttonText: 'Ver más',
    buttonVariant: 'dark',
    image: postersImg,
    imageAlt: 'Colección de Posters — Cosmicdesign',
    category: 'posters',
    accentColor: '#3B2465',
    features: [
      'Impresión ultra-nítida con colores vibrantes',
      'Acabado semi-mate antireflejo de alta calidad',
      'Embalaje protegido para envíos seguros'
    ],
    dimensions: 'A4, A3 y medidas especiales a pedido',
    material: 'Papel ilustración 250g/300g'
  },
  {
    id: 'stickers',
    title: 'STICKERS',
    tagline: 'Vinilos resistentes para tus termos y compus',
    description: 'Stickers troquelados de vinilo holográfico y mate. Resistentes al agua, roces y paso del tiempo, ideales para termos, notebooks, celulares y más.',
    bgColor: '#2FA8E8',
    textColor: '#FFFFFF', // High contrast AA compliance on bright blue
    buttonText: 'Ver más',
    buttonVariant: 'light',
    image: stickersImg,
    imageAlt: 'Stickers troquelados resistentes al agua — Cosmicdesign',
    category: 'stickers',
    accentColor: '#FFFFFF',
    features: [
      'Vinilo troquelado impermeable (waterproof)',
      'Acabados holográficos, mate y brillante',
      'Para termos, notebooks, cuadernos y fundas'
    ],
    dimensions: 'Packs y unidades sueltas (5 a 8 cm)',
    material: 'Vinilo laminado de alta duración'
  },
  {
    id: 'ymuchomas',
    title: 'PAPELERÍA & FANMADE',
    tagline: 'Libretas, prints, señaladores y mucho más',
    description: 'Artículos de papelería linda, señaladores, mini prints, photocards y accesorios fanmade pensados con amor al detalle.',
    bgColor: '#3B2465',
    textColor: '#FFFFFF', // High contrast AA compliance on dark purple
    buttonText: 'Explorar',
    buttonVariant: 'light',
    image: ymuchomasImg,
    imageAlt: 'Papelería, fanmade merch y accesorios — Cosmicdesign',
    category: 'otros',
    accentColor: '#BFE3FA',
    features: [
      'Papelería creativa y artículos de escritorio',
      'Fanmade merch exclusivo para cada drop',
      'Packs para regalar o autoregalarse'
    ],
    dimensions: 'Variados según cada producto',
    material: 'Materiales seleccionados y acabados prolijos'
  }
];

export const allProducts = [...topRowProducts, ...bottomRowProducts];

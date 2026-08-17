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
    badge: '¡Último lanzamiento!',
    tagline: 'Mística botánica y resonancia cósmica',
    description: 'Serie inspirada en la atmósfera lírica y orgánica, plasmada en láminas de edición limitada con acabados de alta definición.',
    bgColor: '#C9EFD4',
    textColor: '#241B36',
    buttonText: 'Ver más',
    buttonVariant: 'dark',
    image: hozierImg,
    imageAlt: 'Ilustración de la Colección Hozier — Cosmicdesign',
    category: 'coleccion',
    accentColor: '#3B2465',
    features: [
      'Papel Fine Art 300g libre de ácido',
      'Ilustración original de autor',
      'Firma y numeración de serie'
    ],
    dimensions: 'A3 (29.7 × 42 cm) y A4 (21 × 29.7 cm)',
    material: 'Impresión giclée sobre papel de algodón',
    priceNote: 'Edición limitada',
    isLegalNotice: true // Pendiente de confirmar con el cliente: verificar si el nombre "Hozier" puede usarse comercialmente
  },
  {
    id: 'personalizables',
    title: 'PERSONALIZABLES',
    tagline: 'Tu propia constelación en cada pieza',
    description: 'Lleva tu fecha especial, constelación natal o frase favorita convertida en una pieza de arte coleccionable única en el universo.',
    bgColor: '#D9C9F0',
    textColor: '#241B36',
    buttonText: 'Contacto',
    buttonVariant: 'dark',
    image: personalizablesImg,
    imageAlt: 'Arte y piezas personalizables — Cosmicdesign',
    category: 'personalizable',
    accentColor: '#3B2465',
    features: [
      'Personalización de mapa estelar o tipografía',
      'Revisión y aprobación previa antes de imprimir',
      'Opciones con marco de madera o lámina sola'
    ],
    dimensions: 'Formatos personalizados A4, A3 y 50×70 cm',
    material: 'Lámina mate o vinilo texturizado premium',
    priceNote: 'Cotización personalizada'
  }
];

export const bottomRowProducts: ProductCollection[] = [
  {
    id: 'posters',
    title: 'POSTERS',
    tagline: 'Paredes con gravedad propia',
    description: 'Posters de alto gramaje con estética cósmica, geométrica y surrealista para transformar cualquier espacio.',
    bgColor: '#FBEFE0',
    textColor: '#241B36',
    buttonText: 'Ver más',
    buttonVariant: 'dark',
    image: postersImg,
    imageAlt: 'Colección de Posters cósmicos — Cosmicdesign',
    category: 'posters',
    accentColor: '#3B2465',
    features: [
      'Impresión ultra-nítida resistente a rayos UV',
      'Acabado semi-mate antireflejo',
      'Tubos protectores rígidos para envío'
    ],
    dimensions: '30×40 cm, 40×50 cm y 50×70 cm',
    material: 'Papel couché mate 250g'
  },
  {
    id: 'stickers',
    title: 'STICKERS',
    tagline: 'Adhesivos que resisten el espacio exterior',
    description: 'Packs de stickers troquelados de vinilo holográfico y mate, resistentes al agua, intemperie y rayones.',
    bgColor: '#2FA8E8',
    textColor: '#FFFFFF', // High contrast AA compliance on bright blue
    buttonText: 'Ver más',
    buttonVariant: 'light',
    image: stickersImg,
    imageAlt: 'Stickers de vinilo coleccionables — Cosmicdesign',
    category: 'stickers',
    accentColor: '#FFFFFF',
    features: [
      'Vinilo troquelado impermeable (waterproof)',
      'Acabados holográficos y mate suave',
      'Ideal para laptops, termos, libretas y más'
    ],
    dimensions: 'Packs de 5 a 12 unidades (5 a 8 cm c/u)',
    material: 'Vinilo polimérico laminado'
  },
  {
    id: 'ymuchomas',
    title: 'Y MUCHO MÁS',
    tagline: 'Accesorios, pines y piezas de temporada',
    description: 'Descubre libretas, tote bags de lona pesada, pines esmaltados y lanzamientos cápsula que expanden la galaxia Cosmicdesign.',
    bgColor: '#3B2465',
    textColor: '#FFFFFF', // High contrast AA compliance on dark purple
    buttonText: 'Explorar',
    buttonVariant: 'light',
    image: ymuchomasImg,
    imageAlt: 'Accesorios y coleccionables cósmicos — Cosmicdesign',
    category: 'otros',
    accentColor: '#BFE3FA',
    features: [
      'Tote bags de algodón 100% ecológico',
      'Pines metálicos con acabado en oro cósmico',
      'Ediciones drop de temporada'
    ],
    dimensions: 'Variados según pieza',
    material: 'Materiales sostenibles y acabados premium'
  }
];

export const allProducts = [...topRowProducts, ...bottomRowProducts];

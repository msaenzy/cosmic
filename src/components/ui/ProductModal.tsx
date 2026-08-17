import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Check, Sparkles, Instagram, MapPin } from 'lucide-react';
import { ProductCollection } from '../../types';
import { Button } from './Button';
import { Badge } from './Badge';

interface ProductModalProps {
  product: ProductCollection | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [customText, setCustomText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // TODO: Actualizar con el link directo de Instagram cuando el usuario lo defina
  const instagramUrl = '#';

  if (!product) return null;

  const isDarkCard = product.bgColor === '#3B2465' || product.bgColor === '#2FA8E8';

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#241B36]/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 max-h-[90vh] flex flex-col"
            id={`modal-${product.id}`}
          >
            {/* Header with collection background */}
            <div
              className="relative p-6 sm:p-8 flex items-start justify-between overflow-hidden"
              style={{ backgroundColor: product.bgColor }}
            >
              {/* Subtle cosmic glow overlay */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/25 blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-2 max-w-[80%]">
                {product.badge && (
                  <Badge variant="sparkle" id={`modal-badge-${product.id}`}>
                    {product.badge}
                  </Badge>
                )}
                <h3
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display"
                  style={{ color: product.textColor }}
                >
                  {product.title}
                </h3>
                {product.tagline && (
                  <p
                    className="text-sm sm:text-base font-medium opacity-90"
                    style={{ color: product.textColor }}
                  >
                    {product.tagline}
                  </p>
                )}
              </div>

              <button
                id={`btn-close-modal-${product.id}`}
                onClick={onClose}
                aria-label="Cerrar modal"
                className={`p-2 rounded-full cursor-pointer transition-colors ${
                  isDarkCard
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-black/10 text-[#241B36] hover:bg-black/15'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#241B36]">
              {/* Product preview and details */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl flex items-center justify-center p-3 shrink-0 relative overflow-hidden shadow-inner"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-3 text-left w-full">
                  <p className="text-base text-slate-700 leading-relaxed">
                    {product.description}
                  </p>

                  {product.material && (
                    <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <span className="font-semibold text-[#241B36]">Material & Acabado:</span> {product.material}
                    </div>
                  )}

                  {product.dimensions && (
                    <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <span className="font-semibold text-[#241B36]">Dimensiones / Formato:</span> {product.dimensions}
                    </div>
                  )}
                </div>
              </div>

              {/* Customization section if personalizable */}
              {product.category === 'personalizable' && (
                <div className="space-y-3 bg-[#D9C9F0]/20 p-4 rounded-xl border border-[#D9C9F0]">
                  <label className="block text-sm font-semibold text-[#241B36] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#3B2465]" />
                    ¿Qué diseño, fandom o idea para tu emprendimiento querés cotizar?
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Ej. Stickers para mi marca de ropa / Poster fanmade / Frase personalizada"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B2465]"
                  />
                  <p className="text-xs text-slate-500">
                    Escribinos por MD con tu idea o boceto y coordinamos detalles, tamaños y cantidades.
                  </p>
                </div>
              )}

              {/* Key Features List */}
              {product.features && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                    Características destacadas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
                      >
                        <Check className="w-4 h-4 text-[#2FA8E8] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Action CTA */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2FA8E8]" />
                <span>San Miguel, Bs.As. • Argentina 🇦🇷</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  id={`btn-order-md-${product.id}`}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#241B36] hover:bg-[#3B2465] text-white text-sm font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D9C9F0] shrink-0" />
                  <span>Consultar por MD</span>
                </a>

                <Button
                  id={`btn-share-${product.id}`}
                  variant="outline"
                  size="md"
                  onClick={handleCopyShare}
                  className="shrink-0"
                  title="Copiar enlace"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

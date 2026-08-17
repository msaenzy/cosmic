import React, { useState } from 'react';
import { motion } from 'motion/react';
import { topRowProducts, bottomRowProducts } from '../../data/products';
import { ProductCollection } from '../../types';
import { ProductCard } from '../ui/ProductCard';
import { ProductModal } from '../ui/ProductModal';
import { Sparkles, Compass } from 'lucide-react';

export const StoreSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCollection | null>(null);

  // Top row animation variants: slide-up + fade with 2-element stagger
  const topRowContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const topRowItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Bottom row animation variants: 3-element stagger with scale (0.95 -> 1) + fade
  const bottomRowContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const bottomRowItemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="tienda"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(225deg, #BFE3FA 0%, #E6F3FB 40%, #D9C9F0 100%)',
      }}
    >
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-[#FFFFFF]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#BFE3FA]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-xs font-semibold text-[#241B36] shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#2FA8E8]" />
            <span>Colecciones & Tienda de Arte</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#241B36] tracking-tight">
            NUESTRO CATÁLOGO
          </h2>

          <p className="text-sm sm:text-base text-[#241B36]/80 font-sans leading-relaxed">
            Piezas de autor impresas con los más altos estándares de calidad gráfica.
          </p>
        </div>

        {/* Fila superior — 2 tarjetas grandes (en mobile: 1 columna, apiladas) */}
        <motion.div
          id="store-top-row"
          variants={topRowContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {topRowProducts.map((product, index) => (
            <motion.div key={product.id} variants={topRowItemVariants} className="h-full">
              <ProductCard
                product={product}
                isLarge={true}
                index={index}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fila inferior — 3 tarjetas iguales en tamaño, mismo alto (en mobile: 1 columna) */}
        <motion.div
          id="store-bottom-row"
          variants={bottomRowContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {bottomRowProducts.map((product, index) => (
            <motion.div key={product.id} variants={bottomRowItemVariants} className="h-full">
              <ProductCard
                product={product}
                isLarge={false}
                index={index}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

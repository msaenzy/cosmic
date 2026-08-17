import React from 'react';
import { motion } from 'motion/react';
import { ProductCollection } from '../../types';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProductCardProps {
  product: ProductCollection;
  isLarge?: boolean;
  onSelect: (product: ProductCollection) => void;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLarge = false,
  onSelect,
}) => {
  const isWhiteText = product.textColor === '#FFFFFF';

  return (
    <div
      id={`card-${product.id}`}
      style={{ backgroundColor: product.bgColor }}
      className={`group relative w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 card-hover-lift border border-black/5 shadow-sm hover:shadow-xl ${
        isLarge
          ? 'min-h-[420px] sm:min-h-[460px]'
          : 'min-h-[380px] sm:min-h-[410px]'
      }`}
    >
      {/* Subtle glowing orbital background flare */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
        style={{
          backgroundColor: isWhiteText ? 'rgba(255,255,255,0.3)' : 'rgba(36,27,54,0.1)',
        }}
      />

      {/* Top Header Content - Fixed baseline alignment */}
      <div className="relative z-10 w-full flex flex-col items-start min-h-[5.5rem] sm:min-h-[6rem]">
        {product.badge ? (
          <div className="mb-2">
            <Badge
              id={`badge-${product.id}`}
              variant="pill"
              className="bg-[#241B36] text-[#FFFFFF] shadow-sm text-xs font-semibold py-1 px-3.5"
            >
              {product.badge}
            </Badge>
          </div>
        ) : (
          <div className="mb-2 h-6" />
        )}

        <h2
          id={`title-${product.id}`}
          className={`font-display font-extrabold tracking-tight leading-tight line-clamp-2 ${
            isLarge
              ? 'text-2xl sm:text-3xl'
              : 'text-xl sm:text-2xl'
          }`}
          style={{ color: product.textColor }}
        >
          {product.title}
        </h2>
      </div>

      {/* Center Image Canvas Area */}
      <div className="relative z-10 my-auto flex-1 w-full flex items-center justify-center py-4">
        <div
          className={`relative w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 ${
            isLarge ? 'h-48 sm:h-56' : 'h-40 sm:h-48'
          }`}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-full max-w-full object-contain filter drop-shadow-md transition-all duration-300"
          />
        </div>
      </div>

      {/* Footer CTA Button - Uniform full width & aligned baseline */}
      <div className="relative z-10 mt-auto pt-4 border-t border-black/5 w-full flex items-center justify-between">
        <Button
          id={`btn-action-${product.id}`}
          variant={product.buttonVariant}
          size="md"
          onClick={() => onSelect(product)}
          className={`w-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
            isWhiteText
              ? 'bg-white text-[#241B36] hover:bg-white/90'
              : 'bg-[#241B36] text-white hover:bg-[#3B2465]'
          }`}
        >
          {product.buttonText}
        </Button>
      </div>
    </div>
  );
};

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
      className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 card-hover-lift border border-black/5 shadow-sm hover:shadow-xl ${
        isLarge
          ? 'min-h-[360px] sm:min-h-[420px] lg:min-h-[440px]'
          : 'min-h-[320px] sm:min-h-[360px]'
      }`}
    >
      {/* Subtle glowing orbital background flare */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
        style={{
          backgroundColor: isWhiteText ? 'rgba(255,255,255,0.3)' : 'rgba(36,27,54,0.1)',
        }}
      />

      {/* Top Header Content */}
      <div className="relative z-10 space-y-3">
        {product.badge && (
          <div className="mb-2">
            <Badge
              id={`badge-${product.id}`}
              variant="pill"
              className="bg-[#241B36] text-[#FFFFFF] shadow-sm text-xs font-semibold py-1 px-3.5"
            >
              {product.badge}
            </Badge>
          </div>
        )}

        <h2
          id={`title-${product.id}`}
          className={`font-display font-extrabold tracking-tight leading-tight ${
            isLarge
              ? 'text-2xl sm:text-3xl lg:text-4xl'
              : 'text-xl sm:text-2xl lg:text-3xl'
          }`}
          style={{ color: product.textColor }}
        >
          {product.title}
        </h2>
      </div>

      {/* Center/Bottom Image & Action Button */}
      <div className="relative z-10 mt-6 sm:mt-8 flex flex-col items-start justify-end flex-1">
        {/* Product Art PNG */}
        <div
          className={`relative w-full flex items-center justify-center my-auto transition-transform duration-500 ease-out group-hover:scale-105 ${
            isLarge ? 'h-44 sm:h-52' : 'h-36 sm:h-44'
          }`}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-full max-w-full object-contain filter drop-shadow-md transition-all duration-300"
          />
        </div>

        {/* Action Button */}
        <div className="mt-4 w-full flex items-center justify-between">
          <Button
            id={`btn-action-${product.id}`}
            variant={product.buttonVariant}
            size="md"
            onClick={() => onSelect(product)}
            className={`w-full sm:w-auto font-medium ${
              isWhiteText
                ? 'bg-white text-[#241B36] hover:bg-white/90 shadow-md'
                : 'bg-[#241B36] text-white hover:bg-[#3B2465]'
            }`}
          >
            {product.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

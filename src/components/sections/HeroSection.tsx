import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const headlineWords = ["UNIVERSO", "CREATIVO"];

  // Stagger container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FE 45%, #BFE3FA 100%)',
      }}
    >
      {/* Subtle lilac nebula halo in top-right / bottom-left corner */}
      <div
        className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none blur-3xl opacity-30"
        style={{ backgroundColor: '#D9C9F0' }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full pointer-events-none blur-3xl opacity-25"
        style={{ backgroundColor: '#D9C9F0' }}
      />

      {/* Decorative floating celestial particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 sm:left-24 w-2 h-2 rounded-full bg-[#3B2465]/20 animate-ping" />
        <div className="absolute top-1/3 right-12 sm:right-32 w-3 h-3 rounded-full bg-[#2FA8E8]/30" />
        <div className="absolute bottom-1/4 right-20 w-2 h-2 rounded-full bg-[#C9EFD4]/60" />
      </div>

      {/* Central Glassmorphism Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        id="hero-central-card"
        className="relative z-10 w-full max-w-2xl sm:max-w-3xl glass-panel rounded-3xl p-8 sm:p-14 md:p-16 text-center shadow-xl border border-white/80 transition-all"
      >
        {/* Sparkle decorative accent */}
        <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-[#D9C9F0]/40 text-[#3B2465] mb-5 sm:mb-6 shadow-sm">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Small Top Text (First to appear) */}
        <motion.p
          variants={itemFadeUp}
          id="hero-subtitle"
          className="text-xs sm:text-sm md:text-base font-semibold text-[#241B36]/80 tracking-widest uppercase font-sans mb-3 sm:mb-4"
        >
          Stickers • Papelería • Posters • Fanmade Merch
        </motion.p>

        {/* Big Headline H1 (Staggered by word) */}
        <motion.h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-[#241B36] tracking-tight leading-[1.08] mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Bio subtitle */}
        <motion.p
          variants={itemFadeUp}
          className="text-sm sm:text-base md:text-lg text-[#241B36]/90 max-w-xl mx-auto mb-8 sm:mb-10 font-medium"
        >
          Fandom, emprendimientos y diseños personalizados.
        </motion.p>

        {/* Link / Button: Comprar ahora (Delayed entrance) */}
        <motion.div
          variants={itemFadeUp}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="hero-cta-button"
              href="#tienda"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl bg-[#241B36] text-[#FFFFFF] font-semibold text-base sm:text-lg shadow-lg hover:bg-[#3B2465] hover:shadow-xl active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#2FA8E8]/40"
            >
              <span>Ver catálogo</span>
              <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 text-[#BFE3FA]" />
            </a>

            <a
              id="hero-cta-contact"
              href="#acerca-de"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl bg-white/80 hover:bg-white text-[#241B36] font-semibold text-base border border-slate-200/80 shadow-sm transition-all duration-200"
            >
              <span>Consultas por MD</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-2 flex items-center justify-center gap-1.5 font-medium">
            <span>San Miguel, Bs.As. • Argentina</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

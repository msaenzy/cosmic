import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Sparkles, MapPin, Mail, MessageCircle, HelpCircle, Info, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // TODO: reemplazar con URL real de Instagram de Cosmicdesign
  const instagramUrl = '#';

  const [activeModal, setActiveModal] = useState<'about' | 'faq' | 'contact' | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="acerca-de"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-blueprint overflow-hidden border-t border-slate-100 flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Central Brand Identity Card */}
      <motion.div
        id="brand-identity-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-2xl bg-[#FFFFFF] rounded-3xl p-8 sm:p-14 text-center shadow-lg border border-slate-100/90 relative z-10 flex flex-col items-center space-y-8"
      >
        {/* Glowing cosmic star emblem */}
        <div className="w-14 h-14 rounded-2xl bg-[#3B2465] text-[#BFE3FA] flex items-center justify-center shadow-md">
          <Sparkles className="w-7 h-7 animate-pulse" />
        </div>

        {/* Big Wordmark in Unbounded */}
        <div className="space-y-2">
          <h2
            id="brand-wordmark-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#241B36] tracking-tight leading-none"
          >
            COSMICDESIGN
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-md mx-auto">
            Diseños cósmicos, coleccionables y personalizables para que cada quien lleve su propio universo.
          </p>
        </div>

        {/* Horizontal Navigation Links (Stacked on mobile) */}
        <div
          id="brand-footer-links"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-[#241B36] w-full pt-2"
        >
          <button
            id="link-modal-acerca-de"
            type="button"
            onClick={() => setActiveModal('about')}
            className="hover:text-[#3B2465] hover:underline underline-offset-4 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-slate-50"
          >
            Acerca de
          </button>

          <span className="hidden sm:inline text-slate-300">•</span>

          <button
            id="link-modal-faq"
            type="button"
            onClick={() => setActiveModal('faq')}
            className="hover:text-[#3B2465] hover:underline underline-offset-4 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-slate-50"
          >
            FAQ
          </button>

          <span className="hidden sm:inline text-slate-300">•</span>

          <button
            id="link-modal-contacto"
            type="button"
            onClick={() => setActiveModal('contact')}
            className="hover:text-[#3B2465] hover:underline underline-offset-4 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-slate-50"
          >
            Contacto
          </button>
        </div>

        {/* Instagram Link & Icon */}
        <div className="pt-2">
          <a
            id="brand-instagram-button"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Cosmicdesign"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#D9C9F0]/30 hover:bg-[#D9C9F0]/60 text-[#3B2465] font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2FA8E8]"
          >
            <Instagram className="w-4 h-4" />
            <span>@cosmicdesign</span>
          </a>
        </div>
      </motion.div>

      {/* Dynamic Year Copyright Footer */}
      <footer className="mt-12 text-center text-xs text-slate-500 font-sans space-y-1">
        <p id="copyright-text">
          © {currentYear} Cosmicdesign. Todos los derechos reservados.
        </p>
        <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 inline" /> Ecuador • Arte Gráfico Coleccionable
        </p>
      </footer>

      {/* Interactive Modals for Acerca de, FAQ, Contacto */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-[#241B36]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 text-left space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold font-display text-[#241B36]">
                  {activeModal === 'about' && 'Acerca de Cosmicdesign'}
                  {activeModal === 'faq' && 'Preguntas Frecuentes (FAQ)'}
                  {activeModal === 'contact' && 'Contacto & Pedidos'}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#241B36]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {activeModal === 'about' && (
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-[#241B36]">Cosmicdesign</strong> es un estudio y tienda de diseño gráfico fundado en Ecuador. Creemos que los espacios personales y los objetos cotidianos deben reflejar la inmensidad del imaginario cósmico.
                  </p>
                  <p>
                    Cada colección nace de exploraciones tipográficas, geométricas e ilustraciones botánicas y estelares, plasmadas en posters de alta gama, stickers de vinilo ultra-resistente y piezas personalizadas por encargo.
                  </p>
                </div>
              )}

              {activeModal === 'faq' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 max-h-80 overflow-y-auto pr-1">
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Hacen envíos a todo Ecuador?</p>
                    <p>Sí, enviamos a todas las provincias mediante Servientrega o courier local en tubos rígidos y embalaje protector.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Cómo funciona el arte personalizado?</p>
                    <p>Nos indicas tu fecha, constelación o frase. Elaboramos la propuesta gráfica y te enviamos una muestra digital antes de imprimir.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Qué materiales utilizan?</p>
                    <p>Papeles Fine Art y couché mate de 250g a 300g, tintas UV de larga duración y vinilo troquelado impermeable.</p>
                  </div>
                </div>
              )}

              {activeModal === 'contact' && (
                <div className="space-y-4 text-sm text-slate-600">
                  <p>
                    ¿Tienes una idea especial o deseas realizar un pedido personalizado? Escríbenos directamente:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/593999999999?text=Hola%20Cosmicdesign!%20Deseo%20hacer%20una%20consulta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#C9EFD4]/40 hover:bg-[#C9EFD4] text-[#241B36] font-semibold transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-700" />
                      <span>WhatsApp (+593 Ecuador)</span>
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#D9C9F0]/40 hover:bg-[#D9C9F0] text-[#241B36] font-semibold transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#3B2465]" />
                      <span>Mensaje directo en Instagram</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => setActiveModal(null)}
                >
                  Cerrar
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

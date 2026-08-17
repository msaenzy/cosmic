import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MapPin, MessageCircle, X } from 'lucide-react';
import { Button } from '../ui/Button';
import logoImg from '../../assets/img/logo.png';

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
        {/* Brand Logo Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFFFFF] p-2.5 flex items-center justify-center shadow-md border border-slate-200/80 transition-transform duration-300 hover:scale-105">
          <img
            src={logoImg}
            alt="Isotipo y Logo Cosmicdesign"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Big Wordmark in Unbounded */}
        <div className="space-y-3">
          <h2
            id="brand-wordmark-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#241B36] tracking-tight leading-none"
          >
            COSMICDESIGN
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-lg mx-auto leading-relaxed">
            Stickers, papelería, posters, fanmade merch y más.<br />
            Fandom, emprendimientos y diseños personalizados.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-[#241B36]">
            <MapPin className="w-3.5 h-3.5 text-[#2FA8E8]" />
            <span>San Miguel, Bs.As. • Argentina</span>
          </div>
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
            Preguntas Frecuentes
          </button>

          <span className="hidden sm:inline text-slate-300">•</span>

          <button
            id="link-modal-contacto"
            type="button"
            onClick={() => setActiveModal('contact')}
            className="hover:text-[#3B2465] hover:underline underline-offset-4 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-slate-50"
          >
            Consultas por MD
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
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#D9C9F0]/30 hover:bg-[#D9C9F0]/60 text-[#3B2465] font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2FA8E8] shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>@cosmicdesign • Consultas por MD</span>
          </a>
        </div>
      </motion.div>

      {/* Dynamic Year Copyright Footer */}
      <footer className="mt-12 text-center text-xs text-slate-500 font-sans space-y-1">
        <p id="copyright-text">
          © {currentYear} Cosmicdesign. Todos los derechos reservados.
        </p>
        <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 font-medium">
          <MapPin className="w-3 h-3 inline text-[#2FA8E8]" /> San Miguel, Buenos Aires, Argentina
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
                  {activeModal === 'contact' && 'Consultas & Pedidos por MD'}
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
                    <strong className="text-[#241B36]">Cosmicdesign</strong> es un emprendimiento de diseño gráfico, papelería y fanmade merch ubicado en <strong className="text-[#241B36]">San Miguel, Buenos Aires, Argentina</strong>.
                  </p>
                  <p>
                    Creamos stickers troquelados, láminas/posters, artículos de papelería linda y merchandising temático para fans.
                  </p>
                  <p>
                    Además, realizamos <strong>diseños personalizados</strong> tanto para regalos y fechas especiales como para la imagen y stickers de tu propio <strong>emprendimiento</strong>.
                  </p>
                </div>
              )}

              {activeModal === 'faq' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 max-h-80 overflow-y-auto pr-1">
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Dónde están ubicados y hacen envíos?</p>
                    <p>Estamos en <strong>San Miguel, Buenos Aires</strong>. Realizamos entregas y envíos a coordinar.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Cómo realizo una consulta o encargo?</p>
                    <p>Todas las consultas, pedidos de catálogo y cotizaciones se realizan directamente por <strong>Mensaje Directo (MD) en Instagram</strong>.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Hacen diseños para emprendimientos?</p>
                    <p>¡Sí! Diseñamos stickers con tu logo, tarjetas de agradecimiento, packaging y papelería personalizada para impulsar tu marca.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <p className="font-semibold text-[#241B36]">¿Los stickers son resistentes al agua?</p>
                    <p>Sí, son de vinilo resistente, ideales para termos, notebooks, celulares y botellas.</p>
                  </div>
                </div>
              )}

              {activeModal === 'contact' && (
                <div className="space-y-4 text-sm text-slate-600">
                  <p>
                    ¿Querés hacer un pedido, consultar por stock o pedir un diseño personalizado? Escribinos por MD:
                  </p>
                  <div className="space-y-2">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#D9C9F0]/40 hover:bg-[#D9C9F0] text-[#241B36] font-semibold transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#3B2465]" />
                      <div>
                        <div className="font-bold">Instagram MD (@cosmicdesign)</div>
                        <div className="text-xs text-slate-600 font-normal">Respondemos todas tus dudas por mensaje directo</div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500">
                    📍 <strong>Ubicación:</strong> San Miguel, Buenos Aires, Argentina.
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

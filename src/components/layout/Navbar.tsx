import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';
import logoImg from '../../assets/img/logo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // TODO: reemplazar con URL real de Instagram de Cosmicdesign cuando el cliente provea el @ o link
  const instagramUrl = '#';

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'nav-inicio' },
    { label: 'Tienda', href: '#tienda', id: 'nav-tienda' },
    { label: 'Acerca de', href: '#acerca-de', id: 'nav-acerca-de' },
  ];

  return (
    <motion.header
      id="main-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-slate-100/80 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Logo / Wordmark in Unbounded with logo.png */}
        <a
          id="logo-brand"
          href="#inicio"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#2FA8E8] rounded-lg p-1"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFFFFF] p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-slate-100 shadow-sm">
            <img
              src={logoImg}
              alt="Logo Cosmicdesign"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-extrabold text-xl sm:text-2xl text-[#241B36] tracking-tight group-hover:text-[#3B2465] transition-colors">
            Cosmicdesign
          </span>
        </a>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-semibold text-[#241B36]">
            <a
              id="desktop-nav-inicio"
              href="#inicio"
              className="py-1.5 px-3 rounded-lg hover:text-[#3B2465] hover:bg-slate-50 transition-colors"
            >
              Inicio
            </a>
            <a
              id="desktop-nav-tienda"
              href="#tienda"
              className="py-1.5 px-3 rounded-lg hover:text-[#3B2465] hover:bg-slate-50 transition-colors"
            >
              Tienda
            </a>
            <a
              id="desktop-nav-acerca-de"
              href="#acerca-de"
              className="py-1.5 px-3 rounded-lg hover:text-[#3B2465] hover:bg-slate-50 transition-colors"
            >
              Acerca de
            </a>
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Far Right: Instagram Icon */}
          <a
            id="desktop-instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Instagram de Cosmicdesign"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#D9C9F0]/30 text-[#241B36] hover:text-[#3B2465] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2FA8E8]"
            title="Síguenos en Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-instagram-shortcut"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Instagram de Cosmicdesign"
            className="p-2 rounded-lg text-[#241B36] hover:bg-slate-100"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="p-2 rounded-xl text-[#241B36] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2FA8E8]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-navigation-drawer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#FFFFFF] border-b border-slate-200 px-6 py-5 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#241B36] hover:text-[#3B2465] py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">San Miguel, Bs.As.</span>
              <a
                id="mobile-drawer-instagram"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#241B36] bg-[#D9C9F0]/40 px-3 py-1.5 rounded-lg"
              >
                <Instagram className="w-4 h-4 text-[#3B2465]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

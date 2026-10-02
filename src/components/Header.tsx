import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

import { WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface HeaderProps {
  onOpenEnrollment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#08090c]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#topo" 
          className="font-display text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
        >
          MATHEUS SOUZA
        </a>

        {/* Zone 2: 4-5 nav links with single-line labels and subtle hover */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#vsl" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Apresentação
          </a>
          <a href="#resultados" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Resultados
          </a>
          <a href="#calculadora" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Calculadora
          </a>
          <a href="#metodo" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            O Método
          </a>
          <a href="#depoimentos" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Alunos
          </a>
          <a href="#perguntas" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_ENROLLMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 active:scale-95 transition-all shadow-sm shadow-amber-500/20 whitespace-nowrap shrink-0"
          >
            <span>Garantir Vaga</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0e14] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#vsl"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            Apresentação
          </a>
          <a
            href="#resultados"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            Resultados Antes & Depois
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            Calculadora de Lucro
          </a>
          <a
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            O Método Barba Milionária
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            Alunos Certificados
          </a>
          <a
            href="#perguntas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-1"
          >
            Perguntas Frequentes
          </a>
          <div className="pt-2">
            <a
              href={WHATSAPP_ENROLLMENT_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-black bg-amber-400 rounded-lg hover:bg-amber-300"
            >
              <span>Quero Garantir Minha Vaga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

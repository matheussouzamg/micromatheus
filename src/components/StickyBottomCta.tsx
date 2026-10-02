import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface StickyBottomCtaProps {
  onOpenEnrollment: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onOpenEnrollment }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-2 sm:p-3 bg-[#08090c]/95 border-t border-amber-500/30 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-3 px-2">
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
          <Flame className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong className="text-white">Últimas Vagas:</strong> Formação Micropigmentação Capilar & Barba Milionária
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-400 font-semibold font-mono">12x de R$ 10,03 ou R$ 97,00 à vista</span>
        </div>

        <div className="sm:hidden text-xs">
          <div className="font-bold text-white leading-tight">Vagas Promocionais</div>
          <div className="text-[11px] text-emerald-400 font-mono">12x de R$ 10,03 ou R$ 97,00</div>
        </div>

        <a
          href={WHATSAPP_ENROLLMENT_URL}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          <span>Garantir Minha Vaga</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
};

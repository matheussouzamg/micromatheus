import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="perguntas" className="py-16 px-4 sm:px-6 bg-[#08090c]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3" style={{ textWrap: 'balance' }}>
            Tire Suas Dúvidas Sobre a Formação
          </h2>
          <p className="text-sm text-slate-300">
            Respostas diretas para as principais perguntas de quem deseja iniciar no mercado mais lucrativo da estética masculina.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-white/10 bg-[#0f121a] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

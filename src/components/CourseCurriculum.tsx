import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/content';
import { ChevronDown, CheckCircle2, ShieldCheck, PenTool, Sparkles, Scissors, TrendingUp, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
  PenTool: <PenTool className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  Award: <Award className="w-5 h-5 text-amber-400" />,
};

export const CourseCurriculum: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="metodo" className="py-16 px-4 sm:px-6 bg-[#0a0c12]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-2">
            Grade Curricular Completa
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3" style={{ textWrap: 'balance' }}>
            O Passo a Passo do Método Barba Milionária & Micro Capilar
          </h2>
          <p className="text-sm text-slate-300">
            Do zero ao faturamento de alto ticket: tudo o que você precisa dominar para ser um profissional de referência.
          </p>
        </div>

        <div className="space-y-4">
          {COURSE_MODULES.map((module, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={module.number}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'border-amber-500/40 bg-[#121622] shadow-xl' 
                    : 'border-white/10 bg-[#0e1118] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {iconMap[module.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-0.5">
                        <span className="font-mono">MÓDULO {module.number}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-400 font-normal">{module.duration}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {module.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 hidden sm:block mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 rounded-lg bg-white/5 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:hidden">
                      {module.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {module.lessons.map((lesson, lessonIdx) => (
                        <div
                          key={lessonIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bonus Highlights */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-900/10 to-transparent border border-amber-500/30">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Bônus Exclusivos Inclusos na Matrícula</span>
          </div>
          <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-4">
            Você Também Recebe Gratuitamente:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="font-semibold text-white block mb-1">1. Lista Ouro de Fornecedores</span>
              Onde comprar tebori, agulhas e pigmentos pelo menor preço de atacado no Brasil.
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="font-semibold text-white block mb-1">2. Termo de Consentimento Jurídico</span>
              Modelos prontos de contrato e autorização de imagem para se proteger juridicamente.
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="font-semibold text-white block mb-1">3. Grupo VIP de Alunos & Suporte</span>
              Canal de tira-dúvidas direto com Matheus Souza para avaliar suas primeiras marcações.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

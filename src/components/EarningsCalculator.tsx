import React, { useState } from 'react';
import { Calculator, TrendingUp, Scissors, Sparkles, ArrowRight } from 'lucide-react';
import { WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface EarningsCalculatorProps {
  onSelectPlan: () => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onSelectPlan }) => {
  const [proceduresPerWeek, setProceduresPerWeek] = useState(3);
  const [ticketPrice, setTicketPrice] = useState(1200);

  const monthlyProcedures = proceduresPerWeek * 4;
  const monthlyRevenue = monthlyProcedures * ticketPrice;
  const hairCutPrice = 35; // standard average haircut in Brazil
  const equivalentHaircuts = Math.round(monthlyRevenue / hairCutPrice);

  return (
    <section id="calculadora" className="py-16 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulador de Faturamento Mensal</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3" style={{ textWrap: 'balance' }}>
            Quanto Você Pode Faturar com a Micropigmentação Capilar?
          </h2>
          <p className="text-sm text-slate-300">
            Compare o esforço de cortar dezenas de cabelos por dia com o poder de fechar apenas alguns procedimentos de alto ticket por semana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#10131a] border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Slider 1: Procedures per week */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">
                    Procedimentos por semana:
                  </label>
                  <span className="text-sm font-bold text-amber-400 font-mono tabular-nums px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    {proceduresPerWeek} {proceduresPerWeek === 1 ? 'cliente' : 'clientes'}/sem
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={proceduresPerWeek}
                  onChange={(e) => setProceduresPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 (Início tranquilo)</span>
                  <span>5 (Agenda cheia)</span>
                  <span>10 (Clínica/Escala)</span>
                </div>
              </div>

              {/* Slider 2: Ticket Price */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">
                    Valor médio cobrado por procedimento:
                  </label>
                  <span className="text-sm font-bold text-amber-400 font-mono tabular-nums px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    R$ {ticketPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="3000"
                  step="100"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>R$ 600 (Barba Simples)</span>
                  <span>R$ 1.500 (Linha Frontal)</span>
                  <span>R$ 3.000 (Topo Completo)</span>
                </div>
              </div>

              {/* Insight Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Custo de material irrisório</span>
                </div>
                <p>
                  O custo de agulha descartável, tebori e pigmento por atendimento gira em torno de <strong className="text-white">R$ 15 a R$ 30</strong>. Sua margem de lucro líquido ultrapassa <strong className="text-emerald-400">95%</strong>.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-400 flex items-center justify-between">
              <span>Total de sessões no mês:</span>
              <span className="font-mono font-bold text-slate-200 tabular-nums">
                {monthlyProcedures} atendimentos
              </span>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#161a26] via-[#121520] to-[#0d0f17] border border-amber-500/30 flex flex-col justify-between shadow-2xl gold-glow">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Projeção de Faturamento Mensal
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Lucro Alto</span>
                </span>
              </div>

              {/* Big Estimated Number */}
              <div className="py-6">
                <div className="text-xs text-slate-400 mb-1">Seu ganho mensal estimado:</div>
                <div className="font-display text-4xl sm:text-5xl font-black text-amber-400 font-mono tabular-nums tracking-tight">
                  R$ {monthlyRevenue.toLocaleString('pt-BR')}
                  <span className="text-base text-slate-400 font-normal"> /mês</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono tabular-nums">
                  Faturamento anual projetado: R$ {(monthlyRevenue * 12).toLocaleString('pt-BR')}
                </div>
              </div>

              {/* The Hard Comparison Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wide mb-1.5">
                  <Scissors className="w-4 h-4" />
                  <span>Comparativo com Cortes Comuns:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                  Para faturar esses mesmos <strong className="text-amber-400">R$ {monthlyRevenue.toLocaleString('pt-BR')}</strong>, você precisaria realizar <strong className="text-white underline decoration-amber-500 font-mono tabular-nums">{equivalentHaircuts} cortes tradicionais</strong> de R$ {hairCutPrice}!
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Enquanto com micropigmentação você atende apenas {monthlyProcedures} clientes e tem liberdade de tempo.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_ENROLLMENT_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 whitespace-nowrap active:scale-98"
            >
              <span>QUERO APRENDER A FATURAR ESSE VALOR</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

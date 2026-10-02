import React, { useState } from 'react';
import { Sparkles, Clock, DollarSign, Check, Sliders, Eye } from 'lucide-react';

export const InteractiveComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');

  // The two exact uploaded images by the user
  const beforeImage = '/src/assets/images/client_hairline_before_1790950337480.jpg';
  const afterImage = '/src/assets/images/client_hairline_after_1790950346849.jpg';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section id="resultados" className="py-16 px-4 sm:px-6 bg-[#0a0c12] border-t border-b border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-2">
            Resultado Real · Antes & Depois
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3" style={{ textWrap: 'balance' }}>
            Transformação Hiper-Realista: Reconstrução de Linha Frontal & Visagismo
          </h2>
          <p className="text-sm text-slate-300">
            Confira a evolução do procedimento realizado com tebori e micropigmentação capilar. Arraste o divisor no centro da imagem para comparar a marcação com o resultado cicatrizado.
          </p>
        </div>

        {/* View mode toggle (Slider vs Lado a Lado) */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              viewMode === 'slider'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Comparador Deslizante (Interativo)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('sideBySide')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              viewMode === 'sideBySide'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Ver Lado a Lado</span>
          </button>
        </div>

        {/* Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-7">
            {viewMode === 'slider' ? (
              <div
                className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[620px] w-full mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-black cursor-ew-resize select-none shadow-2xl gold-glow"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* After Image (Background) */}
                <img
                  src={afterImage}
                  alt="Depois: Micropigmentação capilar finalizada com degradê folicular natural"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
                />

                {/* Before Image (Clipped Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={beforeImage}
                    alt="Antes: Demarcação cirúrgica com lápis branco da linha frontal"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-top max-w-none select-none pointer-events-none brightness-95"
                    style={{ width: '100%', height: '100%' }}
                  />
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-300 shadow-md">
                    Antes (Marcação a Lápis)
                  </div>
                </div>

                {/* After Label */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-emerald-500 backdrop-blur-sm text-xs font-extrabold uppercase tracking-wider text-black shadow-md">
                  Depois (Micro Finalizada)
                </div>

                {/* Slider Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 z-20 shadow-[0_0_15px_rgba(245,158,11,1)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl font-black text-sm border-2 border-black">
                    ⇄
                  </div>
                </div>

                {/* Bottom helper cue */}
                <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
                  <span className="inline-block bg-black/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 border border-white/10 shadow-lg">
                    ⇄ Arraste para o lado para ver a evolução
                  </span>
                </div>
              </div>
            ) : (
              /* Side-by-Side View */
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-h-[620px]">
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-black relative shadow-xl">
                  <img
                    src={beforeImage}
                    alt="Antes: Demarcação a lápis branco"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/15">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Antes (Marcação)
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border-2 border-emerald-500/60 bg-black relative shadow-2xl">
                  <img
                    src={afterImage}
                    alt="Depois: Micropigmentação capilar concluída"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-500 px-3 py-1 rounded-lg text-black shadow-md">
                    <span className="text-xs font-black uppercase tracking-wider">
                      Depois (Finalizado)
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Procedure Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11141c] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Procedimento Real Exclusivo</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                Reconstrução de Linha Frontal & Harmonização Folicular
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Paciente apresentava recuo acentuado na linha frontal e entradas. Foi realizada a demarcação simétrica respeitando o visagismo facial masculino e o preenchimento fio a fio/ponto a ponto com tebori, criando um degradê suave e indetectável.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Tempo de Sessão</span>
                  </div>
                  <div className="text-sm font-bold text-slate-100 font-mono tabular-nums">
                    1h 30min
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Valor Cobrado</span>
                  </div>
                  <div className="text-sm font-bold text-amber-300 font-mono tabular-nums">
                    R$ 1.800,00
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  O Que Você Aprende no Curso:
                </p>
                {[
                  'Mapeamento milimétrico com régua de visagismo e lápis cirúrgico',
                  'Controle exato da profundidade na derme para nunca manchar nem expandir',
                  'Pigmento antiazulamento de alta fixação que clareia de forma natural',
                  'Como precificar e cobrar a partir de R$ 1.200 a R$ 2.500 por cliente',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="mt-0.5 rounded-full p-0.5 bg-amber-500/20 text-amber-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

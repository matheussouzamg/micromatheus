import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Lock, 
  CreditCard, 
  ArrowRight,
  MessageCircle,
  Clock
} from 'lucide-react';
import { INSTRUCTOR_INFO, WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface OfferSectionProps {
  onOpenEnrollment: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenEnrollment }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappCheckoutUrl = `https://wa.me/${INSTRUCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá Matheus Souza! Assisti sua apresentação e quero garantir minha vaga na Formação Micropigmentação Capilar & Barba por 12x de R$ 10,03 ou R$ 97,00 no PIX!'
  )}`;

  return (
    <section id="oferta" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-[#0a0c12] via-[#0f131f] to-[#08090c]">
      {/* Decorative backdrop light */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 bg-amber-500/10 blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Countdown Urgency Ribbon */}
        <div className="max-w-md mx-auto mb-8 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-300">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Condição especial por tempo limitado:</span>
          <span className="font-mono font-bold text-white tabular-nums bg-black/40 px-2 py-0.5 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>

        {/* Big Offer Card */}
        <div className="rounded-3xl border-2 border-amber-500/50 bg-[#121622] p-6 sm:p-10 shadow-2xl gold-glow-lg relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-md">
            Vagas Promocionais 2026
          </div>

          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Acesso Completo & Vitalício
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-1 mb-2">
              Formação Micropigmentação Capilar & Barba Milionária
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              O treinamento prático definitivo ministrado por Matheus Souza para você transformar sua renda e atender clientes de alto padrão.
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center mb-8">
            <div className="text-xs text-slate-400 line-through mb-1">
              De R$ 497,00 por apenas:
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              12x no cartão de
            </div>
            <div className="font-display text-4xl sm:text-6xl font-black text-white font-mono tabular-nums tracking-tight">
              R$ 10<span className="text-2xl sm:text-3xl text-amber-400">,03</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-200 mt-2">
              ou apenas <strong className="text-emerald-400 font-mono text-base sm:text-lg">R$ 97,00 à vista no PIX</strong>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              *Acesso completo e vitalício com certificado oficial incluso.
            </div>
          </div>

          {/* What is Included Checklist */}
          <div className="space-y-3 mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Tudo o que você terá acesso imediato:
            </p>

            {[
              'Acesso Completo e Vitalício a todos os 6 módulos em vídeo 4K',
              'Método Exclusivo Barba Milionária (alinhamento, preenchimento e visagismo)',
              'Domínio do Tebori Capilar: técnica ponto a ponto indetectável',
              'Colorimetria sem segredos (pigmentos antiazulamento para todos os tons)',
              'Certificado Oficial de Conclusão com reconhecimento nacional',
              'Bônus 1: Lista Secreta de Fornecedores de Insumos com desconto de fábrica',
              'Bônus 2: Modelos Prontos de Contratos e Termos Jurídicos de Consentimento',
              'Bônus 3: Suporte Direto e Acompanhamento no WhatsApp com Matheus Souza',
              'Acesso à Comunidade VIP de Alunos para networking e parcerias',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={WHATSAPP_ENROLLMENT_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full py-5 px-6 text-base sm:text-lg font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 active:scale-98 transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              <span>GARANTIR MINHA VAGA COM DESCONTO</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/50 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Dúvidas? Fale Diretamente no WhatsApp com Matheus</span>
            </a>
          </div>

          {/* Security & Guarantees Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-400 text-center">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-slate-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-slate-400" />
              <span>PIX ou Cartão em até 12x</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Liberação Imediata</span>
            </div>
          </div>
        </div>

        {/* 7-Day Guarantee Seal */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Garantia Incondicional de 7 Dias: Risco Zero
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Você tem 7 dias inteiros para acessar o treinamento, assistir às aulas, avaliar os materiais e sentir na prática a metodologia. Se por qualquer motivo achar que não é para você, basta solicitar o reembolso com 1 clique e devolveremos 100% do seu dinheiro. Sem perguntas e sem letras miúdas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

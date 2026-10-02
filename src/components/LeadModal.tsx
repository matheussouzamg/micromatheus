import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { INSTRUCTOR_INFO, WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('barbeiro');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, '').length < 10) {
      errs.whatsapp = 'Informe um número de WhatsApp válido com DDD.';
    }
    if (!email.trim() || !email.includes('@')) {
      errs.email = 'Informe um e-mail válido.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleOpenWhatsapp = () => {
    window.open(WHATSAPP_ENROLLMENT_URL, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#121622] border border-amber-500/30 p-6 sm:p-8 shadow-2xl gold-glow overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Matrícula Prioritária 2026</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Garanta sua Vaga com Desconto Especial
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Preencha os dados abaixo para receber o link de matrícula com bônus e acesso direto à equipe do Matheus Souza.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Ex: Lucas Silva"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  placeholder="(00) 90000-0000"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
                {errors.whatsapp && <p className="text-[11px] text-red-400 mt-1">{errors.whatsapp}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Sua Experiência Atual
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                >
                  <option value="barbeiro">Já sou barbeiro / cabeleireiro</option>
                  <option value="esteticista">Trabalho com estética / sobrancelhas</option>
                  <option value="iniciante">Estou começando do zero absoluto</option>
                  <option value="empresario">Dono de barbearia / clínica</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 active:scale-98 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>AVANÇAR PARA MATRÍCULA PROMOCIONAL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seus dados estão protegidos. Sem spam.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-400">
                Pré-Inscrição Confirmada!
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Parabéns, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto">
                Sua condição especial com todos os bônus está reservada. Clique no botão abaixo para abrir seu atendimento VIP direto no WhatsApp de Matheus Souza.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Aluno:</span>
                <span className="font-semibold text-white">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">WhatsApp:</span>
                <span className="font-mono text-white">{whatsapp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Condição:</span>
                <span className="text-emerald-400 font-semibold font-mono">12x de R$ 10,03 ou R$ 97,00 à vista no PIX</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleOpenWhatsapp}
                className="w-full py-4 px-6 text-sm font-bold text-black bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl hover:from-emerald-300 hover:to-emerald-400 active:scale-98 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-black" />
                <span>CHAMAR NO WHATSAPP E FINALIZAR AGORA</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { INSTRUCTOR_INFO } from '../data/content';
import { Instagram, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export const AboutMatheus: React.FC = () => {
  return (
    <section id="sobre" className="py-16 px-4 sm:px-6 bg-[#0a0c12]">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-[#0e1118] p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          {/* Photo */}
          <div className="w-full md:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
            <img
              src={INSTRUCTOR_INFO.heroImage}
              alt="Matheus Souza - Especialista em Micropigmentação Capilar e Barba"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 inset-x-4 text-center">
              <a
                href={INSTRUCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{INSTRUCTOR_INFO.handle}</span>
              </a>
            </div>
          </div>

          {/* Bio text */}
          <div className="w-full md:w-7/12 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Quem é seu Mentor
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Matheus Souza
            </h2>
            <p className="text-xs font-medium text-slate-400">
              Fundador do Método Barba Milionária & Especialista em Micropigmentação Capilar
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              <p>
                Assim como muitos barbeiros e profissionais de estética, Matheus vivia a rotina exaustiva de cortar cabelo de manhã à noite, acumulando cansaço físico e com o faturamento limitado pelo teto de horas trabalhadas.
              </p>
              <p>
                A grande virada aconteceu quando descobriu o mercado da micropigmentação capilar e da Barba Milionária: procedimentos rápidos, sem dor, realizados com tebori e agulhas de precisão, onde clientes pagam com satisfação entre <strong className="text-white">R$ 800 e R$ 2.500</strong> para recuperar a autoestima.
              </p>
              <p>
                Em apenas 6 meses aplicando o método, Matheus superou a marca de <strong className="text-amber-400">R$ 200.000,00 faturados</strong> e fundou seu centro de formação profissional, já tendo capacitado centenas de profissionais em todo o Brasil.
              </p>
            </div>

            {/* Quick credentials */}
            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200">+R$ 200k faturados</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200">+350 alunos formados</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200">Certificação Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200">Suporte personalizado</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={INSTRUCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Falar Diretamente com Matheus no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

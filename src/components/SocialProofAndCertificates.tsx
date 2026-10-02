import React from 'react';
import { TESTIMONIALS, INSTRUCTOR_INFO } from '../data/content';
import { Award, CheckCircle, Star, Quote } from 'lucide-react';

export const SocialProofAndCertificates: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-2">
            Comunidade & Certificação
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3" style={{ textWrap: 'balance' }}>
            Alunos que Saíram do Básico e Conquistaram a Independência
          </h2>
          <p className="text-sm text-slate-300">
            Veja a transformação de quem aplicou o método e hoje atende clientes com segurança e alta lucratividade.
          </p>
        </div>

        {/* Certificate Feature Card */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-[#121622] to-[#0c0e14] border border-amber-500/25 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-white/10 relative group">
            <img
              src={INSTRUCTOR_INFO.certificateImage}
              alt="Alunos recebendo certificado oficial de conclusão com Matheus Souza"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
              <span className="font-semibold text-amber-400">Certificado Oficial Barba Milionária</span>
              <span className="bg-black/60 px-2 py-0.5 rounded text-[11px]">Reconhecido Nacionalmente</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Award className="w-4 h-4" />
              <span>Certificação Profissional</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Seu Certificado Reconhecido para Abrir Portas em Todo o Brasil
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ao concluir a formação, você recebe o Certificado Oficial de Conclusão chancelado por Matheus Souza, comprovando suas habilidades em técnicas de visagismo capilar, camuflagem com tebori e Barba Milionária.
            </p>
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Carga horária e ementa detalhada para atestar sua capacitação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Selo de qualidade da metodologia Matheus Souza</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Autorização para emitir garantia técnica aos seus clientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono tabular-nums">
                    {item.result}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-amber-500/20 absolute -top-2 -left-1" />
                  <h4 className="font-semibold text-white text-sm pl-5 mb-2 leading-snug">
                    "{item.headline}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-5">
                    {item.quote}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{item.name}</span>
                    {item.verified && (
                      <span className="text-[10px] text-amber-400 font-normal">· Aluno Verificado</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.role} · {item.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

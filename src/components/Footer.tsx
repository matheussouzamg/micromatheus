import React from 'react';
import { INSTRUCTOR_INFO } from '../data/content';
import { Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 px-4 sm:px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <a href="#topo" className="font-display text-lg font-bold text-white hover:text-amber-400 transition-colors">
              MATHEUS SOUZA
            </a>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Academia de Micropigmentação Capilar & Barba Milionária. Capacitando profissionais para dominarem a estética masculina de alto padrão.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a
              href={INSTRUCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>{INSTRUCTOR_INFO.handle}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a href="#vsl" className="hover:text-white transition-colors">
              Apresentação
            </a>
            <span aria-hidden="true">·</span>
            <a href="#resultados" className="hover:text-white transition-colors">
              Antes & Depois
            </a>
            <span aria-hidden="true">·</span>
            <a href="#metodo" className="hover:text-white transition-colors">
              Método
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={INSTRUCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              WhatsApp Oficial
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Todos os direitos reservados © {new Date().getFullYear()} Matheus Souza Treinamentos</span>
          </div>

          <div className="text-[11px] text-slate-400 max-w-xl">
            Aviso Legal: Os resultados podem variar de acordo com o empenho e dedicação de cada aluno. Nenhuma promessa de ganho fixo ou milagroso é garantida sem aplicação prática.
          </div>
        </div>
      </div>
    </footer>
  );
};

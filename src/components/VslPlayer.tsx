import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  ShieldCheck, 
  Users, 
  CheckCircle, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { INSTRUCTOR_INFO, VSL_TRANSCRIPT_SEGMENTS, WHATSAPP_ENROLLMENT_URL } from '../data/content';

interface VslPlayerProps {
  onUnlockOffer: () => void;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({ onUnlockOffer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [offerUnlocked, setOfferUnlocked] = useState(true);
  const [liveViewers, setLiveViewers] = useState(1487);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const totalDuration = 47; // Exact 47s duration matching Matheus Souza's new video

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const timerRef = useRef<number | null>(null);

  // Initialize speech synthesis support
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Viewer count gentle fluctuation for social proof
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setLiveViewers((prev) => prev + Math.floor(Math.random() * 7) - 3);
    }, 4500);
    return () => clearInterval(viewerInterval);
  }, []);

  // Timer playback loop
  useEffect(() => {
    if (isPlaying) {
      if (videoElementRef.current && customVideoUrl) {
        videoElementRef.current.play().catch(() => {});
      }
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1 * playbackRate;
          if (next >= totalDuration) {
            setIsPlaying(false);
            if (videoElementRef.current) videoElementRef.current.pause();
            return totalDuration;
          }
          return next;
        });
      }, 1000);
    } else {
      if (videoElementRef.current) videoElementRef.current.pause();
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackRate, customVideoUrl, totalDuration]);

  // Sync transcript subtitle with time
  useEffect(() => {
    const segment = VSL_TRANSCRIPT_SEGMENTS.slice().reverse().find(s => currentTime >= s.time);
    if (segment) {
      const idx = VSL_TRANSCRIPT_SEGMENTS.indexOf(segment);
      setActiveSegmentIndex(idx);
    }
  }, [currentTime]);

  // Voice narration using Brazilian Portuguese speech synthesis when play is triggered
  const speakSegment = (text: string) => {
    if (!synthRef.current || isMuted) return;
    try {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = playbackRate;
      utterance.pitch = 0.95;
      const voices = synthRef.current.getVoices();
      const brVoice = voices.find(v => v.lang === 'pt-BR' || v.lang.startsWith('pt'));
      if (brVoice) utterance.voice = brVoice;
      synthRef.current.speak(utterance);
    } catch {
      // Graceful fallback
    }
  };

  const handlePlayToggle = () => {
    const willPlay = !isPlaying;
    setIsPlaying(willPlay);
    if (willPlay && !isMuted) {
      const currentSegment = VSL_TRANSCRIPT_SEGMENTS[activeSegmentIndex];
      if (currentSegment) {
        speakSegment(currentSegment.text);
      }
    } else if (!willPlay && synthRef.current) {
      synthRef.current.cancel();
    }
  };

  const handleMuteToggle = () => {
    const willMute = !isMuted;
    setIsMuted(willMute);
    if (willMute && synthRef.current) {
      synthRef.current.cancel();
    } else if (!willMute && isPlaying) {
      const currentSegment = VSL_TRANSCRIPT_SEGMENTS[activeSegmentIndex];
      if (currentSegment) speakSegment(currentSegment.text);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (newTime >= 120) setOfferUnlocked(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, (currentTime / totalDuration) * 100);

  return (
    <section id="vsl" className="relative pt-8 pb-16 px-4 sm:px-6">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/10 via-amber-900/5 to-transparent blur-3xl opacity-60" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Kicker Tag */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Apresentação Exclusiva com Matheus Souza
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-center font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4" style={{ textWrap: 'balance' }}>
          Como Parei de Depender de Cortes Tradicionais e Faturei Mais de{' '}
          <span className="text-gold-gradient underline decoration-amber-500/40 decoration-wavy">
            R$ 200.000 em 6 Meses
          </span>{' '}
          com Micropigmentação Capilar & Barba
        </h1>

        {/* Value Subheadline */}
        <p className="text-center text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Sem precisar de cirurgias ou equipamentos caríssimos. Apenas com uma caneta tebori e técnicas de precisão para resolver falhas, calvície e barba rala cobrando de R$ 800 a R$ 2.500 por sessão.
        </p>

        {/* Live Social Proof Pill Bar */}
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mb-6">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono tabular-nums font-semibold">{liveViewers.toLocaleString('pt-BR')}</span>
            <span>assistindo agora</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1 text-slate-300">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Turma Especial 2026</span>
          </div>
          <span aria-hidden="true">·</span>
          <span>Som Liberado</span>
        </div>

        {/* The VSL Video Player Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1017] shadow-2xl gold-glow">
          {/* Top Player HUD */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Masterclass Oficial · Matheus Souza
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400 tabular-nums">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </div>
          </div>

          {/* Video Visual Stage */}
          <div 
            className="relative aspect-[9/14] sm:aspect-video w-full bg-black flex items-center justify-center overflow-hidden group cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files?.[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setCustomVideoUrl(url);
                setIsPlaying(true);
              }
            }}
          >
            {customVideoUrl ? (
              <video
                ref={videoElementRef}
                src={customVideoUrl}
                playsInline
                autoPlay
                className="w-full h-full object-contain bg-black"
                onEnded={() => setIsPlaying(false)}
                onClick={handlePlayToggle}
              />
            ) : (
              <>
                {/* Clean dark backdrop */}
                <div 
                  className="absolute inset-0 bg-[#07080b] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src={INSTRUCTOR_INFO.heroImage}
                    alt=""
                    className="w-full h-full object-cover filter blur-3xl opacity-25 scale-125"
                  />
                </div>

                {/* Main Video Frame of Matheus Souza at the desk */}
                <img
                  src={INSTRUCTOR_INFO.heroImage}
                  alt="Vídeo de Matheus Souza no estúdio demonstrando a micropigmentação capilar e tebori"
                  referrerPolicy="no-referrer"
                  className={`relative z-10 h-full max-w-full object-contain transition-transform duration-500 ${isPlaying ? 'scale-[1.01]' : 'scale-100'}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  onClick={handlePlayToggle}
                />

                {/* Dark Vignette Overlay for focus & subtitle readability */}
                <div 
                  className="absolute inset-0 z-15 bg-gradient-to-t from-black/95 via-black/20 to-black/30 pointer-events-none" 
                  aria-hidden="true" 
                />
              </>
            )}

            {/* Play Button Big Center Overlay when paused */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayToggle}
                className="group/btn absolute z-30 flex flex-col items-center justify-center gap-3 transition-transform duration-200 hover:scale-105 focus:outline-none"
                aria-label="Assistir ao vídeo de Matheus Souza"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl shadow-amber-500/60 group-hover/btn:bg-amber-400 transition-colors">
                  <Play className="w-10 h-10 sm:w-11 sm:h-11 fill-black translate-x-1" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-black/90 border border-white/20 backdrop-blur-sm text-xs font-semibold text-amber-300 shadow-xl">
                  Assistir Vídeo com Áudio (00:47)
                </div>
              </button>
            )}

            {/* Audio Waves Indicator when playing */}
            {isPlaying && (
              <div className="absolute top-12 left-4 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3"></span>
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-1.5"></span>
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2.5"></span>
                </div>
                <span className="text-[11px] font-medium text-slate-200">
                  {isMuted ? 'Áudio Desativado' : 'Matheus Souza ao vivo'}
                </span>
              </div>
            )}

            {/* Live Subtitle Captions synchronized with speech */}
            <div className="absolute bottom-14 inset-x-4 sm:inset-x-8 z-20 pointer-events-none text-center">
              <div className="inline-block max-w-2xl bg-black/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-500/30 shadow-2xl">
                <p className="text-[11px] font-bold text-amber-400 mb-0.5 tracking-wider uppercase">
                  {VSL_TRANSCRIPT_SEGMENTS[activeSegmentIndex]?.speaker || "Matheus Souza"}
                </p>
                <p className="text-xs sm:text-base font-semibold text-white leading-snug">
                  "{VSL_TRANSCRIPT_SEGMENTS[activeSegmentIndex]?.text}"
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Player Controller Bar */}
          <div className="bg-[#12151d] px-4 py-3 border-t border-white/10">
            {/* Scrub Progress Bar */}
            <div className="relative mb-2">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max={totalDuration}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Controle de tempo do vídeo"
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  className="p-1.5 hover:text-white rounded hover:bg-white/10 transition-colors"
                  aria-label={isPlaying ? "Pausar" : "Tocar"}
                >
                  {isPlaying ? <Pause className="w-5 h-5 text-amber-400" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="p-1.5 hover:text-white rounded hover:bg-white/10 transition-colors"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-slate-300" />}
                </button>

                <div className="text-xs font-mono tabular-nums text-slate-400">
                  <span>{formatTime(currentTime)}</span>
                  <span className="mx-1">/</span>
                  <span>{formatTime(totalDuration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Local video replacement helper */}
                <label 
                  className="text-[10px] sm:text-xs text-slate-400 hover:text-amber-400 cursor-pointer px-2 py-1 rounded bg-white/5 border border-white/10"
                  title="Carregar arquivo .mp4 personalizado"
                >
                  <span>{customVideoUrl ? 'Vídeo Carregado' : 'Carregar .mp4'}</span>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setCustomVideoUrl(url);
                        setIsPlaying(true);
                      }
                    }}
                  />
                </label>

                {/* Speed selector */}
                <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 text-[11px] font-mono">
                  {[1, 1.25, 1.5].map((speed) => (
                    <button
                      key={speed}
                      type="button"
                      onClick={() => setPlaybackRate(speed)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        playbackRate === speed ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentTime(0)}
                  className="p-1.5 hover:text-white rounded hover:bg-white/10 transition-colors"
                  title="Reiniciar vídeo"
                  aria-label="Reiniciar vídeo"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const elem = document.getElementById('vsl');
                    if (elem?.requestFullscreen) elem.requestFullscreen();
                  }}
                  className="p-1.5 hover:text-white rounded hover:bg-white/10 transition-colors"
                  title="Tela cheia"
                  aria-label="Tela cheia"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action Block under VSL with updated price */}
        <div className="mt-8 text-center space-y-4">
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#161a24] to-[#0f121a] border border-amber-500/30 shadow-xl gold-glow">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <span>Turma Barba Milionária & Micro Capilar</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-emerald-400">12x de R$ 10,03 ou R$ 97,00 à vista no PIX</span>
            </div>

            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-4">
              Domine as técnicas de tebori, visagismo frontal, camuflagem de calvície e barba perfeita com Matheus Souza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_ENROLLMENT_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 active:scale-98 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>QUERO ENTRAR POR APENAS 12x DE R$ 10,03</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={INSTRUCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-4 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Instagram: {INSTRUCTOR_INFO.handle}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>7 Dias de Garantia Incondicional</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Certificado Oficial Incluso</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Suporte Direto no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

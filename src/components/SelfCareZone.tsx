import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Activity, Wind, Volume2, VolumeX, RotateCcw, ArrowRight, Heart } from 'lucide-react';
import { STRESS_QUIZ } from '../data/counselingData';

interface SelfCareZoneProps {
  onOpenBooking: () => void;
}

export const SelfCareZone: React.FC<SelfCareZoneProps> = ({ onOpenBooking }) => {
  const [activeTool, setActiveTool] = useState<'quiz' | 'breathe' | 'sound'>('quiz');

  // Quiz state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Breathing state
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathCount, setBreathCount] = useState(4);
  const breathTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sound generator state (Web Audio API)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [soundType, setSoundType] = useState<'rain' | 'breeze' | 'chime'>('rain');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundNodesRef = useRef<any[]>([]);

  // Calculate quiz score
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  const handleSelectOption = (qId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setQuizFinished(false);
  };

  // Breathing Guide Logic (4s Inhale, 7s Hold, 8s Exhale)
  useEffect(() => {
    if (!isBreathing) {
      if (breathTimerRef.current) clearInterval(breathTimerRef.current);
      setBreathCount(4);
      setBreathPhase('inhale');
      return;
    }

    let currentPhase: 'inhale' | 'hold' | 'exhale' = 'inhale';
    let count = 4;
    setBreathPhase('inhale');
    setBreathCount(4);

    const interval = setInterval(() => {
      count -= 1;
      if (count <= 0) {
        if (currentPhase === 'inhale') {
          currentPhase = 'hold';
          count = 7;
        } else if (currentPhase === 'hold') {
          currentPhase = 'exhale';
          count = 8;
        } else {
          currentPhase = 'inhale';
          count = 4;
        }
      }
      setBreathPhase(currentPhase);
      setBreathCount(count);
    }, 1000);

    breathTimerRef.current = interval;

    return () => clearInterval(interval);
  }, [isBreathing]);

  // Web Audio Synth for Calming Sound Generator
  const stopAudio = () => {
    soundNodesRef.current.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {
        // ignore
      }
    });
    soundNodesRef.current = [];
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlayingAudio(false);
  };

  const startAudio = (type: 'rain' | 'breeze' | 'chime') => {
    stopAudio();
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      if (type === 'rain' || type === 'breeze') {
        // Pink / White noise generator for soothing rain or wind breeze
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = buffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = type === 'rain' ? 850 : 380;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.15;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        soundNodesRef.current = [whiteNoise, filter, gainNode];
      } else {
        // Peaceful Chime (Harmonic sine waves)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz healing frequency
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(540, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();
        soundNodesRef.current = [osc1, osc2, gain];
      }

      setIsPlayingAudio(true);
      setSoundType(type);
    } catch (err) {
      console.warn('Web Audio not allowed or failed:', err);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <section id="goc-thu-gian" className="py-16 sm:py-24 bg-[#f8faf8] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Góc Thư Giãn & Tự Chăm Sóc
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Lắng Nghe Cơ Thể & Cảm Xúc Của Bạn
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Dành 5 phút giải tỏa căng thẳng với các bài kiểm tra nhanh, bài tập thở điều hòa nhịp tim hoặc âm thanh thiên nhiên êm dịu.
          </p>

          {/* Segmented Switcher */}
          <div className="inline-flex flex-col xs:flex-row p-1.5 bg-slate-200/80 rounded-2xl mt-6 border border-slate-200 w-full xs:w-auto max-w-xl mx-auto">
            <button
              onClick={() => setActiveTool('quiz')}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTool === 'quiz'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Kiểm tra stress</span>
            </button>
            <button
              onClick={() => setActiveTool('breathe')}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTool === 'breathe'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wind className="w-4 h-4 text-cyan-600" />
              <span>Thở 4-7-8</span>
            </button>
            <button
              onClick={() => setActiveTool('sound')}
              className={`px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTool === 'sound'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span>Âm thanh êm dịu</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: Stress Check Quiz */}
        {activeTool === 'quiz' && (
          <div className="bg-white rounded-3xl p-4 xs:p-6 sm:p-10 shadow-xs border border-slate-200 animate-in fade-in duration-300">
            {!quizFinished ? (
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-[#1e486b]">
                    Trắc Nghiệm 5 Câu Đánh Giá Căng Thẳng Học Đường
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Chọn câu trả lời gần đúng nhất với tình trạng của bạn trong 2 tuần gần đây.
                  </p>
                </div>

                <div className="space-y-6">
                  {STRESS_QUIZ.map((q, idx) => (
                    <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 border border-slate-100">
                      <p className="font-bold text-slate-800 text-sm sm:text-base mb-3">
                        {idx + 1}. {q.question}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = answers[q.id] === opt.score;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectOption(q.id, opt.score)}
                              className={`p-3 text-left rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-500 shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500">
                    Đã trả lời {Object.keys(answers).length}/5 câu
                  </span>
                  <button
                    disabled={Object.keys(answers).length < 5}
                    onClick={handleFinishQuiz}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                      Object.keys(answers).length === 5
                        ? 'bg-[#4a7c59] hover:bg-[#3d694a] text-white shadow-md cursor-pointer'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Xem kết quả đánh giá</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Result */
              <div className="text-center py-6 animate-in zoom-in-95 duration-300">
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase mb-4">
                  Chỉ số tổng hợp: {totalScore}/15 điểm
                </div>

                {totalScore <= 4 && (
                  <div className="max-w-lg mx-auto">
                    <h3 className="text-2xl font-black text-emerald-700 mb-2">
                      Mức Độ Căng Thẳng: Thấp & Cân Bằng 🌱
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      Tuyệt vời! Bạn đang duy trì trạng thái tâm lý và khả năng tự cân bằng rất tốt. Hãy tiếp tục duy trì lối sống lành mạnh, dành thời gian nghỉ ngơi và tập thể dục đều đặn nhé!
                    </p>
                  </div>
                )}

                {totalScore > 4 && totalScore <= 9 && (
                  <div className="max-w-lg mx-auto">
                    <h3 className="text-2xl font-black text-amber-600 mb-2">
                      Mức Độ Căng Thẳng: Trung Bình ⚠️
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      Bạn đang có một số dấu hiệu mệt mỏi và áp lực từ việc học hoặc các mối quan hệ. Đừng cố gồng gánh một mình. Hãy cho bản thân những khoảng nghỉ ngắn và cân nhắc tâm sự với bạn bè hoặc thầy cô tư vấn.
                    </p>
                  </div>
                )}

                {totalScore > 9 && (
                  <div className="max-w-lg mx-auto">
                    <h3 className="text-2xl font-black text-rose-600 mb-2">
                      Mức Độ Căng Thẳng: Khá Cao 🚨
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      Tâm trí và cơ thể bạn đang phát tín hiệu cầu cứu vì quá tải. Đừng ngần ngại, việc trò chuyện với thầy cô tư vấn học đường sẽ giúp bạn trút bỏ tảng đá nặng trong lòng ngay hôm nay.
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={handleResetQuiz}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Làm lại trắc nghiệm</span>
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-full text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    Đặt lịch trò chuyện cùng thầy cô
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: Breathing 4-7-8 */}
        {activeTool === 'breathe' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xs border border-slate-200 text-center animate-in fade-in duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e486b] mb-2">
              Kỹ Thuật Thở 4-7-8 Thư Giãn Não Bộ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8">
              Kỹ thuật thở sâu giúp kích hoạt hệ thần kinh phó giao cảm, làm dịu nhịp tim và giảm cơn hoảng sợ lo âu chỉ sau 2 phút.
            </p>

            {/* Visual breathing circle */}
            <div className="relative w-44 h-44 xs:w-52 xs:h-52 sm:w-60 sm:h-60 mx-auto flex items-center justify-center mb-6 sm:mb-8">
              {/* Outer pulsing ring */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                  breathPhase === 'inhale' 
                    ? 'scale-110 bg-teal-100/70' 
                    : breathPhase === 'hold' 
                    ? 'scale-105 bg-amber-100/70' 
                    : 'scale-90 bg-slate-100'
                }`} 
              />

              {/* Inner Circle */}
              <div 
                className={`relative z-10 w-32 h-32 xs:w-38 xs:h-38 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center text-white shadow-lg transition-all duration-1000 ${
                  breathPhase === 'inhale' 
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-600 scale-105' 
                    : breathPhase === 'hold' 
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500 scale-100' 
                    : 'bg-gradient-to-br from-indigo-500 to-cyan-600 scale-95'
                }`}
              >
                <span className="text-[10px] xs:text-xs uppercase tracking-widest font-black opacity-90 text-center px-2">
                  {breathPhase === 'inhale' && 'Hít Vào (Mũi)'}
                  {breathPhase === 'hold' && 'Giữ Hơi Thở'}
                  {breathPhase === 'exhale' && 'Thở Ra (Miệng)'}
                </span>
                <span className="text-3xl xs:text-4xl sm:text-5xl font-black mt-0.5 sm:mt-1">
                  {breathCount}
                </span>
                <span className="text-[10px] xs:text-[11px] opacity-80 mt-0.5 sm:mt-1">giây</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsBreathing(!isBreathing)}
                className={`px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer ${
                  isBreathing
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-[#4a7c59] hover:bg-[#3d694a] text-white'
                }`}
              >
                {isBreathing ? 'Tạm dừng bài tập' : 'Bắt đầu bài tập thở'}
              </button>
            </div>
          </div>
        )}

        {/* TOOL 3: Ambient Sound Generator */}
        {activeTool === 'sound' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xs border border-slate-200 text-center animate-in fade-in duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e486b] mb-2">
              Âm Thanh Tự Nhiên Thư Thái
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8">
              Tạo sóng âm thư giãn trực tiếp từ trình duyệt để học bài, đọc sách hoặc làm dịu cơn căng thẳng.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto mb-8">
              <button
                onClick={() => isPlayingAudio && soundType === 'rain' ? stopAudio() : startAudio('rain')}
                className={`p-5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isPlayingAudio && soundType === 'rain'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
                }`}
              >
                <div className="text-3xl mb-2">🌧️</div>
                <div className="font-bold text-sm">Tiếng Mưa Êm</div>
                <div className="text-xs text-slate-500 mt-1">
                  {isPlayingAudio && soundType === 'rain' ? 'Đang phát...' : 'Nhấn để nghe'}
                </div>
              </button>

              <button
                onClick={() => isPlayingAudio && soundType === 'breeze' ? stopAudio() : startAudio('breeze')}
                className={`p-5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isPlayingAudio && soundType === 'breeze'
                    ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
                }`}
              >
                <div className="text-3xl mb-2">🍃</div>
                <div className="font-bold text-sm">Gió Thoảng Rừng Cây</div>
                <div className="text-xs text-slate-500 mt-1">
                  {isPlayingAudio && soundType === 'breeze' ? 'Đang phát...' : 'Nhấn để nghe'}
                </div>
              </button>

              <button
                onClick={() => isPlayingAudio && soundType === 'chime' ? stopAudio() : startAudio('chime')}
                className={`p-5 rounded-2xl border text-center transition-all cursor-pointer ${
                  isPlayingAudio && soundType === 'chime'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
                }`}
              >
                <div className="text-3xl mb-2">🔔</div>
                <div className="font-bold text-sm">Tần Số Bình Yên 432Hz</div>
                <div className="text-xs text-slate-500 mt-1">
                  {isPlayingAudio && soundType === 'chime' ? 'Đang phát...' : 'Nhấn để nghe'}
                </div>
              </button>
            </div>

            {isPlayingAudio && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold animate-pulse">
                <Volume2 className="w-4 h-4" />
                <span>Đang phát sóng âm thư giãn... Hãy nhắm mắt và thư giãn 3 phút</span>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

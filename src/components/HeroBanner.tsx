import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onOpenBooking: () => void;
  onExploreCounseling: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenBooking, onExploreCounseling }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#e8f1ec]">
      {/* Background Container with Responsive Min-Height */}
      <div className="relative min-h-[440px] xs:min-h-[480px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center">
        
        {/* Background Image: Watercolor Anime School Courtyard */}
        <div 
          className="absolute inset-0 bg-cover bg-[position:74%_center] sm:bg-[position:65%_center] lg:bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('/hero-banner.jpg')`,
          }}
          aria-hidden="true"
        />

        {/* Responsive Atmospheric Gradient:
            - On phones (< 640px): top-to-bottom gentle gradient so top text is legible while students below remain visible
            - On tablets & desktops (>= 640px): left-to-right gradient so students on the right are clear
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/40 sm:bg-gradient-to-r sm:from-white/90 sm:via-white/60 sm:to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Decorative Floating Sunlight / Leaf Particles */}
        <div className="absolute top-10 left-16 w-3 h-3 rounded-full bg-emerald-400/40 blur-[1px] animate-gentle-float hidden sm:block" />
        <div className="absolute top-28 left-1/3 w-2 h-2 rounded-full bg-amber-300/50 blur-[1px] animate-gentle-float hidden md:block" />

        {/* Main Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 w-full py-8 xs:py-10 md:py-16 z-10">
          <div className="max-w-xl lg:max-w-2xl text-left bg-white/80 sm:bg-white/60 lg:bg-transparent backdrop-blur-[2px] lg:backdrop-blur-none p-4 xs:p-5 sm:p-7 lg:p-0 rounded-3xl lg:rounded-none border border-white/60 lg:border-none shadow-2xs lg:shadow-none">
            
            {/* Hand-drawn Style Title Matching Reference Screenshot */}
            <div className="relative mb-3 sm:mb-4 inline-block">
              <h1 className="font-handwriting text-[27px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#1a4b57] leading-[1.15] tracking-normal drop-shadow-xs select-none">
                <span className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap">
                  <span className="whitespace-normal">Tư vấn tâm lý</span>
                  
                  {/* Hand-drawn Green Doodle Heart with Radiance Rays */}
                  <span className="inline-block relative -mt-1 xs:-mt-2 sm:-mt-4 flex-shrink-0">
                    <svg 
                      viewBox="0 0 60 60" 
                      className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 text-[#439b70] drop-shadow-xs" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      {/* Heart outline with hand-drawn organic curve */}
                      <path 
                        d="M30 46 C15 36 10 26 12 18 C14 11 22 9 27 15 C28.5 17 30 18.5 30 18.5 C30 18.5 31.5 17 33 15 C38 9 46 11 48 18 C50 26 45 36 30 46 Z" 
                        strokeWidth="3.2"
                      />
                      {/* Radiance spark lines above top-right */}
                      <line x1="48" y1="11" x2="55" y2="7" strokeWidth="2.6" />
                      <line x1="53" y1="18" x2="60" y2="18" strokeWidth="2.6" />
                      <line x1="42" y1="6" x2="45" y2="1" strokeWidth="2.6" />
                    </svg>
                  </span>
                </span>
                <br />
                <span className="text-[#1a4b57] block mt-0.5 sm:mt-1 whitespace-normal">
                  học đường
                </span>
              </h1>
            </div>

            {/* Slogan Description - Always 100% visible across all devices */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#2c554e] font-medium leading-relaxed max-w-lg mb-5 sm:mb-7 drop-shadow-xs whitespace-normal break-words">
              Một không gian an toàn để bạn được lắng nghe, chia sẻ và tìm ra hướng đi phù hợp.
            </p>

            {/* Action Buttons: Stack on mobile, inline row on tablet/desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none">
              {/* Primary Call to Action Button */}
              <button
                onClick={onOpenBooking}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 sm:px-7 sm:py-4 bg-[#4a7c59] hover:bg-[#3d694a] active:bg-[#32583e] text-white rounded-full font-bold text-sm xs:text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-250 cursor-pointer"
              >
                <div className="p-1 rounded-md bg-white/15 flex-shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="tracking-wide uppercase font-bold text-[13px] xs:text-[14px] sm:text-[16px] whitespace-nowrap">
                  Đặt lịch tư vấn
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-250 group-hover:translate-x-1 flex-shrink-0" />
              </button>

              {/* Secondary Exploratory Button */}
              <button
                onClick={onExploreCounseling}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 bg-white/90 hover:bg-white text-[#204b6e] rounded-full font-semibold text-xs xs:text-sm sm:text-base border border-slate-200/80 shadow-2xs hover:shadow transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Tìm hiểu thêm</span>
              </button>
            </div>

            {/* Reassurance Micro-banner */}
            <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 text-[11px] xs:text-xs sm:text-sm text-[#406860] font-semibold flex-wrap">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>Bảo mật 100%</span>
              <span className="text-slate-300">•</span>
              <span>Miễn phí cho học sinh</span>
              <span className="text-slate-300">•</span>
              <span>Có thể chọn ẩn danh</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

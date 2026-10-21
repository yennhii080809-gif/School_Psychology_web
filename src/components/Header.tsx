import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Mail, ChevronRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tabId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ' },
    { id: 'chu-de-tham-van', label: 'Chủ đề & Tiện ích' },
    { id: 'tu-van-la-gi', label: 'Tư vấn là gì?' },
    { id: 'goc-thu-gian', label: 'Góc thư giãn' },
    { id: 'hop-thu-an-danh', label: 'Hộp thư ẩn danh' },
    { id: 'dat-lich', label: 'Đặt lịch tư vấn' },
    { id: 'quyen-rieng-tu', label: 'Quyền riêng tư' },
    { id: 'lien-he', label: 'Liên hệ' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-2.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 sm:h-18 lg:h-20 gap-2">
          
          {/* Logo & Brand Identity - Optimized for All Phone, Tablet & PC Screens */}
          <div 
            onClick={() => handleNavClick('trang-chu')}
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 cursor-pointer group select-none min-w-0 flex-1 lg:flex-initial"
          >
            {/* Custom Stylized Logo SVG matching screenshot */}
            <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book Base */}
                <path 
                  d="M14 82C24 74 38 72 50 76C62 72 76 74 86 82C86 85 82 89 74 89C62 85 52 87 50 90C48 87 38 85 26 89C18 89 14 85 14 82Z" 
                  fill="#3b82a6" 
                />
                <path 
                  d="M18 80C28 73 39 71 50 74C61 71 72 73 82 80C74 76 63 74 50 77C37 74 26 76 18 80Z" 
                  fill="#60a5fa" 
                />
                
                {/* Embracing Figures (Counselor & Student) */}
                {/* Left Figure */}
                <circle cx="34" cy="33" r="6.5" fill="#38a169" />
                <path 
                  d="M26 62C24 50 30 42 42 42C44 46 45 52 41 58C37 63 31 64 26 62Z" 
                  fill="#48bb78" 
                />

                {/* Right Figure */}
                <circle cx="66" cy="33" r="6.5" fill="#2b6cb0" />
                <path 
                  d="M74 62C76 50 70 42 58 42C56 46 55 52 59 58C63 63 69 64 74 62Z" 
                  fill="#4299e1" 
                />

                {/* Harmonious Embracing Hands forming circle */}
                <path 
                  d="M33 46C26 53 28 67 40 73C44 75 48 74 50 71C44 70 38 66 36 59C34 54 36 49 33 46Z" 
                  fill="#319795" 
                />
                <path 
                  d="M67 46C74 53 72 67 60 73C56 75 52 74 50 71C56 70 62 66 64 59C66 54 64 49 67 46Z" 
                  fill="#2b748e" 
                />

                {/* Center Heart */}
                <path 
                  d="M50 60C50 60 41 54 41 46.5C41 42.5 44 39.5 47.5 40C49.2 40.3 50 42 50 42C50 42 50.8 40.3 52.5 40C56 39.5 59 42.5 59 46.5C59 54 50 60 50 60Z" 
                  fill="#e53e3e" 
                  className="transition-transform duration-300 group-hover:scale-110 origin-center"
                />
              </svg>
            </div>

            {/* Brand Titles - 100% visible across all phones, tablets, laptops, PC without clipping */}
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] xs:text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] font-extrabold tracking-tight text-[#1e486b] uppercase leading-tight truncate sm:whitespace-normal">
                Góc Tư Vấn Học Đường
              </span>
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-xs font-medium text-[#4f738e] tracking-tight text-left mt-0.5 truncate sm:whitespace-normal">
                Lắng nghe <span className="text-teal-500 font-bold">•</span> Đồng hành <span className="text-teal-500 font-bold">•</span> Thấu hiểu
              </span>
            </div>
          </div>

          {/* Laptop & PC Navigation Bar (Visible on lg & xl screens) */}
          <nav className="hidden lg:flex items-center gap-1.5 lg:gap-2.5 xl:gap-5 flex-shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-1.5 px-1 lg:px-1.5 text-[12.5px] xl:text-[14px] font-semibold transition-colors duration-200 cursor-pointer flex flex-col items-center whitespace-nowrap"
                >
                  <span className={isActive ? 'text-[#1e486b] font-bold' : 'text-slate-600 hover:text-[#1e486b]'}>
                    {item.label}
                  </span>
                  {/* Active indicator underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1 right-1 h-[2.5px] bg-[#2a7f85] rounded-full transition-all" />
                  )}
                </button>
              );
            })}

            {/* Quick Action Button for Laptop / PC */}
            <button
              onClick={onOpenBooking}
              className="ml-1 xl:ml-2 px-3 xl:px-4 py-2 bg-[#447667] hover:bg-[#366154] text-white rounded-full text-xs xl:text-sm font-bold shadow-2xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Đặt lịch ngay</span>
            </button>
          </nav>

          {/* Mobile & Tablet Controls (< lg: phones, phablets, tablets like iPad, Surface, Galaxy Tab) */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Quick CTA button on screens >= 480px */}
            <button
              onClick={onOpenBooking}
              className="hidden xs:flex px-2.5 sm:px-3.5 py-1.5 bg-[#447667] hover:bg-[#366154] text-white rounded-full text-xs font-bold items-center gap-1 cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Đặt hẹn</span>
            </button>

            {/* Touch-Friendly Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-hidden cursor-pointer flex items-center justify-center min-w-10 min-h-10"
              aria-label="Mở danh mục điều hướng"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-15 sm:top-18 z-50 flex flex-col">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-4 duration-250 z-10 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 px-3 py-1">
              Danh mục trang web
            </div>

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-teal-50 text-[#1e486b] font-bold border-l-4 border-[#2a7f85]'
                      : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#2a7f85]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              );
            })}
            
            {/* Direct Booking Button in Drawer */}
            <div className="pt-2 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 bg-[#447667] hover:bg-[#366154] text-white rounded-xl text-sm font-bold shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Đặt Lịch Tư Vấn Ngay</span>
              </button>
            </div>

            {/* School Info & Contact in Drawer */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500 px-2 mt-2">
              <span className="text-teal-800 font-bold text-xs">
                Phòng Tham Vấn Học Đường
              </span>
              <span className="flex items-start gap-1.5 text-slate-600 leading-snug">
                <MapPin className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Lầu 3 gần dãy Xã hội - THPT Chuyên Nguyễn Đình Chiểu</span>
              </span>
              <a 
                href="mailto:Nguyenthithuyvy.psychology@gmail.com" 
                className="flex items-start gap-1.5 text-teal-700 hover:text-teal-900 break-all transition-colors leading-snug font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Nguyenthithuyvy.psychology@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

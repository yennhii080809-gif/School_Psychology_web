import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Users, 
  Home, 
  Heart, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Lightbulb, 
  Calendar, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  X,
  Compass,
  Mail
} from 'lucide-react';
import { TOPICS, TopicInfo } from '../data/counselingData';

interface TopicCategoriesProps {
  onSelectTopicForBooking: (topicTitle: string) => void;
}

export const TopicCategories: React.FC<TopicCategoriesProps> = ({ onSelectTopicForBooking }) => {
  // Default to the first topic so content is always visible and ready
  const [activeTopicIndex, setActiveTopicIndex] = useState<number>(0);
  // Fullscreen modal for detailed view if user clicks "Xem chi tiết phóng to"
  const [modalTopic, setModalTopic] = useState<TopicInfo | null>(null);

  const activeTopic = TOPICS[activeTopicIndex] || TOPICS[0];

  const getIcon = (type: TopicInfo['iconType'], className: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className={className} />;
      case 'brain':
        return <Brain className={className} />;
      case 'users':
        return <Users className={className} />;
      case 'home':
        return <Home className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'target':
        return <Target className={className} />;
      case 'sparkles':
        return <Sparkles className={className} />;
      case 'mail':
        return <Mail className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  const handleNextTopic = () => {
    setActiveTopicIndex((prev) => (prev + 1) % TOPICS.length);
  };

  const handlePrevTopic = () => {
    setActiveTopicIndex((prev) => (prev - 1 + TOPICS.length) % TOPICS.length);
  };

  const handleJumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="chu-de-tham-van" className="w-full bg-[#f8faf9] py-8 sm:py-12 lg:py-14 border-y border-slate-200/90 shadow-2xs scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
            <span>8 Nhóm Chủ Đề & Tiện Ích Hỗ Trợ Học Sinh</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Chủ Đề & Tiện Ích Tham Vấn Học Đường
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            <span className="hidden sm:inline">Di chuột hoặc bấm</span>
            <span className="sm:hidden">Chạm hoặc chọn</span> vào từng mục bên dưới để xem chi tiết dấu hiệu cần trợ giúp, giải pháp tự chăm sóc và lời khuyên từ thầy cô tư vấn.
          </p>
        </div>

        {/* 8 Interactive Item Buttons / Tabs
            - Mobile (< 640px): 2 columns
            - Tablet (640px - 1023px): 4 columns (2 rows of 4)
            - Laptop (1024px - 1279px): 4 columns (2 rows of 4) for ample text breathing room without clipping
            - Desktop & PC (>= 1280px): 8 balanced columns
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2 xs:gap-2.5 sm:gap-3 lg:gap-3.5 mb-6 sm:mb-8">
          {TOPICS.map((topic, index) => {
            const isActive = index === activeTopicIndex;
            return (
              <button
                key={topic.id}
                type="button"
                onMouseEnter={() => setActiveTopicIndex(index)}
                onClick={() => setActiveTopicIndex(index)}
                onFocus={() => setActiveTopicIndex(index)}
                aria-selected={isActive}
                className={`relative group flex flex-col items-center justify-between text-center p-2.5 xs:p-3 sm:p-3.5 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-hidden min-h-[115px] sm:min-h-[130px] ${
                  isActive
                    ? 'bg-white shadow-md ring-2 ring-[#4a7c59] border-transparent scale-[1.02] z-10'
                    : 'bg-white/80 hover:bg-white border border-slate-200/80 hover:border-teal-300 hover:shadow-2xs hover:scale-[1.01]'
                }`}
              >
                {/* Active Indicator Top Pill */}
                {isActive && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#4a7c59] text-white text-[9px] sm:text-[10px] font-bold rounded-full shadow-2xs uppercase tracking-wider flex items-center gap-1 whitespace-nowrap z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                    <span>Đang xem</span>
                  </span>
                )}

                <div className="w-full flex flex-col items-center">
                  {/* Colored Circle with Icon */}
                  <div
                    className={`w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full ${topic.bgCircle} ${topic.iconColor} flex items-center justify-center mb-1.5 sm:mb-2 transition-transform duration-300 ${
                      isActive ? 'scale-110 shadow-2xs' : 'group-hover:scale-105'
                    } flex-shrink-0`}
                  >
                    {getIcon(topic.iconType, 'w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.8]')}
                  </div>

                  {/* Title - Fully visible, never cut off across any device */}
                  <span
                    className={`text-[11.5px] xs:text-xs sm:text-[13px] font-bold leading-snug px-0.5 text-center transition-colors break-words hyphens-none ${
                      isActive ? 'text-[#1e486b]' : 'text-slate-700 group-hover:text-[#1e486b]'
                    }`}
                  >
                    {topic.title}
                  </span>
                </div>

                {/* Subtitle / Teaser for Tablet, Laptop, PC */}
                <span className="mt-1 text-[10px] sm:text-[11px] text-slate-500 font-medium line-clamp-1 hidden sm:block">
                  {index === 0 && 'Học tập & thời gian'}
                  {index === 1 && 'Thi cử & áp lực'}
                  {index === 2 && 'Bạn bè & tập thể'}
                  {index === 3 && 'Gia đình & cha mẹ'}
                  {index === 4 && 'Cảm xúc & tâm lý'}
                  {index === 5 && 'Khối thi & nghề nghiệp'}
                  {index === 6 && 'Thở 4-7-8 & test stress'}
                  {index === 7 && 'Gửi thư kín & bảo mật'}
                </span>

                {/* Bottom subtle bar */}
                <div 
                  className={`w-5 h-1 rounded-full mt-1.5 transition-all duration-300 ${
                    isActive ? 'bg-[#4a7c59] w-9' : 'bg-transparent group-hover:bg-slate-200'
                  }`} 
                />
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* Dynamic Professional Content Showcase Panel for Active Topic */}
        {/* ============================================================ */}
        <div 
          key={activeTopic.id}
          className="bg-white rounded-3xl p-4 xs:p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden transition-all duration-300 animate-in fade-in-50 zoom-in-[0.99]"
        >
          {/* Decorative colored top header border */}
          <div className={`absolute top-0 left-0 right-0 h-2 ${activeTopic.bgCircle}`} />

          {/* Top Panel Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className={`w-12 h-12 sm:w-15 sm:h-15 rounded-2xl ${activeTopic.bgCircle} ${activeTopic.iconColor} flex items-center justify-center flex-shrink-0 shadow-2xs`}>
                {getIcon(activeTopic.iconType, 'w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]')}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200/60 whitespace-nowrap">
                    Mục {activeTopicIndex + 1}/{TOPICS.length}
                  </span>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline truncate">
                    • {activeTopic.actionType ? 'Tiện ích tương tác trực tiếp' : 'Phòng tham vấn tâm lý học đường'}
                  </span>
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1e486b] tracking-tight break-words">
                  {activeTopic.title}
                </h3>
              </div>
            </div>

            {/* Quick Navigation Carousel Controls */}
            <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0">
              <button
                type="button"
                onClick={handlePrevTopic}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                title="Mục trước"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Trước</span>
              </button>
              <span className="text-xs font-bold text-slate-600 px-2 min-w-14 text-center">
                {activeTopicIndex + 1} / {TOPICS.length}
              </span>
              <button
                type="button"
                onClick={handleNextTopic}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                title="Mục tiếp theo"
              >
                <span className="hidden sm:inline">Sau</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Empathetic Overview Box */}
          <div className="my-5 p-4 sm:p-5 rounded-2xl bg-linear-to-r from-teal-50/70 via-emerald-50/40 to-slate-50 border border-teal-100/80">
            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-normal break-words">
              <span className="font-bold text-teal-900">Góc nhìn từ thầy cô: </span>
              {activeTopic.fullDesc}
            </p>
          </div>

          {/* 2 Main Columns: Dấu hiệu thường gặp & Gợi ý từ thầy cô */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1">
            
            {/* Column 1: Signs / Situations */}
            <div className="bg-[#fafbfb] rounded-2xl p-4 sm:p-5 border border-slate-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3.5 text-amber-800 font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <span className="break-words">
                    {activeTopic.actionType === 'selfcare' 
                      ? 'Dấu hiệu bạn nên dành thời gian tự chăm sóc ngay'
                      : activeTopic.actionType === 'letterbox'
                      ? 'Những lúc bạn nên gửi thư tâm sự ẩn danh'
                      : 'Dấu hiệu bạn hoặc bạn bè đang cần hỗ trợ'}
                  </span>
                </div>

                <ul className="space-y-2 sm:space-y-2.5">
                  {activeTopic.commonSigns.map((sign, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <span className="leading-snug break-words">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] sm:text-xs text-slate-500 flex items-start gap-1.5">
                <span className="font-semibold text-slate-700 flex-shrink-0">Lưu ý:</span>
                <span className="break-words">
                  {activeTopic.actionType 
                    ? 'Bạn có thể tự trải nghiệm tính năng này trực tiếp hoặc liên hệ thầy cô khi cần trò chuyện sâu hơn.'
                    : 'Nếu bạn nhận thấy mình có 2 dấu hiệu trở lên kéo dài, đừng ngần ngại trò chuyện cùng thầy cô.'}
                </span>
              </div>
            </div>

            {/* Column 2: Helpful Tips & Guidance */}
            <div className="bg-[#f7faf8] rounded-2xl p-4 sm:p-5 border border-emerald-100/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3.5 text-emerald-900 font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <span className="break-words">
                    {activeTopic.actionType === 'selfcare'
                      ? 'Các tiện ích tự chữa lành sẵn có trên web'
                      : activeTopic.actionType === 'letterbox'
                      ? 'Cách thức gửi thư và nhận hồi đáp từ thầy cô'
                      : 'Gợi ý giải pháp hữu ích từ thầy cô tư vấn'}
                  </span>
                </div>

                <ul className="space-y-2 sm:space-y-2.5">
                  {activeTopic.helpfulTips.map((tip, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 sm:p-3 rounded-xl border border-emerald-100/70 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-snug break-words">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center gap-2 text-[11px] sm:text-xs text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span className="break-words">Cam kết bảo mật 100% nội dung chia sẻ và tôn trọng quyền riêng tư của bạn.</span>
              </div>
            </div>

          </div>

          {/* Interactive Action Bar - Responsively stacks on mobile, aligns on tablet/PC */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
              <span>Phòng tư vấn luôn mở cửa đón nhận chia sẻ về mục này</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="button"
                onClick={() => setModalTopic(activeTopic)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold text-xs sm:text-sm transition-colors cursor-pointer text-center"
              >
                Xem dạng phóng to
              </button>

              {/* Specific Action Buttons based on Topic Type */}
              {activeTopic.actionType === 'selfcare' ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleJumpToSection('goc-thu-gian')}
                    className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Đến Góc Thư Giãn Ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTopicForBooking(activeTopic.title)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Đặt lịch hẹn</span>
                  </button>
                </>
              ) : activeTopic.actionType === 'letterbox' ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleJumpToSection('hop-thu-an-danh')}
                    className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Gửi Thư Tâm Sự Ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTopicForBooking(activeTopic.title)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Đặt lịch hẹn</span>
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => onSelectTopicForBooking(activeTopic.title)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Đặt lịch tư vấn về chủ đề này</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* Fullscreen Detailed Modal View (when user clicks "Xem dạng phóng to") */}
      {/* ============================================================ */}
      {modalTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="fixed inset-0" 
            onClick={() => setModalTopic(null)} 
            aria-hidden="true" 
          />
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className={`p-4 sm:p-6 ${modalTopic.bgCircle} border-b border-slate-200/60 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white ${modalTopic.iconColor} flex items-center justify-center shadow-2xs flex-shrink-0`}>
                  {getIcon(modalTopic.iconType, 'w-6 h-6 stroke-[2]')}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                    Chi tiết chuyên đề tham vấn
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-[#1e486b] leading-tight break-words">
                    {modalTopic.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalTopic(null)}
                className="p-2 sm:p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors cursor-pointer min-w-10 min-h-10 flex items-center justify-center"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wide mb-1">
                  Định nghĩa & Góc nhìn chuyên môn
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed break-words">
                  {modalTopic.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Dấu hiệu thường gặp</span>
                </h4>
                <ul className="space-y-2">
                  {modalTopic.commonSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                      <span className="leading-snug break-words">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  <span>Gợi ý giải pháp từ thầy cô</span>
                </h4>
                <ul className="space-y-2">
                  {modalTopic.helpfulTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-snug break-words">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Mọi thông tin trao đổi đều được cam kết bảo mật 100%
              </span>
              <button
                type="button"
                onClick={() => {
                  const title = modalTopic.title;
                  setModalTopic(null);
                  if (modalTopic.actionType === 'selfcare') {
                    handleJumpToSection('goc-thu-gian');
                  } else if (modalTopic.actionType === 'letterbox') {
                    handleJumpToSection('hop-thu-an-danh');
                  } else {
                    onSelectTopicForBooking(title);
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {modalTopic.actionType === 'selfcare' 
                    ? 'Mở Góc Thư Giãn' 
                    : modalTopic.actionType === 'letterbox' 
                    ? 'Mở Hộp Thư Ẩn Danh' 
                    : 'Đặt lịch tư vấn chủ đề này'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

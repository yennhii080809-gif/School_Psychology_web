import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Smile, Sparkles, Check, X, HelpCircle, ArrowRight } from 'lucide-react';

interface WhatIsCounselingProps {
  onOpenBooking: () => void;
}

export const WhatIsCounseling: React.FC<WhatIsCounselingProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'myths'>('intro');

  const principles = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: 'Bảo mật tuyệt đối 100%',
      desc: 'Mọi câu chuyện bạn chia sẻ trong phòng tư vấn đều được giữ kín hoàn toàn. Không ai – kể cả thầy cô bộ môn, ban giám hiệu hay bạn bè – biết được nội dung trò chuyện.',
      bg: 'bg-teal-50/70 border-teal-100',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      title: 'Lắng nghe không phán xét',
      desc: 'Dù bạn gặp phải bất kỳ rắc rối nào, thầy cô ở đây không đánh giá hay phê bình bạn. Chúng mình tôn trọng cảm xúc và góc nhìn chân thật nhất của bạn.',
      bg: 'bg-rose-50/70 border-rose-100',
    },
    {
      icon: <Smile className="w-8 h-8 text-amber-500" />,
      title: 'Tự nguyện & Tôn trọng',
      desc: 'Bạn là người làm chủ buổi trò chuyện. Bạn có quyền quyết định muốn chia sẻ điều gì, vào lúc nào, và dừng lại bất cứ khi nào bạn cảm thấy chưa sẵn sàng.',
      bg: 'bg-amber-50/70 border-amber-100',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
      title: 'Đồng hành tìm giải pháp',
      desc: 'Thầy cô không áp đặt câu trả lời có sẵn, mà sẽ cùng bạn tháo gỡ từng nút thắt, khơi gợi tiềm năng và giúp bạn tự tin đưa ra quyết định của riêng mình.',
      bg: 'bg-indigo-50/70 border-indigo-100',
    },
  ];

  const myths = [
    {
      myth: 'Chỉ những bạn có vấn đề tâm thần nghiêm trọng hoặc vi phạm kỷ luật mới phải đi tư vấn.',
      fact: 'Bất kỳ ai cần một người lắng nghe, đang băn khoăn về học tập, bạn bè, gia đình hay chỉ đơn giản muốn hiểu rõ bản thân hơn đều có thể đến với góc tư vấn.',
    },
    {
      myth: 'Đi tư vấn thì thầy cô sẽ báo lại cho bố mẹ hoặc giáo viên chủ nhiệm.',
      fact: 'Nguyên tắc bảo mật là đạo đức số 1 của nghề tham vấn tâm lý. Nội dung buổi gặp được giữ kín 100%, trừ trường hợp có nguy cơ gây nguy hại trực tiếp đến tính mạng của bạn hoặc người khác.',
    },
    {
      myth: 'Chuyên viên tư vấn sẽ lập tức chỉ bảo cho bạn phải làm gì như một bài giảng đạo đức.',
      fact: 'Chuyên viên không đóng vai người dạy bảo hay quan tòa. Thầy cô là người bạn đồng hành, giúp bạn nhìn nhận vấn đề đa chiều và tự tìm thấy giải pháp của chính mình.',
    },
    {
      myth: 'Tự mình chịu đựng và vượt qua mới là mạnh mẽ, tìm người giúp là yếu đuối.',
      fact: 'Dũng cảm nhận ra mình cần sự hỗ trợ và chủ động tìm kiếm người đồng hành chính là biểu hiện cao nhất của sự trưởng thành và yêu thương bản thân.',
    },
  ];

  return (
    <section id="tu-van-la-gi" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Không gian thân thiện cho học sinh
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Tư Vấn Tâm Lý Học Đường Là Gì?
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Phòng tư vấn tâm lý không phải là phòng y tế, cũng không phải văn phòng kỷ luật. 
            Đây là trạm dừng chân bình yên giữa những áp lực thi cử và xáo trộn tuổi học trò.
          </p>

          {/* Segmented Control Buttons */}
          <div className="inline-flex flex-col xs:flex-row p-1.5 bg-slate-100 rounded-2xl mt-6 border border-slate-200 w-full xs:w-auto max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('intro')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'intro'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4 Nguyên tắc cốt lõi
            </button>
            <button
              onClick={() => setActiveTab('myths')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'myths'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Hiểu lầm thường gặp</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Principles */}
        {activeTab === 'intro' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-in fade-in duration-300">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border ${item.bg} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-4 inline-block p-3 rounded-2xl bg-white shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 sm:mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Myths vs Facts */}
        {activeTab === 'myths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-in fade-in duration-300">
            {myths.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fcfdfd] border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-xs transition-all"
              >
                {/* Myth */}
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-rose-500 block mb-1">
                      Hiểu lầm phổ biến
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      "{item.myth}"
                    </p>
                  </div>
                </div>

                {/* Fact */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-600 block mb-1">
                      Sự thật là
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {item.fact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Callout box */}
        <div className="mt-10 sm:mt-12 bg-linear-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-5 sm:p-8 border border-teal-100/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-2xl text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#1e486b] mb-1.5 sm:mb-2">
              Bạn đang có điều băn khoăn muốn được lắng nghe?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bạn hoàn toàn có thể đăng ký một buổi trò chuyện cùng thầy cô tư vấn học đường, hoặc đơn giản là để lại một lời nhắn ẩn danh. Chúng mình luôn sẵn sàng.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-full font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Đặt lịch ngay hôm nay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

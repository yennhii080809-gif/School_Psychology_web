import React from 'react';
import { Shield, Lock, EyeOff, UserCheck, FileText, CheckCircle, Clock } from 'lucide-react';

export const PrivacyAndProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Đăng Ký Hoặc Ghé Phòng Tư Vấn (Lầu 3)',
      desc: 'Bạn chọn khung giờ rảnh qua website (có thể dùng biệt danh ẩn danh) hoặc trực tiếp ghé phòng tư vấn ở Lầu 3 gần dãy Xã hội (Trường THPT Chuyên Nguyễn Đình Chiểu) vào giờ ra chơi / giờ nghỉ trưa.',
    },
    {
      num: '02',
      title: 'Tiếp Đón Ấm Áp & Không Gian Riêng',
      desc: 'Phòng tham vấn được thiết kế tách biệt, có bánh kẹo cùng với một số hoạt động nhỏ giúp bạn thư giãn mà không có sự làm phiền từ người ngoài. Thầy cô tham vấn nhiệt tình, giải quyết rõ vấn đề cần thiết và cam kết bảo mật.',
    },
    {
      num: '03',
      title: 'Cùng Trò Chuyện & Tháo Gỡ',
      desc: 'Bạn tự do chia sẻ những bối rối của mình. Thầy cô tư vấn sẽ lắng nghe trọn vẹn, không ngắt lời và cùng bạn tìm ra các giải pháp giải quyết rõ vấn đề.',
    },
    {
      num: '04',
      title: 'Đồng Hành & Đánh Giá Tiến Bộ',
      desc: 'Nếu cần, bạn và thầy cô tư vấn có thể hẹn thêm các buổi tiếp theo để cùng rèn luyện kỹ năng và đồng hành lâu dài.',
    },
  ];

  return (
    <section id="quyen-rieng-tu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            An toàn • Đáng tin cậy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Quy Trình & Cam Kết Bảo Mật Tuyệt Đối
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Chúng mình hiểu rằng việc mở lòng chia sẻ những điều thầm kín cần rất nhiều dũng khí. 
            Vì vậy, sự riêng tư của bạn là ưu tiên số 1 của chúng mình.
          </p>
        </div>

        {/* 4 Steps Journey */}
        <div className="mb-14 sm:mb-20">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 text-center mb-6 sm:mb-10">
            Hành Trình Tham Vấn Của Bạn Diễn Ra Như Thế Nào?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-[#fcfdfa] border border-slate-200/90 rounded-3xl p-5 sm:p-6 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-teal-600/30 mb-2.5 sm:mb-3 font-mono">
                    {step.num}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5 sm:mb-2 break-words">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Pledge Card */}
        <div className="bg-gradient-to-br from-slate-900 to-[#16384c] text-white rounded-3xl p-5 xs:p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-1 text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-3 sm:mb-4 border border-teal-500/30">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Cam Kết Bảo Mật Bất Khả Xâm Phạm
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Được chuẩn hóa theo Bộ quy chuẩn Đạo đức Hiệp hội Tâm lý học đường quốc tế (ISPA).
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 font-bold text-teal-300 mb-1">
                  <Lock className="w-4 h-4" />
                  <span>Không lưu vào học bạ</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Buổi gặp không ảnh hưởng đến xếp loại hạnh kiểm, hồ sơ thi đua hay bất kỳ giấy tờ chính thức nào của nhà trường.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 font-bold text-teal-300 mb-1">
                  <EyeOff className="w-4 h-4" />
                  <span>Bảo mật với phụ huynh & thầy cô</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Thầy cô tư vấn không chia sẻ câu chuyện của em với giáo viên chủ nhiệm hay gia đình trừ khi có sự đồng ý của chính em.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 font-bold text-teal-300 mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>Tự nguyện 100%</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Em có thể dừng buổi nói chuyện bất cứ lúc nào nếu cảm thấy chưa thoải mái mà không phải chịu bất kỳ sự phàn nàn nào.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Ngoại lệ duy nhất vì sự an toàn</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Thầy cô tư vấn chỉ phá vỡ nguyên tắc bảo mật khi nhận thấy em đang có hành vi nguy hiểm cấp bách đe dọa đến tính mạng chính em hoặc người khác.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

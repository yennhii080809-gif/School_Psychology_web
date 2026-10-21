import React from 'react';
import { Clock, MapPin, Mail, Heart, Calendar } from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer id="lien-he" className="bg-[#183446] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-teal-300" />
              </div>
              <span className="font-extrabold text-lg tracking-wide uppercase text-white">
                Góc Tư Vấn Học Đường
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Điểm tựa tinh thần ấm áp, không gian bảo mật và an toàn cho tất cả học sinh. Nơi mọi cảm xúc và băn khoăn đều được lắng nghe với sự tôn trọng chân thành nhất.
            </p>
            <div className="text-teal-300 text-xs font-semibold">
              Lắng nghe • Đồng hành • Thấu hiểu
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('trang-chu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tu-van-la-gi')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tư vấn là gì?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('goc-thu-gian')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Góc thư giãn & tự chăm sóc
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('hop-thu-an-danh')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hộp thư tâm sự ẩn danh
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dat-lich')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Đặt lịch tư vấn trực tiếp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('quyen-rieng-tu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chính sách bảo mật & Quyền riêng tư
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer text-emerald-400 font-bold"
                >
                  Đặt lịch tư vấn →
                </button>
              </li>
            </ul>
          </div>

          {/* Working Hours & Room */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">
              Thời Gian & Địa Điểm
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Lầu 3 gần dãy Xã hội, Trường THPT Chuyên Nguyễn Đình Chiểu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Thứ Hai - Thứ Sáu:</strong></p>
                  <p className="text-slate-400">Sáng: 07:30 - 11:30</p>
                  <p className="text-slate-400">Chiều: 13:30 - 17:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">
              Kênh Tiếp Nhận
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <a 
                href="mailto:Nguyenthithuyvy.psychology@gmail.com" 
                className="flex items-start gap-2.5 text-slate-300 hover:text-teal-300 transition-colors group"
                title="Gửi email cho giáo viên tư vấn tâm lý"
              >
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all font-medium leading-relaxed">
                  Nguyenthithuyvy.psychology@gmail.com
                </span>
              </a>
              
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-xl font-bold text-xs shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Gửi yêu cầu hẹn gặp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Ban Tham Vấn Tâm Lý Học Đường. Tất cả các quyền được bảo lưu.
          </p>
          <p className="text-center sm:text-right text-slate-400">
            Mọi thông tin cá nhân của học sinh được bảo vệ nghiêm ngặt theo đạo đức nghề tham vấn.
          </p>
        </div>
      </div>
    </footer>
  );
};

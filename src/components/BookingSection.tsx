import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Video, 
  ShieldCheck, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';
import { TOPICS } from '../data/counselingData';

interface BookingSectionProps {
  initialTopic?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialTopic }) => {
  const [topic, setTopic] = useState(initialTopic || TOPICS[0].title);
  const [format, setFormat] = useState<'offline' | 'online' | 'letter'>('offline');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [nickname, setNickname] = useState('Bạn nhỏ giấu tên');
  const [grade, setGrade] = useState('Lớp 11');
  const [contactMethod, setContactMethod] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('7h30 - 8h15');
  const [customOtherTime, setCustomOtherTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    code: string;
    topic: string;
    format: string;
    name: string;
    date: string;
    time: string;
    location: string;
  } | null>(null);

  useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic]);

  const morningSlots = [
    '7h30 - 8h15',
    '8h35 - 9h',
    '10h35 - 10h45',
    '11h - 11h30',
  ];

  const afternoonSlots = [
    '14h - 15h',
    '15h - 16h',
  ];

  const otherSlot = 'Giờ khác (hẹn trước 1 tuần)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'TV-' + Math.floor(1000 + Math.random() * 9000);
    
    const locationText = format === 'offline' 
      ? 'Phòng Tư Vấn Tâm Lý - Lầu 3 gần dãy Xã hội, Trường THPT Chuyên Nguyễn Đình Chiểu' 
      : format === 'online' 
      ? 'Phòng Google Meet Bảo Mật (Link gửi qua liên hệ)' 
      : 'Phản hồi chi tiết qua Hộp thư bảo mật';

    const finalTime = selectedTime === otherSlot 
      ? (customOtherTime.trim() ? `${otherSlot}: ${customOtherTime.trim()}` : otherSlot)
      : selectedTime;

    setSubmittedBooking({
      code: randomCode,
      topic,
      format: format === 'offline' ? 'Trực tiếp tại trường' : format === 'online' ? 'Trực tuyến (Meet)' : 'Hộp thư bảo mật',
      name: isAnonymous ? (nickname || 'Ẩn danh') : (studentName || 'Học sinh'),
      date: selectedDate,
      time: finalTime,
      location: locationText,
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setCustomOtherTime('');
    setNotes('');
  };

  return (
    <section id="dat-lich" className="py-16 sm:py-24 bg-[#f8faf8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Không gian an toàn & bí mật
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Đặt Lịch Tư Vấn Cá Nhân
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Chọn thời gian và nội dung phù hợp với bạn. Bạn hoàn toàn có thể đăng ký bằng biệt danh ẩn danh nếu không muốn tiết lộ họ tên thật.
          </p>
        </div>

        {/* Booking Card / Confirmation Ticket */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/90 overflow-hidden">
          
          {submittedBooking ? (
            /* Confirmation Receipt Ticket */
            <div className="p-4 xs:p-6 sm:p-10 lg:p-12 text-center animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-xs">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#1e486b] mb-2">
                Đặt Lịch Thành Công!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-md mx-auto mb-6 sm:mb-8">
                Cảm ơn bạn đã mở lòng. Thầy cô đã nhận được thông tin lịch hẹn và rất mong chờ được lắng nghe bạn.
              </p>

              {/* Digital Boarding Pass / Ticket */}
              <div className="max-w-lg mx-auto bg-linear-to-br from-teal-50/80 via-emerald-50/50 to-white border-2 border-dashed border-teal-200 rounded-3xl p-4 sm:p-6 sm:p-8 text-left relative shadow-xs">
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-teal-100 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase font-bold text-teal-700 tracking-wider">Mã lịch hẹn</span>
                    <p className="text-xl sm:text-2xl font-black text-[#1e486b] tracking-wide">{submittedBooking.code}</p>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1 bg-teal-100/80 text-teal-800 rounded-full text-[11px] sm:text-xs font-bold">
                    {submittedBooking.format}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Người tham gia:</span>
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{submittedBooking.name}</p>
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Chủ đề:</span>
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{submittedBooking.topic}</p>
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Thời gian hẹn:</span>
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{submittedBooking.date} • {submittedBooking.time}</p>
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Hình thức:</span>
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{submittedBooking.format}</p>
                  </div>
                </div>

                <div className="p-3 bg-white/90 rounded-xl border border-teal-100 flex items-start gap-2.5 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="break-words whitespace-normal leading-relaxed">
                    <strong>Địa điểm:</strong> {submittedBooking.location}
                  </span>
                </div>
              </div>

              {/* Advice */}
              <div className="mt-6 sm:mt-8 max-w-lg mx-auto bg-amber-50 rounded-2xl p-3.5 sm:p-4 border border-amber-200 text-xs text-amber-800 flex items-start gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="break-words whitespace-normal leading-relaxed">
                  <strong>Lưu ý:</strong> Vui lòng lưu lại mã số này. Đến giờ hẹn, bạn chỉ cần ghé phòng tư vấn ở Lầu 3 gần dãy Xã hội, Trường THPT Chuyên Nguyễn Đình Chiểu hoặc gửi email đến{' '}
                  <a href="mailto:Nguyenthithuyvy.psychology@gmail.com" className="font-bold underline text-amber-900 break-all">
                    Nguyenthithuyvy.psychology@gmail.com
                  </a>
                  . Bạn không cần lo lắng hay chuẩn bị gì trước nhé!
                </span>
              </div>

              {/* Actions */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-full font-bold text-sm shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  Đặt thêm lịch hẹn khác
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="p-4 xs:p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8">
              
              {/* Step 1: Chọn Hình thức Tư vấn */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  1. Chọn hình thức gặp gỡ thuận tiện nhất cho bạn
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormat('offline')}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      format === 'offline'
                        ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                        <MapPin className="w-5 h-5" />
                      </div>
                      {format === 'offline' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <span className="font-bold text-slate-800 text-sm whitespace-normal">Trực tiếp tại trường</span>
                    <span className="text-xs text-slate-500 mt-1 whitespace-normal leading-relaxed">Lầu 3 gần dãy Xã hội, THPT Chuyên Nguyễn Đình Chiểu - Yên tĩnh, bảo mật riêng tư</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormat('online')}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      format === 'online'
                        ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-xl bg-teal-100 text-teal-700">
                        <Video className="w-5 h-5" />
                      </div>
                      {format === 'online' && <CheckCircle className="w-4 h-4 text-teal-600" />}
                    </div>
                    <span className="font-bold text-slate-800 text-sm whitespace-normal">Trực tuyến (Google Meet)</span>
                    <span className="text-xs text-slate-500 mt-1 whitespace-normal leading-relaxed">Gặp gỡ qua video/audio tại nhà vào buổi tối</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormat('letter')}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      format === 'letter'
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      {format === 'letter' && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                    </div>
                    <span className="font-bold text-slate-800 text-sm whitespace-normal">Hộp thư bảo mật</span>
                    <span className="text-xs text-slate-500 mt-1 whitespace-normal leading-relaxed">Viết thư và nhận phản hồi chi tiết từ thầy cô tư vấn</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Chọn Chủ đề */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  2. Chủ đề bạn muốn chia sẻ
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  {TOPICS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Chọn Ngày & Giờ (cho hình thức gặp) */}
              {format !== 'letter' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-teal-600" />
                      <span>3. Chọn ngày gặp</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span>4. Khung giờ thuận tiện</span>
                    </label>

                    <div className="space-y-3 bg-slate-50/80 p-3 sm:p-3.5 rounded-2xl border border-slate-200">
                      {/* Buổi sáng */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1 mb-1.5">
                          <span>☀️ Buổi sáng:</span>
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {morningSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 px-1.5 xs:px-2 text-[11px] xs:text-xs rounded-xl font-bold border transition-colors cursor-pointer text-center whitespace-nowrap ${
                                selectedTime === slot
                                  ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Buổi chiều */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1 mb-1.5">
                          <span>🌤️ Buổi chiều:</span>
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {afternoonSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 px-1.5 xs:px-2 text-[11px] xs:text-xs rounded-xl font-bold border transition-colors cursor-pointer text-center whitespace-nowrap ${
                                selectedTime === slot
                                  ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Giờ khác */}
                      <div className="pt-1 border-t border-slate-200/80">
                        <button
                          type="button"
                          onClick={() => setSelectedTime(otherSlot)}
                          className={`w-full py-2 px-3 text-xs rounded-xl font-bold border transition-colors cursor-pointer text-center ${
                            selectedTime === otherSlot
                              ? 'bg-[#4a7c59] text-white border-[#4a7c59] shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          ⏰ Giờ khác (hẹn trước 1 tuần)
                        </button>

                        {selectedTime === otherSlot && (
                          <div className="mt-2 animate-in fade-in duration-200">
                            <input
                              type="text"
                              value={customOtherTime}
                              onChange={(e) => setCustomOtherTime(e.target.value)}
                              placeholder="Nhập khung giờ bạn mong muốn (VD: 16h30 thứ 4 tuần sau)..."
                              className="w-full px-3 py-2 text-xs rounded-xl border border-teal-300 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                            />
                            <p className="text-[11px] text-amber-800 mt-1 italic">
                              * Vui lòng đăng ký trước ít nhất 1 tuần để giáo viên sắp xếp thời gian phù hợp.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Thông tin cá nhân & Chế độ Ẩn Danh */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Bảo vệ danh tính của bạn
                    </span>
                  </div>
                  {/* Anonymous Switch */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-xs font-bold text-slate-700">
                      Bật chế độ ẩn danh (Sử dụng biệt danh)
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {isAnonymous ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Biệt danh của bạn (VD: Hướng Dương, Lớp 11A...)
                      </label>
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="VD: Cỏ May Mắn"
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Họ và tên của bạn
                      </label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Khối lớp
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
                    >
                      <option value="Lớp 10">Lớp 10</option>
                      <option value="Lớp 11">Lớp 11</option>
                      <option value="Lớp 12">Lớp 12</option>
                      <option value="Cựu học sinh">Cựu học sinh</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Email hoặc SĐT / Zalo (để nhận mã hẹn)
                    </label>
                    <input
                      type="text"
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      placeholder="email@example.com hoặc SĐT"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Điều bạn muốn gửi gắm trước (Không bắt buộc)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Bạn có thể viết ngắn gọn về điều đang làm bạn bận lòng nhất..."
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Dữ liệu đăng ký được mã hóa và bảo mật hoàn toàn theo quy chuẩn y tế học đường.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                >
                  <span>Xác nhận đặt lịch tư vấn</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

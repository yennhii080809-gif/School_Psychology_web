import React, { useState } from 'react';
import { Send, Heart, MessageCircle, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { SAMPLE_CONFESSIONS, ConfessionQA } from '../data/counselingData';

export const AnonymousLetterbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'read' | 'write'>('read');
  const [confessions, setConfessions] = useState<ConfessionQA[]>(SAMPLE_CONFESSIONS);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  
  // New letter form states
  const [newTitle, setNewTitle] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [newGrade, setNewGrade] = useState('Lớp 11');
  const [newContent, setNewContent] = useState('');
  const [submittedLetter, setSubmittedLetter] = useState(false);

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap({ ...likedMap, [id]: true });
    setConfessions(confessions.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item));
  };

  const handleSendLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    const newConfessionItem: ConfessionQA = {
      id: 'qa-' + Date.now(),
      title: newTitle || 'Lời gửi gắm từ bạn học sinh ẩn danh',
      studentTag: newNickname || 'Hạt Mầm Nhỏ',
      grade: newGrade,
      question: newContent,
      answer: 'Thầy cô đã nhận được lá thư của em. Chúng mình đang đọc thật kỹ và sẽ gửi lời hồi đáp riêng hoặc đăng tải lời gỡ rối lên góc tâm sự này sớm nhất nhé! Hãy giữ sức khỏe và nhớ rằng em không hề cô đơn.',
      counselorName: 'Giáo viên tư vấn học đường',
      date: 'Vừa xong',
      likes: 1,
    };

    setConfessions([newConfessionItem, ...confessions]);
    setSubmittedLetter(true);
    setTimeout(() => {
      setSubmittedLetter(false);
      setActiveTab('read');
      setNewTitle('');
      setNewNickname('');
      setNewContent('');
    }, 2500);
  };

  return (
    <section id="hop-thu-an-danh" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Hộp Thư Tâm Sự Ẩn Danh
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e486b] tracking-tight">
            Nơi Những Nỗi Lòng Được Thấu Hiểu
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Nếu bạn thấy ngập ngừng khi gặp trực tiếp, bạn có thể gửi một lá thư ẩn danh tại đây. Thầy cô sẽ đọc bằng cả sự trân trọng và phản hồi bạn.
          </p>

          {/* Tab buttons */}
          <div className="inline-flex flex-col xs:flex-row p-1.5 bg-slate-100 rounded-2xl mt-6 border border-slate-200 w-full xs:w-auto max-w-lg mx-auto">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'read'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Góc Gỡ Rối & Lời Khuyên</span>
            </button>
            <button
              onClick={() => setActiveTab('write')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'write'
                  ? 'bg-white text-[#1e486b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Send className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Gửi Tâm Sự Của Bạn</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Read confessions */}
        {activeTab === 'read' && (
          <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
            {confessions.map((item) => {
              const isLiked = likedMap[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-[#fcfdfc] border border-slate-200 rounded-3xl p-4 xs:p-6 sm:p-8 hover:shadow-sm transition-all"
                >
                  {/* Student Question / Confession */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-xs flex items-center justify-center">
                          {item.studentTag.slice(0, 1)}
                        </span>
                        <div>
                          <span className="text-sm font-bold text-slate-800">
                            {item.studentTag}
                          </span>
                          <span className="text-xs text-slate-500 ml-2">
                            ({item.grade}) • {item.date}
                          </span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                          isLiked
                            ? 'bg-rose-50 text-rose-600 border-rose-200'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-rose-200 hover:text-rose-600'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>Cảm thông ({item.likes})</span>
                      </button>
                    </div>

                    <h3 className="text-lg font-bold text-[#1e486b] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-100 italic">
                      "{item.question}"
                    </p>
                  </div>

                  {/* Counselor Response */}
                  <div className="bg-linear-to-r from-emerald-50/60 via-teal-50/40 to-slate-50 p-5 sm:p-6 rounded-2xl border border-teal-100">
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold text-teal-800 uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Lời hồi đáp của giáo viên tư vấn học đường</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Write confession */}
        {activeTab === 'write' && (
          <div className="bg-[#fcfdfc] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs animate-in fade-in duration-300">
            {submittedLetter ? (
              <div className="text-center py-12 animate-in zoom-in-95">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1e486b] mb-2">
                  Lá thư đã được gửi vào hộp thư bảo mật!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thầy cô cảm ơn em đã tin tưởng gửi gắm. Em hãy yên tâm nhé, mọi chia sẻ đều được trân trọng và giữ kín tuyệt đối.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendLetter} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1e486b] mb-1">
                    Gửi gắm lá thư tâm sự ẩn danh
                  </h3>
                  <p className="text-xs text-slate-500">
                    Không lưu lại IP, không cần đăng nhập. Bạn có thể tự đặt một biệt danh ngộ nghĩnh cho mình.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Biệt danh dễ thương của bạn
                    </label>
                    <input
                      type="text"
                      value={newNickname}
                      onChange={(e) => setNewNickname(e.target.value)}
                      placeholder="VD: Cỏ Ba Lá, Mây Mùa Thu..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Khối lớp
                    </label>
                    <select
                      value={newGrade}
                      onChange={(e) => setNewGrade(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    >
                      <option value="Lớp 10">Lớp 10</option>
                      <option value="Lớp 11">Lớp 11</option>
                      <option value="Lớp 12">Lớp 12</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tiêu đề bức thư
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="VD: Mình cảm thấy kiệt sức trước kỳ thi học kỳ..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nội dung tâm sự của bạn
                  </label>
                  <textarea
                    rows={6}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Hãy viết ra tất cả những gì bạn đang cảm thấy. Không có điều gì là ngớ ngẩn hay đáng xấu hổ ở đây cả..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white resize-y"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>🔒 Thư của bạn được bảo mật theo nguyên tắc đạo đức nghề tham vấn.</p>
                    <p>
                      Hoặc gửi trực tiếp tới email:{' '}
                      <a href="mailto:Nguyenthithuyvy.psychology@gmail.com" className="text-teal-700 hover:underline font-semibold">
                        Nguyenthithuyvy.psychology@gmail.com
                      </a>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#4a7c59] hover:bg-[#3d694a] text-white rounded-full font-bold text-sm shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi thư ngay</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

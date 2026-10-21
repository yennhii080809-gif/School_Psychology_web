export interface TopicInfo {
  id: string;
  title: string;
  shortDesc: string;
  iconType: 'book' | 'brain' | 'users' | 'home' | 'heart' | 'target' | 'sparkles' | 'mail';
  bgCircle: string;
  iconColor: string;
  borderColor: string;
  fullDesc: string;
  commonSigns: string[];
  helpfulTips: string[];
  actionType?: 'booking' | 'selfcare' | 'letterbox';
  actionText?: string;
  actionUrl?: string;
}

export const TOPICS: TopicInfo[] = [
  {
    id: 'academic-counseling',
    title: 'Tư vấn học tập',
    shortDesc: 'Phương pháp học tập hiệu quả, quản lý thời gian và vượt qua trì hoãn.',
    iconType: 'book',
    bgCircle: 'bg-[#e2f7e8]',
    iconColor: 'text-[#15803d]',
    borderColor: 'border-[#15803d]/20',
    fullDesc: 'Nếu bạn cảm thấy mất động lực, không tìm được cách học phù hợp, hay chật vật với khối lượng bài tập quá lớn, thầy cô tư vấn sẽ cùng bạn xây dựng thời gian biểu khoa học và phương pháp ghi nhớ phù hợp với bạn.',
    commonSigns: [
      'Cảm thấy quá tải trước lượng bài tập và kỳ thi',
      'Thường xuyên trì hoãn dù biết hạn nộp bài đã cận kề',
      'Mất tập trung, ngồi vào bàn học nhưng không vào đầu',
      'Khó cân bằng giữa việc học tập, hoạt động ngoại khóa và nghỉ ngơi',
    ],
    helpfulTips: [
      'Áp dụng kỹ thuật Pomodoro (học 25 phút, nghỉ ngắn 5 phút) để tạo nhịp điệu',
      'Chia nhỏ các dự án lớn thành từng việc cụ thể 15 phút',
      'Dọn dẹp góc học tập gọn gàng để giảm xao nhãng thị giác',
    ],
  },
  {
    id: 'study-pressure',
    title: 'Áp lực học tập',
    shortDesc: 'Căng thẳng thi cử, nỗi sợ điểm kém và kỳ vọng đè nặng.',
    iconType: 'brain',
    bgCircle: 'bg-[#e0f2fe]',
    iconColor: 'text-[#0284c7]',
    borderColor: 'border-[#0284c7]/20',
    fullDesc: 'Áp lực điểm số từ bản thân, thầy cô hay gia đình đôi khi biến việc học thành gánh nặng tâm lý ngột ngạt. Chúng mình luôn ở đây để giúp bạn giải tỏa âu lo và học cách đối diện với kỳ thi một cách bình tĩnh.',
    commonSigns: [
      'Tim đập nhanh, đau dạ dày hoặc mất ngủ trước mỗi buổi kiểm tra',
      'Ám ảnh với điểm số và luôn so sánh mình với bạn bè',
      'Cảm giác mình không đủ giỏi dù đã cố gắng hết sức',
      'Sợ hãi khi nghĩ về việc làm bố mẹ thất vọng',
    ],
    helpfulTips: [
      'Nhắc nhở bản thân: Điểm số là một cột mốc đánh giá nhất thời, không định nghĩa giá trị con người bạn',
      'Tập thở sâu 4-7-8 khi cảm thấy cơn hoảng loạn thi cử bắt đầu trỗi dậy',
      'Chia sẻ thật lòng cảm xúc này với người bạn tin cậy hoặc thầy cô tư vấn học đường',
    ],
  },
  {
    id: 'friendship-relationships',
    title: 'Quan hệ bạn bè',
    shortDesc: 'Xung đột, cảm giác bị cô lập, bắt nạt học đường và tình bạn.',
    iconType: 'users',
    bgCircle: 'bg-[#ffedd5]',
    iconColor: 'text-[#ea580c]',
    borderColor: 'border-[#ea580c]/20',
    fullDesc: 'Tuổi học trò đẹp nhất là khi có bạn bè, nhưng cũng dễ tổn thương nhất vì những hiểu lầm, tin đồn hay cảm giác lẻ loi trong tập thể. Góc tư vấn là nơi an toàn để bạn giãi bày mà không sợ bị phán xét hay tiết lộ.',
    commonSigns: [
      'Cảm thấy bị bỏ rơi, không thuộc về nhóm bạn nào trong lớp',
      'Xảy ra mâu thuẫn lớn, hiểu lầm với bạn thân mà không biết mở lời',
      'Là nạn nhân của việc tẩy chay, nói xấu hoặc bắt nạt học đường (kể cả trên mạng)',
      'Khó khăn trong việc kết bạn mới, cảm thấy tự ti khi giao tiếp',
    ],
    helpfulTips: [
      'Bạn không có nghĩa vụ phải làm hài lòng tất cả mọi người',
      'Nếu bị bắt nạt, hãy lưu lại bằng chứng và tìm kiếm sự trợ giúp từ thầy cô / phòng tư vấn ngay',
      'Tìm kiếm những người bạn chia sẻ chung sở thích thay vì cố ép mình vào một nhóm không phù hợp',
    ],
  },
  {
    id: 'family-difficulties',
    title: 'Khó khăn trong gia đình',
    shortDesc: 'Bất đồng thế hệ, xung đột gia đình và cảm giác không được thấu hiểu.',
    iconType: 'home',
    bgCircle: 'bg-[#f3e8ff]',
    iconColor: 'text-[#9333ea]',
    borderColor: 'border-[#9333ea]/20',
    fullDesc: 'Khoảng cách thế hệ, sự kỳ vọng quá mức hay những biến cố gia đình có thể khiến ngôi nhà không còn là nơi an bình. Thầy cô tư vấn sẽ lắng nghe và cùng bạn tháo gỡ những bế tắc trong giao tiếp với người thân.',
    commonSigns: [
      'Bố mẹ và bạn thường xuyên cãi vã, không thể nói chuyện quá 5 phút',
      'Cảm giác bố mẹ chỉ quan tâm đến thành tích chứ không lắng nghe cảm xúc của bạn',
      'Chịu áp lực từ các xung đột, cãi vã giữa các thành viên trong gia đình',
      'Cảm giác cô độc, lạc lõng ngay trong chính căn nhà của mình',
    ],
    helpfulTips: [
      'Thử viết thư hoặc tin nhắn bày tỏ tâm sự nếu đối thoại trực tiếp quá khó khăn',
      'Nhận biết rằng góc nhìn của thế hệ trước xuất phát từ trải nghiệm và lo âu của thời họ',
      'Dành cho bản thân một ranh giới cảm xúc an toàn để bảo vệ tâm lý cá nhân',
    ],
  },
  {
    id: 'emotions-personal-issues',
    title: 'Cảm xúc và các vấn đề cá nhân',
    shortDesc: 'Buồn bã kéo dài, lo âu, tự ti, khủng hoảng tuổi dậy thì và bản sắc.',
    iconType: 'heart',
    bgCircle: 'bg-[#ffe4e6]',
    iconColor: 'text-[#e11d48]',
    borderColor: 'border-[#e11d48]/20',
    fullDesc: 'Cảm xúc giống như thời tiết, đôi khi có những ngày mưa dông kéo dài. Khi bạn cảm thấy trống rỗng, mất hứng thú, hay tự ti về ngoại hình và bản thân, chúng mình luôn sẵn sàng ngồi bên cạnh bạn.',
    commonSigns: [
      'Cảm giác buồn vô cớ kéo dài trên 2 tuần liên tiếp',
      'Thay đổi đột ngột về giấc ngủ, khẩu vị ăn uống hoặc thói quen sinh hoạt',
      'Tự ti về ngoại hình, cơ thể hoặc băn khoăn về xu hướng tính dục, bản dạng giới',
      'Những suy nghĩ tiêu cực lặp đi lặp lại khiến bạn mệt mỏi kiệt sức',
    ],
    helpfulTips: [
      'Cho phép bản thân được yếu đuối – khóc không phải là biểu hiện của sự thất bại',
      'Thực hành viết nhật ký cảm xúc (Emotion Journaling) để xả bớt năng lượng nặng nề',
      'Đừng chịu đựng một mình – hãy đặt một buổi trò chuyện với chúng mình',
    ],
  },
  {
    id: 'career-future-orientation',
    title: 'Định hướng học tập, nghề nghiệp',
    shortDesc: 'Băn khoăn chọn khối thi, chọn ngành, tìm kiếm đam mê và thế mạnh.',
    iconType: 'target',
    bgCircle: 'bg-[#ccfbf1]',
    iconColor: 'text-[#0d9488]',
    borderColor: 'border-[#0d9488]/20',
    fullDesc: 'Trước ngưỡng cửa chọn tổ hợp môn, trường đại học hay nghề nghiệp tương lai, rất bình thường khi bạn thấy mông lung. Chúng mình sẽ hỗ trợ bạn làm các bài trắc nghiệm tính cách, sở thích và cùng vẽ nên lộ trình tương lai.',
    commonSigns: [
      'Chưa biết mình thích gì, giỏi gì hay phù hợp với ngành nghề nào',
      'Mâu thuẫn giữa sở thích cá nhân và mong muốn chọn ngành của bố mẹ',
      'Hoang mang trước quá nhiều thông tin tuyển sinh và thay đổi kỳ thi',
      'Lo lắng về cơ hội việc làm và tương lai sau khi ra trường',
    ],
    helpfulTips: [
      'Khám phá mô hình Holland (RIASEC) để đối chiếu giữa tính cách và nhóm nghề',
      'Trải nghiệm thực tế qua các câu lạc bộ, dự án nhỏ để hiểu rõ mình hơn',
      'Nhớ rằng hướng nghiệp là một hành trình liên tục, không phải một quyết định một lần là xong',
    ],
  },
  {
    id: 'goc-thu-gian',
    title: 'Góc thư giãn & tự chăm sóc',
    shortDesc: 'Giải tỏa căng thẳng, bài tập thở 4-7-8, trắc nghiệm stress và âm thanh êm dịu.',
    iconType: 'sparkles',
    bgCircle: 'bg-[#e0e7ff]',
    iconColor: 'text-[#4f46e5]',
    borderColor: 'border-[#4f46e5]/20',
    fullDesc: 'Khi học tập và cuộc sống trở nên quá tải, một khoảng lặng 5 phút để điều hòa nhịp thở và lắng nghe bản thân sẽ giúp bạn nạp lại năng lượng tích cực mà không cần dùng đến thuốc hay bất kỳ áp lực nào.',
    commonSigns: [
      'Căng thẳng dồn nén, đau mỏi vai gáy hoặc khó tập trung khi học',
      'Nhịp thở dồn dập, hồi hộp không rõ nguyên nhân',
      'Mất ngủ, trằn trọc suy nghĩ miên man trước giờ ngủ',
      'Cảm thấy kiệt sức (burnout) sau chuỗi ngày học thi liên tục',
    ],
    helpfulTips: [
      'Thực hiện bài tập thở sâu 4-7-8 để đưa nhịp tim và hệ thần kinh về trạng thái an bình',
      'Làm bài trắc nghiệm mức độ stress nhanh để hiểu rõ trạng thái tâm lý hiện tại',
      'Bật âm thanh mưa rơi hoặc sóng âm 432Hz chữa lành trong 10 phút trước khi bắt đầu bài học mới',
    ],
    actionType: 'selfcare',
    actionText: 'Đến Góc Thư Giãn & Tự Chăm Sóc',
    actionUrl: '#goc-thu-gian',
  },
  {
    id: 'hop-thu-an-danh',
    title: 'Hộp thư tâm sự ẩn danh',
    shortDesc: 'Gửi nỗi niềm thầm kín không cần để lại tên thật, nhận hồi đáp ân cần từ thầy cô.',
    iconType: 'mail',
    bgCircle: 'bg-[#fef3c7]',
    iconColor: 'text-[#d97706]',
    borderColor: 'border-[#d97706]/20',
    fullDesc: 'Nếu bạn có những khúc mắc chưa tiện nói trực tiếp hay còn ngại ngùng khi bước chân vào phòng tư vấn, hãy gửi một bức thư ẩn danh. Thầy cô luôn đọc từng lá thư với tất cả sự trân trọng và bảo mật tuyệt đối.',
    commonSigns: [
      'Có điều trăn trở thầm kín muốn nói nhưng ngại gặp mặt trực tiếp',
      'Sợ bị bạn bè hay thầy cô bộ môn phán xét hoặc chê cười',
      'Cần một lời khuyên chân thành và khách quan từ thầy cô tâm lý',
      'Muốn đọc câu chuyện của các bạn khác để thấy mình không hề đơn độc',
    ],
    helpfulTips: [
      'Đặt một biệt danh đáng yêu (như Hạt Mầm Nhỏ, Mây Trắng) để giữ kín danh tính',
      'Viết ra hết những điều bạn đang nghĩ, việc giãi bày bằng con chữ đã giúp nhẹ lòng đi 50%',
      'Kiểm tra lại mục "Góc Chia Sẻ" để đọc thư hồi đáp từ thầy cô tư vấn',
    ],
    actionType: 'letterbox',
    actionText: 'Mở Hộp Thư Tâm Sự Ẩn Danh',
    actionUrl: '#hop-thu-an-danh',
  },
];


export interface ConfessionQA {
  id: string;
  title: string;
  studentTag: string;
  grade: string;
  question: string;
  answer: string;
  counselorName: string;
  date: string;
  likes: number;
}

export const SAMPLE_CONFESSIONS: ConfessionQA[] = [
  {
    id: 'qa-1',
    title: 'Mình luôn cảm thấy mình là người kém cỏi nhất trong lớp chọn...',
    studentTag: 'Cỏ Bốn Lá',
    grade: 'Lớp 11',
    question: 'Em đỗ vào lớp chọn Toán, nhưng xung quanh các bạn đều giỏi vượt trội. Mỗi lần trả bài kiểm tra em chỉ được 6-7 điểm trong khi các bạn toàn 9-10. Em cảm thấy mình như kẻ giả mạo và rất sợ bị bố mẹ hỏi điểm. Em nên làm gì ạ?',
    answer: 'Chào em Cỏ Bốn Lá! Cảm giác em đang trải qua rất phổ biến và có tên gọi là "Hội chứng kẻ giả mạo" (Imposter Syndrome). Hãy nhớ rằng việc em có mặt ở lớp chuyên là minh chứng cho năng lực thực sự của em. Hãy ngừng so sánh trang 1 của mình với trang 20 của người khác. Mỗi lần làm bài, đối thủ duy nhất cần vượt qua là chính em của ngày hôm qua. Nếu cảm thấy quá tải, em có thể ghé phòng tư vấn ở lầu 3 gần dãy xã hội (trường THPT chuyên Nguyễn Đình Chiểu) bất kỳ lúc nào để thầy cô hướng dẫn em cách lập kế hoạch bổ trợ kiến thức nhé!',
    counselorName: 'Giáo viên tư vấn học đường',
    date: '2 ngày trước',
    likes: 42,
  },
  {
    id: 'qa-2',
    title: 'Bố mẹ muốn em thi Y, nhưng em chỉ đam mê Thiết kế Đồ họa',
    studentTag: 'Mèo Đi Lạc',
    grade: 'Lớp 12',
    question: 'Cả nhà em đều làm trong ngành y và bố mẹ đã định hướng em thi ĐH Y Dược từ cấp 2. Nhưng em thật sự không có cảm xúc với môn Sinh và chỉ muốn theo học ngành Thiết kế. Mỗi lần em đề cập là bố mẹ lại giận dữ nói em bồng bột. Em bế tắc quá...',
    answer: 'Thầy cô hiểu sự giằng xé trong lòng em lúc này. Bố mẹ mong muốn em theo ngành Y vì xuất phát từ tình yêu thương và mong muốn em có tương lai ổn định. Để đối thoại hiệu quả, thay vì chỉ nói "em thích vẽ", em hãy chuẩn bị một bản kế hoạch cụ thể: trường em muốn thi, cơ hội việc làm, học phí, các dự án em đã thử nghiệm. Sự nghiêm túc và chủ động sẽ giúp bố mẹ nhìn nhận em như một người trưởng thành có trách nhiệm. Thầy cô tại phòng tư vấn (lầu 3 gần dãy xã hội) rất sẵn lòng cùng em trao đổi và xây dựng kế hoạch này trước khi em nói chuyện với bố mẹ.',
    counselorName: 'Giáo viên tư vấn học đường',
    date: '4 ngày trước',
    likes: 67,
  },
  {
    id: 'qa-3',
    title: 'Bị bạn thân quay lưng và nói xấu với cả nhóm',
    studentTag: 'Hạt Nắng Mùa Thu',
    grade: 'Lớp 10',
    question: 'Đầu năm học em chơi rất thân với một bạn, nhưng sau một hiểu lầm nhỏ, bạn ấy đã tách em ra và kể những chuyện bí mật của em cho nhóm khác nghe. Đi học mỗi ngày với em giờ như cực hình vì cảm giác ai cũng nhìn mình xì xào...',
    answer: 'Thầy cô gửi tới em một cái ôm thật ấm. Sự phản bội từ người mình tin tưởng là vết thương rất đau đớn. Tuy nhiên, hành động mang chuyện bí mật đi rêu rao phản ánh tư cách của người đó, chứ không phản ánh giá trị của em. Đừng để hành động của người khác cướp mất niềm vui đến trường của mình. Hãy giữ thái độ lịch sự, đàng hoàng và mở rộng kết nối với những người bạn tích cực khác. Thầy cô luôn ở phòng tư vấn (lầu 3 gần dãy xã hội trường THPT chuyên Nguyễn Đình Chiểu) để cùng em đồng hành vượt qua giai đoạn này.',
    counselorName: 'Giáo viên tư vấn học đường',
    date: '1 tuần trước',
    likes: 89,
  },
];

export interface StressQuestion {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

export const STRESS_QUIZ: StressQuestion[] = [
  {
    id: 1,
    question: 'Trong 2 tuần qua, bạn có thường cảm thấy khó ngủ, trằn trọc hoặc thức giấc lúc nửa đêm không?',
    options: [
      { text: 'Hầu như không bao giờ', score: 0 },
      { text: 'Thỉnh thoảng (1-2 lần/tuần)', score: 1 },
      { text: 'Thường xuyên (3-5 lần/tuần)', score: 2 },
      { text: 'Gần như mỗi đêm', score: 3 },
    ],
  },
  {
    id: 2,
    question: 'Khi nghĩ về các bài kiểm tra, điểm số hay bài tập sắp tới, bạn cảm thấy:',
    options: [
      { text: 'Bình thường, có chút hồi hộp tích cực', score: 0 },
      { text: 'Hơi lo lắng nhưng vẫn kiểm soát được', score: 1 },
      { text: 'Rất căng thẳng, tim đập nhanh hoặc đau đầu', score: 2 },
      { text: 'Hoảng sợ, muốn trốn tránh hoặc buông xuôi', score: 3 },
    ],
  },
  {
    id: 3,
    question: 'Bạn có cảm thấy mất hứng thú với những sở thích mà trước đây bạn từng rất thích (chơi game, nghe nhạc, vẽ...)?',
    options: [
      { text: 'Vẫn vui vẻ tham gia bình thường', score: 0 },
      { text: 'Đôi lúc hơi mệt mỏi', score: 1 },
      { text: 'Khá thường xuyên cảm thấy chán nản', score: 2 },
      { text: 'Mất hoàn toàn cảm xúc, không muốn làm gì', score: 3 },
    ],
  },
  {
    id: 4,
    question: 'Bạn có người nào để tâm sự thật lòng khi gặp chuyện buồn hoặc bế tắc không?',
    options: [
      { text: 'Có, luôn có bạn bè hoặc gia đình lắng nghe', score: 0 },
      { text: 'Có 1-2 người nhưng thỉnh thoảng mới dám kể', score: 1 },
      { text: 'Rất khó để chia sẻ vì sợ phiền người khác', score: 2 },
      { text: 'Hoàn toàn không có ai, cảm thấy hoàn toàn cô độc', score: 3 },
    ],
  },
  {
    id: 5,
    question: 'Mức độ năng lượng và sự tập trung học tập của bạn hiện tại như thế nào?',
    options: [
      { text: 'Tốt, tràn đầy năng lượng', score: 0 },
      { text: 'Khá ổn, đôi lúc hơi uể oải', score: 1 },
      { text: 'Thường xuyên mệt mỏi, khó tập trung quá 15 phút', score: 2 },
      { text: 'Kiệt sức cả về thể chất lẫn tinh thần', score: 3 },
    ],
  },
];

const STORE_KEY = 'locale';

const listeners = new Set();

const dict = {
  'zh-Hant': {
    brand: '我的履歷',
    nav_home: '首頁',
    nav_about: '關於 / 自傳',
    nav_portfolio: '作品集',
    nav_experience: '工作經歷',
    nav_interests: '興趣',
    nav_skills: '技能',
    nav_education: '學歷',
    nav_contact: '聯絡',
    action_theme: '切換主題',
    action_lang: 'English',

    home_title: '首頁',
    home_subtitle: '快速認識你',
    home_hero_intro: '嗨！我是張念祥 (oxygensheep)',
    home_hero_desc: '具 15 年跨產業經驗，專長 AI 工具應用與營運管理，能整合自動化流程提升效率，並曾創業經營水族館 8 年，培養商業規劃與顧客經營能力。',
    home_cta_portfolio: '看作品集',
    home_cta_contact: '聯絡我',
    home_quick_links: '快速連結',
    home_quick_to: '前往常用分頁',

    about_title: '關於我',
    about_subtitle: '自我介紹',
    about_intro_1: '專長於 AI 工具應用與營運管理。能熟練運用 Google Apps Script、Power BI、Notion 與自動化流程，將繁瑣的資料管理與客服作業轉化為高效系統，減少人力成本並提升決策效率。',
    about_intro_2: '過去曾創業經營水族館 8 年，累積完整的商業規劃、顧客經營與數據思維能力。近期取得 TQC 人工智慧應用與技術（進階級）認證，並持續專注於 AI 與商務整合，致力於將創新科技落地到實際營運場景。',
    bio_title: '自傳',
    bio_subtitle: '更完整的故事',
    bio_p1: '我 15 歲投入建教合作，開始美髮學徒生涯，18 歲成為設計師。20 歲因獲免役身份擔任公司宿舍舍監，同時重返校園持續進修，但因工作繁忙，直到 2019 年才順利畢業。',
    bio_p2: '2015 年因準備轉考北商返家途中遭遇車禍，導致左手受傷，無法繼續從事美髮工作。其後我轉換跑道，創立並經營水族館 8 年，累積了完整的商業經營、顧客管理與營運規劃經驗。',
    bio_p3: '隨著店面租約到期，我將重心轉向數位轉型與科技應用，目前專注於 AI 導入與自動化流程的研究與實作，期望能結合過往跨產業經驗，創造新的價值。',

    portfolio_title: '作品集',
    portfolio_subtitle: '支援影片嵌入與卡片展示',
    work_a: 'LINE Bot 自動化系統',
    work_b: '本網站',
    work_c: '作品 C',
    work_a_desc: 'LINE Bot 可依照需求擴充其他功能',
    work_b_desc: '此網站與 AI 共構完成，並已連動 LINE Bot。',
    work_c_desc: '暫空。',

    exp_title: '工作經歷',
    exp_subtitle: '時間軸呈現重點經歷與成果',
    exp_1_title: '京采水族 負責人',
    exp_1_sub: '2015年9月 - 2025年3月',
    exp_1_detail: '負責水族館營運管理，包含水質管理、魚類飼養、客戶服務與業務推廣。建立專業水族知識體系，提供客戶專業諮詢服務。',
    exp_1_link: 'Facebook 粉絲專頁',
    exp_2_title: '小林髮廊 學徒+設計師',
    exp_2_sub: '2008年6月 - 2015年7月',
    exp_2_detail: '從學徒開始學習美髮技術，逐步晉升為設計師。負責客戶造型設計、髮型修剪與染燙服務，累積豐富的客戶服務經驗。',
    exp_3_title: '',
    exp_3_detail: '',

    interests_title: '興趣',
    interests_subtitle: '工作之外的我',
    hobby_read: '研究實作 AI 導入應用',
    hobby_read_desc: '關注把 AI 實際導入流程與專案，從概念到上線的可行做法。',
    hobby_sport: '音樂',
    hobby_sport_desc: '欣賞與創作音樂，包含 AI 輔助的音樂生成與編曲。',
    hobby_travel: '水族養觀賞魚',
    hobby_travel_desc: '研究水質與生態維護，實作缸造景與飼養管理。',

    skills_title: '技能',
    skills_subtitle: '標籤化呈現你的專長',

    edu_title: '學歷與證照',
    edu_subtitle: '重要教育背景與證照',

    contact_title: '聯絡',
    contact_subtitle: '歡迎與我交流',
    contact_location_label: '所在地',
    contact_location_value: '雙北基隆',
    contact_response_label: '回覆時效',
    contact_response_value: '1–2 個工作天內回覆',
    contact_line_title: '加 LINE',
    contact_line_hint: '掃描 QR 加好友，或提供您的需求，我將儘速回覆。',
    contact_line_button: '加 LINE',
    contact_form_name: '姓名',
    contact_form_email: 'Email',
    contact_form_message: '訊息',
    contact_math_label: '請計算下列加總（防濫用驗證）',
    contact_submit: '送出',
    contact_note: '暫無後端。你也可以直接寄信到：oxygensheep@gmail.com',

    footer_contact: '聯絡我',
  },
  en: {
    brand: 'My Resume',
    nav_home: 'Home',
    nav_about: 'About / Bio',
    nav_portfolio: 'Portfolio',
    nav_experience: 'Experience',
    nav_interests: 'Interests',
    nav_skills: 'Skills',
    nav_education: 'Education',
    nav_contact: 'Contact',
    action_theme: 'Toggle Theme',
    action_lang: '繁體中文',

    home_title: 'Home',
    home_subtitle: 'Get to know me quickly',
    home_hero_intro: "Hi! I'm Zhang Nian-Xiang (oxygensheep)",
    home_hero_desc: 'With 15 years of cross-industry experience, specializing in AI tool applications and operations management. Capable of integrating automated processes to improve efficiency, and previously founded and operated an aquarium business for 8 years, developing business planning and customer relationship management skills.',
    home_cta_portfolio: 'View Portfolio',
    home_cta_contact: 'Contact Me',
    home_quick_links: 'Quick Links',
    home_quick_to: 'Go to frequently used pages',

    about_title: 'About Me',
    about_subtitle: 'Introduction',
    about_intro_1: 'Specialized in AI tool applications and operations management. Proficient in Google Apps Script, Power BI, Notion, and automated workflows, transforming complex data management and customer service operations into efficient systems, reducing labor costs and improving decision-making efficiency.',
    about_intro_2: 'Previously founded and operated an aquarium business for 8 years, accumulating comprehensive business planning, customer relationship management, and data-driven thinking capabilities. Recently obtained TQC Artificial Intelligence Application and Technology (Advanced Level) certification, continuously focusing on AI and business integration, committed to implementing innovative technology in real operational scenarios.',
    bio_title: 'Autobiography',
    bio_subtitle: 'The full story',
    bio_p1: 'At age 15, I began a cooperative education program, starting my journey as a hairdressing apprentice and becoming a designer at 18. At 20, due to military exemption status, I served as a company dormitory supervisor while returning to school for further education, though due to work commitments, I didn\'t graduate until 2019.',
    bio_p2: 'In 2015, while preparing to transfer to National Taipei University of Business, I was involved in a car accident on my way home, resulting in left hand injury that prevented me from continuing hairdressing work. Subsequently, I pivoted and founded and operated an aquarium business for 8 years, accumulating comprehensive business management, customer service, and operational planning experience.',
    bio_p3: 'As the store lease expired, I shifted focus to digital transformation and technology applications, currently concentrating on AI implementation and automated workflow research and practice, hoping to combine past cross-industry experience to create new value.',

    portfolio_title: 'Portfolio',
    portfolio_subtitle: 'Video embeds and card layout',
    work_a: 'LINE Bot Automation System',
    work_b: 'This Website',
    work_c: 'Project C',
    work_a_desc: 'LINE Bot can be expanded with additional features as needed',
    work_b_desc: 'This site was co-created with AI and integrates with a LINE Bot.',
    work_c_desc: 'TBD.',

    exp_title: 'Experience',
    exp_subtitle: 'Timeline of roles and achievements',
    exp_1_title: 'JingCai Aquarium Owner',
    exp_1_sub: 'Sep 2015 - Mar 2025',
    exp_1_detail: 'Managed aquarium operations including water quality management, fish care, customer service, and business promotion. Built professional aquatic knowledge system and provided expert consultation services.',
    exp_1_link: 'Facebook Page',
    exp_2_title: 'XiaoLin Hair Salon Apprentice + Designer',
    exp_2_sub: 'Jun 2008 - Jul 2015',
    exp_2_detail: 'Started as apprentice learning hairdressing techniques, gradually promoted to designer. Responsible for client styling, hair cutting, coloring and perming services, accumulated rich customer service experience.',
    exp_3_title: '',
    exp_3_detail: '',

    interests_title: 'Interests',
    interests_subtitle: 'Beyond work',
    hobby_read: 'Applied AI Implementation',
    hobby_read_desc: 'Hands-on applying AI to workflows and projects, from idea to production.',
    hobby_sport: 'Music',
    hobby_sport_desc: 'Listening and creating; exploring AI-assisted composition and production.',
    hobby_travel: 'Aquarium Fishkeeping',
    hobby_travel_desc: 'Water parameters, ecosystem care, aquascaping, and husbandry practices.',

    skills_title: 'Skills',
    skills_subtitle: 'Your expertise as tags',

    edu_title: 'Education & Certificates',
    edu_subtitle: 'Key education and certifications',

    contact_title: 'Contact',
    contact_subtitle: 'Happy to connect',
    contact_location_label: 'Location',
    contact_location_value: 'Taipei & Keelung',
    contact_response_label: 'Response time',
    contact_response_value: 'Reply within 1–2 business days',
    contact_line_title: 'Add LINE',
    contact_line_hint: 'Scan the QR to add me, or share your needs and I\'ll reply soon.',
    contact_line_button: 'Add on LINE',
    contact_form_name: 'Name',
    contact_form_email: 'Email',
    contact_form_message: 'Message',
    contact_math_label: 'Please solve the sum (anti-abuse)',
    contact_submit: 'Submit',
    contact_note: 'No backend yet. Or email me at: oxygensheep@gmail.com',

    footer_contact: 'Contact',
  }
};

let current = localStorage.getItem(STORE_KEY) || 'zh-Hant';

export function getLocale(){
  return current;
}

export function setLocale(locale){
  if (!dict[locale]) return;
  current = locale;
  localStorage.setItem(STORE_KEY, current);
  listeners.forEach(cb => cb(current));
}

export function t(key){
  return (dict[current] && dict[current][key]) || key;
}

export function onLocaleChange(cb){
  listeners.add(cb);
  return () => listeners.delete(cb);
}



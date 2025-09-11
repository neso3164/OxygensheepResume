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
    home_hero_intro: '嗨！我是［你的名字］',
    home_hero_desc: '這裡是一句話自我介紹，放上你的職稱與專長。稍後你可以把內文替換為真實資訊。',
    home_cta_portfolio: '看作品集',
    home_cta_contact: '聯絡我',
    home_quick_links: '快速連結',
    home_quick_to: '前往常用分頁',

    about_title: '關於我',
    about_subtitle: '自我介紹',
    about_intro_1: '這裡放自我介紹精華：你的領域、價值、擅長工具與成果亮點。',
    about_intro_2: '稍後你可把這些文字換成真實內容。',
    bio_title: '自傳',
    bio_subtitle: '更完整的故事',
    bio_p1: '在這裡撰寫你的自傳：成長背景、學習歷程、動機與願景。可分多段落，描述你如何面對挑戰並產出成果。',
    bio_p2: '你也可以加入關鍵里程碑，或連結到相關作品。',

    portfolio_title: '作品集',
    portfolio_subtitle: '支援影片嵌入與卡片展示',
    work_a: '作品 A',
    work_b: '作品 B',
    work_c: '作品 C',
    work_a_desc: '簡介：此處稍後替換為真實專案說明。',
    work_b_desc: '可以放截圖或影片嵌入。',
    work_c_desc: '支援本機影片：改為 <video>，見 README。',

    exp_title: '工作經歷',
    exp_subtitle: '時間軸呈現重點經歷與成果',
    exp_1_title: '公司/職稱',
    exp_1_sub: '城市 · 部門',
    exp_1_detail: '負責 A/B/C，達成 X 指標。',
    exp_2_title: '公司/職稱',
    exp_2_sub: '城市 · 團隊',
    exp_2_detail: '主導專案，與跨部門合作。',
    exp_3_title: '公司/職稱',
    exp_3_detail: '支援系統維運與功能開發。',

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
    contact_form_name: '姓名',
    contact_form_email: 'Email',
    contact_form_message: '訊息',
    contact_submit: '送出（目前為示意）',
    contact_note: '暫無後端。你也可以直接寄信到：you@example.com',

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
    home_hero_intro: "Hi! I'm [Your Name]",
    home_hero_desc: 'One-line self intro with role and strengths. Replace later.',
    home_cta_portfolio: 'View Portfolio',
    home_cta_contact: 'Contact Me',
    home_quick_links: 'Quick Links',
    home_quick_to: 'Go to frequently used pages',

    about_title: 'About Me',
    about_subtitle: 'Introduction',
    about_intro_1: 'Put highlights here: domain, value, tools, notable results.',
    about_intro_2: 'Replace with your real content later.',
    bio_title: 'Autobiography',
    bio_subtitle: 'The full story',
    bio_p1: 'Write your bio: background, learning journey, motivation, vision. Describe challenges and outcomes.',
    bio_p2: 'Add milestones or link to related work.',

    portfolio_title: 'Portfolio',
    portfolio_subtitle: 'Video embeds and card layout',
    work_a: 'Project A',
    work_b: 'Project B',
    work_c: 'Project C',
    work_a_desc: 'Brief: replace with actual project description later.',
    work_b_desc: 'Use screenshots or embedded videos.',
    work_c_desc: 'Local video supported: switch to <video>, see README.',

    exp_title: 'Experience',
    exp_subtitle: 'Timeline of roles and achievements',
    exp_1_title: 'Company / Title',
    exp_1_sub: 'City · Dept',
    exp_1_detail: 'Owned A/B/C, achieved X KPI.',
    exp_2_title: 'Company / Title',
    exp_2_sub: 'City · Team',
    exp_2_detail: 'Led projects and cross-functional collab.',
    exp_3_title: 'Company / Title',
    exp_3_detail: 'Supported ops and feature delivery.',

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
    contact_form_name: 'Name',
    contact_form_email: 'Email',
    contact_form_message: 'Message',
    contact_submit: 'Submit (demo only)',
    contact_note: 'No backend yet. Or email me at: you@example.com',

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



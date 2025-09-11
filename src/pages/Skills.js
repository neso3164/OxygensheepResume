import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function SkillsPage(){
  const wrap = document.createElement('div');
  wrap.className = 'stack';

  // Utility to create star ratings like ★★★★☆
  const stars = (count) => '★★★★★'.split('').map((s,i)=> i < count ? '★' : '☆').join('');

  // Groups
  const groups = [
    {
      title: 'AI / 自動化',
      items: [
        { name: 'AI 工具應用', level: 4, desc: '善於使用 GPT、Suno、Ideogram、WAN AI 等 AI 工具完成任務（文字、圖片、音樂、影片）。' },
        { name: 'AI 導入與流程設計', level: 3, desc: '能規劃 LINE Bot + Webhook + Make.com 自動化客服/資料管理流程。' },
        { name: '資料分析 AI 應用', level: 3, desc: 'TQC 人工智慧應用與技術（進階級）證照。能用 AI 協助 SPSS、Excel、Power BI 做數據整理與視覺化。' },
      ]
    },
    {
      title: '程式設計 / 自動化工具',
      items: [
        { name: 'Google Apps Script (GAS)', level: 3, desc: '會寫中階程式，能操作 Logger、Webhook、Google Sheets 自動化。' },
        { name: 'Make.com (Integromat)', level: 3, desc: '能整合 LINE Bot、Gmail、Webhook，搭建自動化工作流。' },
        { name: 'Python 基礎', level: 2, desc: '瞭解基本語法，能處理小型資料/網站程式碼。' },
      ]
    },
    {
      title: '商業經營 / 管理',
      items: [
        { name: '水族館創業經驗', level: 5, desc: '八年實務：進貨、養殖管理、顧客服務、行銷推廣、財務規劃。' },
        { name: '團隊管理 / 培訓', level: 4, desc: '七年美髮產業儲備幹部，訓練員工、處理突發狀況、與客戶溝通。' },
        { name: '財務規劃 / 風險管理', level: 3, desc: '能做風險矩陣、ICE 打分、回本週期規劃。' },
      ]
    },
    {
      title: '數據與商業智能 (BI)',
      items: [
        { name: 'Power BI', level: 3, desc: '結業：Power BI 數位商務與 AI 驅動數據分析培訓班。' },
        { name: 'Excel / Google Sheets', level: 4, desc: '能建立公式、圖表、自動化報表。' },
        { name: 'SPSS / Tableau', level: 3, desc: '有基礎操作經驗，能處理問卷數據、繪製統計圖。' },
      ]
    },
    {
      title: '設計 / 創意製作',
      items: [
        { name: 'AI 藝術 / 貼圖設計', level: 4, desc: '能製作 LINE 貼圖、3D 打印模型、角色形象。' },
        { name: '影片 / 音樂創作', level: 3, desc: '使用 Suno AI、WAN AI 等產出音樂、影片。' },
        { name: '網頁基礎 (HTML/CSS)', level: 2, desc: '能製作簡單個人履歷網頁並修改背景/圖片。' },
      ]
    },
    {
      title: '硬體 / 技術整合',
      items: [
        { name: '電腦硬體組裝與除錯', level: 4, desc: '能自行配備 CPU、主機板、RAM、SSD/HDD、顯卡，解決相容與驅動問題。' },
        { name: '網路與藍牙排查', level: 3, desc: '能調整 Wi-Fi、藍牙干擾問題，解決控制器、設備連線異常。' },
      ]
    }
  ];

  // Render groups
  groups.forEach(group => {
    const card = document.createElement('div');
    card.className = 'skill-card skill-group';
    const h3 = document.createElement('h3'); h3.textContent = group.title;
    card.appendChild(h3);

    const grid = document.createElement('div');
    grid.className = 'skill-grid';
    group.items.forEach(it => {
      const item = document.createElement('div');
      item.className = 'skill-item';

      const top = document.createElement('div');
      top.className = 'row-top';
      const title = document.createElement('div'); title.className = 'title'; title.textContent = it.name;
      const starEl = document.createElement('div'); starEl.className = 'stars'; starEl.textContent = stars(it.level);
      top.appendChild(title); top.appendChild(starEl);

      const desc = document.createElement('p'); desc.className = 'skill-desc'; desc.textContent = it.desc;

      item.appendChild(top); item.appendChild(desc);
      grid.appendChild(item);
    });

    card.appendChild(grid);
    wrap.appendChild(card);
  });

  const s = Section({ title: t('skills_title'), subtitle: t('skills_subtitle'), children: wrap });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



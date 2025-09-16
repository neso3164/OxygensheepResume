import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { VideoEmbed } from '../components/VideoEmbed.js';
import { t } from '../i18n.js';

export function PortfolioPage(){
  const grid = document.createElement('div');
  grid.className = 'cards';

  const items = [
    { title: t('work_d'), description: t('work_d_desc'), video: 'https://www.youtube.com/embed/DI825eDJuuI' },
    { title: t('work_a'), description: t('work_a_desc'), video: 'https://www.youtube.com/embed/OUy5wP4zzgM' },
    {
      title: '豬仔AI小窗（網頁右下角）',
      description: `### 功能
      - 即時對話助理，依照**技能能力描述檔**回覆。
      - 幫助訪客快速理解念祥的專業技能與服務內容。

      ### 狀態
      - 已完成 MVP（最小可行產品）。
      - 部署於履歷網站右下角，能穩定回覆問題。
      - 正在持續優化語氣、回答精準度。

      ### 情境（Situation）
      - 履歷網站只有靜態文字，訪客缺乏互動體驗。
      - 需要一個專屬助理，能替念祥即時回答問題並介紹專業背景。

      ### 行動（Action）
      - 規劃「提示詞 + 技能能力描述檔」模組架構，方便持續更新。
      - 使用 GPT-4.1 mini + Web 小視窗 + Webhook + Make.com 建立閉環回覆系統。
      - 設計「婉轉回覆原則」與「精簡規則」，讓 BOT 保持人性化互動。

      ### 成果（Result）
      - 成功上線「豬仔 AI 小窗」，訪客能即時互動並理解念祥的技能與成效。
      - 降低履歷網站跳出率，提升作品集的吸引力。
      - 架構具備可擴充性，能快速新增技能檔或整合更多模組。`
    },
    { title: t('work_c'), description: t('work_c_desc'), video: 'https://www.youtube.com/embed/D7vvfshkZZU' },
    { title: t('work_b'), description: t('work_b_desc') },
  ];

  items.forEach(it => {
    let media = null;
    if (it.video){
      media = VideoEmbed({ src: it.video, title: it.title });
    }
    const card = Card({ title: it.title, description: it.description, media });
    grid.appendChild(card);
  });

  const s = Section({ title: t('portfolio_title'), subtitle: t('portfolio_subtitle'), children: grid });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



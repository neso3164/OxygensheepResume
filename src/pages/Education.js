import { Section } from '../components/Section.js';
import { TimelineItem } from '../components/TimelineItem.js';
import { t } from '../i18n.js';

export function EducationPage(){
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  const items = [
    { period: '2019', title: '台北商業大學 · 應用外語系', subtitle: '專科畢業', details: '' },
  ];
  items.forEach(it => timeline.appendChild(TimelineItem(it)));

  const s = Section({ title: t('edu_title'), subtitle: t('edu_subtitle'), children: timeline });
  const el = document.createElement('div');
  el.appendChild(s);

  // Certificates (images will render in the provided order)
  const certs = [
    { title: 'TQC-DK 人工智慧應用與技術（進階級）', src: 'assets/certificates/tqc-ai-advanced.png' },
    { title: 'Google Analytics Certification', src: 'assets/certificates/google-analytics-2025.png' },
    { title: 'Google Ads：AI 技術輔助高效廣告認證', src: 'assets/certificates/google-ads-ai-performance-2025.png' },
    { title: 'Google Ads：AI 技術輔助購物廣告認證', src: 'assets/certificates/google-ads-shopping-ai-2025.png' },
    { title: 'Google Ads 多媒體廣告認證（Display）', src: 'assets/certificates/google-ads-display-2025.png' },
  ];

  const certGrid = document.createElement('div');
  certGrid.className = 'cards';
  certs.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = c.src;
    img.alt = c.title;
    img.className = 'cert-image';
    const caption = document.createElement('div');
    caption.style.marginTop = '8px';
    caption.className = 'cert-caption';
    caption.textContent = c.title;
    card.appendChild(img);
    card.appendChild(caption);
    certGrid.appendChild(card);
  });

  const certSection = Section({ title: '技術證照', subtitle: 'Certificates', alt: true, children: certGrid });
  el.appendChild(certSection);
  return { el };
}



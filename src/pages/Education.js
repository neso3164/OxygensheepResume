import { Section } from '../components/Section.js';
import { TimelineItem } from '../components/TimelineItem.js';
import { t } from '../i18n.js';

export function EducationPage(){
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  const items = [
    { period: '2015 - 2019', title: '某某大學 · 資訊工程學系', subtitle: '學士', details: '主修軟體工程、資料結構與演算法。' },
    { period: '2020', title: 'Google 認證 / 其他證照', subtitle: '', details: '證照或課程說明。' },
  ];
  items.forEach(it => timeline.appendChild(TimelineItem(it)));

  const s = Section({ title: t('edu_title'), subtitle: t('edu_subtitle'), children: timeline });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



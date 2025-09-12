import { Section } from '../components/Section.js';
import { TimelineItem } from '../components/TimelineItem.js';
import { t } from '../i18n.js';

export function ExperiencePage(){
  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const items = [
    { 
      period: '2015年9月 - 2025年3月', 
      title: t('exp_1_title'), 
      subtitle: t('exp_1_sub'), 
      details: t('exp_1_detail'),
      link: {
        url: 'https://www.facebook.com/JingCaiAquarium/?locale=zh_TW',
        text: t('exp_1_link')
      }
    },
    { 
      period: '2008年6月 - 2015年7月', 
      title: t('exp_2_title'), 
      subtitle: t('exp_2_sub'), 
      details: t('exp_2_detail') 
    },
  ];

  items.forEach(it => timeline.appendChild(TimelineItem(it)));

  const s = Section({ title: t('exp_title'), subtitle: t('exp_subtitle'), children: timeline });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



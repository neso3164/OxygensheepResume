import { Section } from '../components/Section.js';
import { TimelineItem } from '../components/TimelineItem.js';
import { t } from '../i18n.js';

export function ExperiencePage(){
  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const items = [
    { period: '2023 - Present', title: t('exp_1_title'), subtitle: t('exp_1_sub'), details: t('exp_1_detail') },
    { period: '2021 - 2023', title: t('exp_2_title'), subtitle: t('exp_2_sub'), details: t('exp_2_detail') },
    { period: '2019 - 2021', title: t('exp_3_title'), details: t('exp_3_detail') },
  ];

  items.forEach(it => timeline.appendChild(TimelineItem(it)));

  const s = Section({ title: t('exp_title'), subtitle: t('exp_subtitle'), children: timeline });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



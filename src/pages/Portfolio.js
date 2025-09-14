import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { VideoEmbed } from '../components/VideoEmbed.js';
import { t } from '../i18n.js';

export function PortfolioPage(){
  const grid = document.createElement('div');
  grid.className = 'cards';

  const items = [
    { title: t('work_a'), description: t('work_a_desc'), video: 'https://www.youtube.com/embed/OUy5wP4zzgM' },
    { title: t('work_b'), description: t('work_b_desc') },
    { title: t('work_c'), description: t('work_c_desc'), video: 'https://www.youtube.com/embed/D7vvfshkZZU' },
    { title: t('work_d'), description: t('work_d_desc'), video: 'https://www.youtube.com/embed/DI825eDJuuI' },
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



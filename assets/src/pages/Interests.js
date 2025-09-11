import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function InterestsPage(){
  const grid = document.createElement('div');
  grid.className = 'cards';

  const interests = [
    { title: t('hobby_read'), description: t('hobby_read_desc') },
    { title: t('hobby_sport'), description: t('hobby_sport_desc') },
    { title: t('hobby_travel'), description: t('hobby_travel_desc') },
  ];

  interests.forEach(it => {
    const card = document.createElement('div');
    card.className = 'card stack';
    const h3 = document.createElement('h3'); h3.textContent = it.title;
    const p = document.createElement('p'); p.className = 'muted'; p.textContent = it.description;
    card.appendChild(h3); card.appendChild(p); grid.appendChild(card);
  });

  const s = Section({ title: t('interests_title'), subtitle: t('interests_subtitle'), children: grid });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



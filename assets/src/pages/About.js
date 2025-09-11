import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function AboutPage(){
  const intro = document.createElement('div');
  intro.className = 'stack';
  intro.innerHTML = `
    <p>${t('about_intro_1')}</p>
    <p class="muted">${t('about_intro_2')}</p>
  `;
  const s1 = Section({ title: t('about_title'), subtitle: t('about_subtitle'), children: intro });

  const bio = document.createElement('div');
  bio.className = 'stack';
  bio.innerHTML = `
    <h3>${t('bio_title')}</h3>
    <p>${t('bio_p1')}</p>
    <p>${t('bio_p2')}</p>
  `;
  const s2 = Section({ title: t('bio_title'), subtitle: t('bio_subtitle'), alt: true, children: bio });

  const el = document.createElement('div');
  el.appendChild(s1);
  el.appendChild(s2);
  return { el };
}



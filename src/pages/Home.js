import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function HomePage(){
  const heroContent = document.createElement('div');
  heroContent.className = 'grid-2';
  const left = document.createElement('div');
  left.className = 'stack';
  left.innerHTML = `
    <h1>${t('home_hero_intro')}</h1>
    <p class="muted">${t('home_hero_desc')}</p>
    <div class="row">
      <a class="btn" href="#/portfolio">${t('home_cta_portfolio')}</a>
      <a class="btn" href="#/contact">${t('home_cta_contact')}</a>
    </div>
  `;
  const right = document.createElement('div');
  right.className = 'stack';
  right.innerHTML = `
    <div class="card" style="display:flex; align-items:center; justify-content:center;">
      <img src="assets/ME.jpg" alt="我的照片" style="width:220px; height:220px; object-fit:cover; border-radius:16px; border:1px solid var(--border)" />
    </div>
  `;
  heroContent.appendChild(left);
  heroContent.appendChild(right);

  const hero = Section({ title: t('home_title'), subtitle: t('home_subtitle'), children: heroContent });

  const quickLinksWrap = document.createElement('div');
  quickLinksWrap.className = 'cards';
  const links = [
    { href: '#/about', label: t('nav_about') },
    { href: '#/experience', label: t('nav_experience') },
    { href: '#/skills', label: t('nav_skills') },
  ];
  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.href;
    a.className = 'card';
    a.textContent = l.label;
    quickLinksWrap.appendChild(a);
  });
  const quick = Section({ title: t('home_quick_links'), subtitle: t('home_quick_to'), alt: true, children: quickLinksWrap });

  const el = document.createElement('div');
  el.appendChild(hero);
  el.appendChild(quick);
  return { el };
}



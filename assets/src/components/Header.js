import { t, getLocale, setLocale } from '../i18n.js';

export function Header(){
  const el = document.createElement('header');
  el.className = 'site-header';

  const nav = document.createElement('div');
  nav.className = 'nav container';

  const brand = document.createElement('a');
  brand.href = '#/';
  brand.className = 'brand';
  brand.innerHTML = `<span class="logo" aria-hidden="true"></span><span class="title">${t('brand')}</span>`;

  const links = [
    { href: '#/', label: t('nav_home') },
    { href: '#/about', label: t('nav_about') },
    { href: '#/portfolio', label: t('nav_portfolio') },
    { href: '#/experience', label: t('nav_experience') },
    { href: '#/interests', label: t('nav_interests') },
    { href: '#/skills', label: t('nav_skills') },
    { href: '#/education', label: t('nav_education') },
    { href: '#/contact', label: t('nav_contact') },
  ];

  const navLinks = document.createElement('nav');
  navLinks.className = 'nav-links';
  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    a.setAttribute('data-nav', '');
    navLinks.appendChild(a);
  });

  const actions = document.createElement('div');
  actions.className = 'nav-actions';
  const themeBtn = document.createElement('button');
  themeBtn.className = 'btn';
  themeBtn.textContent = t('action_theme');
  themeBtn.addEventListener('click', () => {
    const root = document.getElementById('app');
    const isLight = root.classList.toggle('theme-light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
  actions.appendChild(themeBtn);

  const langBtn = document.createElement('button');
  langBtn.className = 'btn';
  langBtn.textContent = t('action_lang');
  langBtn.addEventListener('click', () => {
    const next = getLocale() === 'zh-Hant' ? 'en' : 'zh-Hant';
    setLocale(next);
  });
  actions.appendChild(langBtn);

  nav.appendChild(brand);
  nav.appendChild(navLinks);
  nav.appendChild(actions);
  el.appendChild(nav);

  return { el };
}



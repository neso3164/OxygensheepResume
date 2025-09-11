import { createRouter } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { onLocaleChange } from './i18n.js';

import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { PortfolioPage } from './pages/Portfolio.js';
import { ExperiencePage } from './pages/Experience.js';
import { InterestsPage } from './pages/Interests.js';
import { SkillsPage } from './pages/Skills.js';
import { EducationPage } from './pages/Education.js';
import { ContactPage } from './pages/Contact.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/portfolio': PortfolioPage,
  '/experience': ExperiencePage,
  '/interests': InterestsPage,
  '/skills': SkillsPage,
  '/education': EducationPage,
  '/contact': ContactPage,
};

function ensureThemeClass(root) {
  const saved = localStorage.getItem('theme') || 'dark';
  root.classList.toggle('theme-light', saved === 'light');
}

function render() {
  const root = document.getElementById('app');
  root.innerHTML = '';

  ensureThemeClass(root);

  const header = Header({ routes: Object.keys(routes) });
  root.appendChild(header.el);

  const outlet = document.createElement('main');
  outlet.id = 'view';
  root.appendChild(outlet);

  const footer = Footer();
  root.appendChild(footer.el);

  const router = createRouter({ routes, outlet });
  router.start();
  onLocaleChange(() => router.start());
}

window.addEventListener('DOMContentLoaded', render);



import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function ContactPage(){
  const form = document.createElement('form');
  form.className = 'stack card';
  form.innerHTML = `
    <label>${t('contact_form_name')}<input required name="name" class="btn" style="width:100%"></label>
    <label>${t('contact_form_email')}<input required type="email" name="email" class="btn" style="width:100%"></label>
    <label>${t('contact_form_message')}<textarea required name="message" class="btn" style="width:100%; min-height:120px"></textarea></label>
    <button class="btn" type="submit">${t('contact_submit')}</button>
    <p class="muted">${t('contact_note')}</p>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('感謝留言！稍後可接上表單服務或 Email Link。');
    form.reset();
  });

  const s = Section({ title: t('contact_title'), subtitle: t('contact_subtitle'), children: form });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



import { Section } from '../components/Section.js';
import { t } from '../i18n.js';

export function ContactPage(){
  // Info bar: location and response time
  const info = document.createElement('div');
  info.className = 'row card';
  info.style = 'justify-content:space-between; align-items:center; gap:12px;';
  info.innerHTML = `
    <div><strong>${t('contact_location_label')}：</strong>${t('contact_location_value')}</div>
    <div><strong>${t('contact_response_label')}：</strong>${t('contact_response_value')}</div>
  `;

  // LINE QR section
  const line = document.createElement('div');
  line.className = 'card stack';
  line.innerHTML = `
    <h3>${t('contact_line_title')}</h3>
    <div class="row" style="align-items:center; gap:16px; flex-wrap:wrap;">
      <div id="line-qr-slot"></div>
      <p class="muted" style="flex:1 1 200px;">${t('contact_line_hint')}</p>
    </div>
  `;
  const qrSlot = line.querySelector('#line-qr-slot');
  const img = document.createElement('img');
  img.alt = 'LINE QR';
  img.style = 'width:140px; height:140px; object-fit:cover; border-radius:8px; border:1px solid var(--border)';
  const cacheBust = `?v=${Date.now()}`;
  const candidates = [
    'assets/line-qr.png',
    'assets/line-qr.jpg',
    'assets/line-qr.jpeg',
    'assets/line-qr.PNG',
    'assets/line-qr.JPG'
  ].map(p => `${p}${cacheBust}`);
  let idx = 0;
  const tryNext = () => {
    if (idx < candidates.length){
      img.src = candidates[idx++];
    } else {
      const warn = document.createElement('p');
      warn.className = 'muted';
      warn.textContent = '找不到 QR 圖片：請確認檔案位於 assets/ 並命名為 line-qr.(png|jpg|jpeg)';
      qrSlot.appendChild(warn);
    }
  };
  img.onerror = tryNext;
  img.onload = () => {
    const ok = document.createElement('p');
    ok.className = 'muted';
    ok.textContent = `已載入：${img.src.replace(window.location.origin, '')}`;
    qrSlot.appendChild(ok);
  };
  tryNext();
  qrSlot.appendChild(img);

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
    const fd = new FormData(form);

    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    const payload = {
      keyword: '履歷網頁來信',
      name,
      email,
      message,
      source: 'contact-form',
      url: location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };
    const formEncoded = new URLSearchParams(payload).toString();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '送出中…';
    }

    const webhookUrl = 'https://hook.us2.make.com/qhnmx6dyldf5y99lhfpvv6cankm2pi27';

    const finalize = (ok) => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '送出';
      }
      if (ok) {
        alert('已送出！我會盡快回覆您。');
        form.reset();
      } else {
        alert('送出時發生問題，請稍後再試或直接寄信。');
      }
    };

    try {
      // Prefer sendBeacon for CORS-safe, fire-and-forget delivery
      if (navigator.sendBeacon) {
        const blob = new Blob([formEncoded], { type: 'application/x-www-form-urlencoded;charset=UTF-8' });
        const ok = navigator.sendBeacon(webhookUrl, blob);
        finalize(ok);
        return;
      }
      // Fallback to fetch with no-cors using form encoding (simple request)
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: formEncoded,
        mode: 'no-cors',
        keepalive: true
      })
      .then(() => finalize(true))
      .catch(() => finalize(false));
    } catch (err) {
      finalize(false);
    }
  });

  const wrap = document.createElement('div');
  wrap.className = 'stack';
  wrap.appendChild(info);
  wrap.appendChild(form);
  wrap.appendChild(line);

  const s = Section({ title: t('contact_title'), subtitle: t('contact_subtitle'), children: wrap });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



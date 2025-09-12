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
    <!-- honeypot field (hidden to humans) -->
    <div style="position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden;">
      <label>Leave this field empty<input name="company" autocomplete="off"></label>
    </div>
    <!-- simple math challenge -->
    <div class="row" style="align-items:center; gap:8px;">
      <label style="flex:1 1 auto;">${t('contact_math_label')} <input required name="sum" class="btn" style="width:100%" placeholder="e.g. 7"></label>
    </div>
    <button class="btn" type="submit">${t('contact_submit')}</button>
    <p class="muted">${t('contact_note')}</p>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    // honeypot check
    if ((fd.get('company') || '').toString().trim() !== ''){
      alert('驗證失敗，請重試。');
      return;
    }
    // math check: generate or cache numbers
    const a = Number(form.dataset.a || 3);
    const b = Number(form.dataset.b || 4);
    const answer = Number((fd.get('sum') || '').toString().trim());
    if (answer !== a + b){
      alert('驗證未通過，請確認加總結果。');
      return;
    }
    alert('感謝留言！稍後可接上表單服務或 Email Link。');
    form.reset();
  });

  // set random a,b per mount
  const a = Math.floor(Math.random() * 4) + 2; // 2..5
  const b = Math.floor(Math.random() * 5) + 2; // 2..6
  form.dataset.a = String(a);
  form.dataset.b = String(b);
  // Render math hint into the label placeholder (non-critical UI)
  // Keep label text from i18n; users type the result into input

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



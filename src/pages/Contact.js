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

  // LINE section removed per request

  const form = document.createElement('form');
  form.className = 'stack card';

  const makeChallenge = () => {
    const a = Math.floor(1 + Math.random() * 9);
    const b = Math.floor(1 + Math.random() * 9);
    const op = ['+', '-'][Math.floor(Math.random()*2)];
    const answer = op === '+' ? a + b : a - b;
    const question = `請計算：${a} ${op} ${b} = ?`;
    return { question, answer: String(answer) };
  };
  let challenge = makeChallenge();
  form.dataset.answer = challenge.answer;

  form.innerHTML = `
    <label>${t('contact_form_name')}<input required name="name" class="btn" style="width:100%"></label>
    <label>${t('contact_form_email')}<input required type="email" name="email" class="btn" style="width:100%"></label>
    <label>${t('contact_form_message')}<textarea required name="message" class="btn" style="width:100%; min-height:120px"></textarea></label>
    <div class="row" style="align-items:center; gap:8px; flex-wrap:wrap;">
      <label style="flex:1 1 220px;">
        防濫用驗證：<span id="challenge-q">${challenge.question}</span>
        <input required name="verify" class="btn" style="width:100%" placeholder="請輸入答案">
      </label>
      <button class="btn" type="button" id="challenge-refresh" title="換一題">換一題</button>
    </div>
    <button class="btn" type="submit">${t('contact_submit')}</button>
  `;
  const challengeQ = () => form.querySelector('#challenge-q');
  const refreshBtn = () => form.querySelector('#challenge-refresh');
  refreshBtn().addEventListener('click', () => {
    challenge = makeChallenge();
    form.dataset.answer = challenge.answer;
    const qEl = challengeQ();
    if (qEl) qEl.textContent = challenge.question;
    const verifyInput = form.querySelector('input[name="verify"]');
    if (verifyInput) verifyInput.value = '';
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);

    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    const verify = (fd.get('verify') || '').toString().trim();
    const expected = form.dataset.answer || '';
    if (!verify || verify !== expected){
      alert('防濫用驗證答案不正確，請再試一次。');
      const qEl = challengeQ();
      if (!qEl || !qEl.textContent){
        // 確保題目一定可見
        challenge = makeChallenge();
        form.dataset.answer = challenge.answer;
        if (qEl) qEl.textContent = challenge.question;
      }
      return;
    }

    const payload = {
      keyword: '履歷網頁來信',
      name,
      email,
      message,
      source: 'contact-form',
      url: location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      verify
    };
    const textLines = [
      '履歷網頁來信',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      'Message:',
      payload.message,
      '---',
      `URL: ${payload.url}`,
      `User-Agent: ${payload.userAgent}`,
      `Time: ${payload.timestamp}`
    ];
    const plainText = textLines.join('\n');

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
      // Prefer sendBeacon with text/plain for CORS-safe delivery
      if (navigator.sendBeacon) {
        const blob = new Blob([plainText], { type: 'text/plain;charset=UTF-8' });
        const ok = navigator.sendBeacon(webhookUrl, blob);
        finalize(ok);
        return;
      }
      // Fallback to fetch with no-cors using text/plain (simple request)
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: plainText,
        mode: 'no-cors',
        keepalive: true
      })
      .then(() => finalize(true))
      .catch(() => finalize(false));
    } catch (err) {
      try {
        // Final fallback: GET with querystring via Image ping (works even with strict CORS)
        const q = encodeURIComponent(plainText);
        const img = new Image();
        img.onload = () => finalize(true);
        img.onerror = () => finalize(false);
        img.src = `${webhookUrl}?txt=${q}`;
      } catch (_) {
        finalize(false);
      }
    }
  });

  const wrap = document.createElement('div');
  wrap.className = 'stack';
  wrap.appendChild(info);
  wrap.appendChild(form);

  const s = Section({ title: t('contact_title'), subtitle: t('contact_subtitle'), children: wrap });
  const el = document.createElement('div');
  el.appendChild(s);
  return { el };
}



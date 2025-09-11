export function Footer(){
  const el = document.createElement('footer');
  el.className = 'site-footer';
  const inner = document.createElement('div');
  inner.className = 'inner container';
  inner.innerHTML = `
    <span class="muted">© <span id="year"></span> 我的履歷</span>
    <a class="muted" href="#/contact">聯絡我</a>
  `;
  el.appendChild(inner);
  const year = inner.querySelector('#year');
  year.textContent = new Date().getFullYear();
  return { el };
}



export function Section({ title, subtitle, alt = false, children }){
  const section = document.createElement('section');
  section.className = `section ${alt ? 'alt' : ''}`;
  const wrap = document.createElement('div');
  wrap.className = 'container';
  if (title) {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    wrap.appendChild(h2);
  }
  if (subtitle) {
    const p = document.createElement('p');
    p.className = 'subtitle';
    p.textContent = subtitle;
    wrap.appendChild(p);
  }
  if (children) wrap.appendChild(children);
  section.appendChild(wrap);
  return section;
}



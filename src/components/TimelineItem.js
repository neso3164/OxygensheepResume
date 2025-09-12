export function TimelineItem({ period, title, subtitle, details, link }){
  const el = document.createElement('div');
  el.className = 'timeline-item';

  const left = document.createElement('div');
  left.className = 'period';
  left.textContent = period;

  const right = document.createElement('div');
  right.className = 'content stack';
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const sub = document.createElement('p');
  sub.className = 'muted';
  sub.textContent = subtitle || '';
  right.appendChild(h3);
  if (subtitle) right.appendChild(sub);
  if (details){
    const p = document.createElement('p');
    p.textContent = details;
    right.appendChild(p);
  }
  if (link){
    const linkEl = document.createElement('a');
    linkEl.href = link.url;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    linkEl.textContent = link.text;
    linkEl.className = 'link';
    right.appendChild(linkEl);
  }

  el.appendChild(left);
  el.appendChild(right);
  return el;
}



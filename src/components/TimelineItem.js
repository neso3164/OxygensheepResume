export function TimelineItem({ period, title, subtitle, details }){
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

  el.appendChild(left);
  el.appendChild(right);
  return el;
}



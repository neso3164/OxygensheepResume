export function Card({ title, description, media }){
  const el = document.createElement('div');
  el.className = 'card stack';
  if (media) el.appendChild(media);
  if (title){
    const h3 = document.createElement('h3');
    h3.textContent = title;
    el.appendChild(h3);
  }
  if (description){
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = description;
    el.appendChild(p);
  }
  return el;
}



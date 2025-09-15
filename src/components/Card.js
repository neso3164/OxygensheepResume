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
    const parts = String(description).split(/<P\/?>(?![^]*<P\/?)/i); // split by <P> or <P/>
    const sanitizedParts = parts.flatMap(part => String(part).split(/<P>/i));
    sanitizedParts.forEach((text, idx) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const p = document.createElement('p');
      p.className = 'muted';
      p.textContent = trimmed;
      el.appendChild(p);
    });
  }
  return el;
}



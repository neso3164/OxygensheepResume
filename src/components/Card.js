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
    const text = String(description);

    const usesMarkdownLike = text.includes('### ') || text.includes('---') || /\*\*.+\*\*/.test(text);

    if (usesMarkdownLike){
      const lines = text.split(/\r?\n/);
      lines.forEach(line => {
        const raw = line;
        const trimmed = raw.trim();
        if (!trimmed){
          return;
        }
        if (trimmed === '---'){
          const hr = document.createElement('hr');
          el.appendChild(hr);
          return;
        }
        if (trimmed.startsWith('### ')){
          const h4 = document.createElement('h4');
          h4.textContent = trimmed.replace(/^###\s+/, '');
          el.appendChild(h4);
          return;
        }
        // Default to paragraph; preserve simple list dash but remove leading '- '
        const p = document.createElement('p');
        p.className = 'muted';
        const content = trimmed.replace(/^\-\s+/, '');
        // Render **bold** segments
        let lastIndex = 0;
        const boldRegex = /\*\*(.*?)\*\*/g;
        let match;
        while ((match = boldRegex.exec(content))){
          const before = content.slice(lastIndex, match.index);
          if (before){ p.appendChild(document.createTextNode(before)); }
          const strong = document.createElement('strong');
          strong.textContent = match[1];
          p.appendChild(strong);
          lastIndex = match.index + match[0].length;
        }
        const tail = content.slice(lastIndex);
        if (tail){ p.appendChild(document.createTextNode(tail)); }
        el.appendChild(p);
      });
    } else {
      // Backward compatibility: split by <P> or <P/>
      const parts = text.split(/<P\/?>(?![^]*<P\/?)/i);
      const sanitizedParts = parts.flatMap(part => String(part).split(/<P>/i));
      sanitizedParts.forEach((s) => {
        const trimmed = s.trim();
        if (!trimmed) return;
        const p = document.createElement('p');
        p.className = 'muted';
        p.textContent = trimmed;
        el.appendChild(p);
      });
    }
  }
  return el;
}



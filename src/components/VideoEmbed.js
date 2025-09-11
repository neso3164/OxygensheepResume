export function VideoEmbed({ src, title = 'Embedded video' }){
  const wrap = document.createElement('div');
  wrap.className = 'video';
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = title;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  wrap.appendChild(iframe);
  return wrap;
}



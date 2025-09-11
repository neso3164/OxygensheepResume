export function createRouter({ routes, outlet }){
  function parseHash(){
    const raw = location.hash.replace(/^#/, '') || '/';
    return raw;
  }

  async function render(){
    const path = parseHash();
    const Page = routes[path] || routes['/'];
    const page = Page();
    outlet.innerHTML = '';
    outlet.appendChild(page.el);
    if (page.onMount) page.onMount();
    updateActiveLinks(path);
  }

  function updateActiveLinks(path){
    document.querySelectorAll('a[data-nav]')
      .forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${path}`));
  }

  function start(){
    window.addEventListener('hashchange', render);
    render();
  }

  return { start };
}



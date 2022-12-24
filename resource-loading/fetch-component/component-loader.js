function setCSS(container, style) { 
  const styleEl = document.createElement('style');
  const styleContent = document.createTextNode(style);
  styleEl.appendChild(styleContent);
  container.appendChild(styleEl);
}

function setHTML(container, html) {
  container.innerHTML += html;
}

async function setJS(container, link) {
  const script = await import(link);
  script.default(container);
}

async function loadComponent(componentName, container) {
  const ref = (fileType) => `./${componentName}/${componentName}.component.${fileType}`;
  const loadHtml = () => fetch(ref('html')).then((r) => r.text());
  const loadCss = () => fetch(ref('css')).then((r) => r.text());
  const init = async () => Promise.all([loadCss(), loadHtml()]);
  const [style, html] = await init();

  setCSS(container, style);
  setHTML(container, html);
  setJS(container, ref('js'));
}


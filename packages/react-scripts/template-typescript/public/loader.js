/* eslint-disable strict */
(function() {
  const currentBaseUrl = document.currentScript.src.split('loader.js')[0];

  function loadFile(file, onLoad) {
    const css = file.endsWith('css');
    const node = document.createElement(css ? 'link' : 'script');
    if (css) {
      node.rel = 'stylesheet';
      node.href = file;
    } else {
      node.type = 'text/javascript';
      node.src = file;
      node.async = false; // loads in parallel & keeps the execution order of the scripts.
      if (onLoad) {
        node.onload = onLoad;
      }
    }
    document.head.appendChild(node);
  }

  loadFile(currentBaseUrl + 'static/js/bundle.js');
  loadFile(currentBaseUrl + 'static/js/main.chunk.js');
  loadFile(currentBaseUrl + 'static/js/vendors~main.chunk.js');

  window.mageLoadFile = loadFile;
  window.mageLoadBaseUrl = currentBaseUrl;
})();

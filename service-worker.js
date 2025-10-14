self.addEventListener('install', e => {
  e.waitUntil(caches.open('faithflow-cache').then(cache => cache.addAll(['/','/index.html','/style.css','/script.js','/manifest.json','/icons/icon-192.png','/icons/icon-512.png','/splash-1080x1920.png'])));
});
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });

const CACHE='faithflow-v1';
const URLs=['/','/index.html','/style.css','/script.js','/manifest.json','/icons/icon-192.png','/icons/icon-512.png','/splash/splash-1080x1920.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLs)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});

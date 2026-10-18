self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('videoprivee-v3').then(cache => {
      return cache.addAll([
        './index.html',
        './icon-192.png',
        './icon-512.png',
        './apple-touch-icon.png',
        './bg-gants.jpg',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

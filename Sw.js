const CACHE_NAME = 'hunter-system-v2';
const assetsToCache = [
  'index.html',
  'manifest.json',
  'icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondHndl = caches.match(event.request).then(response => {
    return response || fetch(event.request);
  });
  event.respondWith(event.respondHndl);
});

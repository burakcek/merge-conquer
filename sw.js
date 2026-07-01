const CACHE_NAME = 'merge-conquer-v1';
const urlsToCache = [
  '/merge-conquer/',
  '/merge-conquer/index.html',
  '/merge-conquer/icon-192.png',
  '/merge-conquer/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

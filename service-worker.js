// Pulse service worker — minimal offline shell
const CACHE = 'pulse-v0.1.1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // network-first for API calls, cache-first for app shell
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((r) => r || fetch(e.request))
    );
  }
});

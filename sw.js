const CACHE_NAME = 'imrithi-v1';
const assets = [
  './',
  './index.html',
  './daftar_isi.html',
  './baca.html',
  './favorit.html',
  './assets/css/bootstrap@5.2.0.min.css',
  './assets/css/style.css',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/data_nadhom.js',
  './assets/img/logo.png',
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Aktivasi & Hapus Cache Lama
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Ambil data dari cache (Bisa Offline)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

const cacheName = "zournal-cache-v1.2";
const assets = [
    "/",
    "index.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/css/iconfont/material-icons.css",    
    "/js/jquery.js",
    "/js/push.min.js",
    "/js/materialize.min.js",
    "/js/app.js",
    "/js/api.js",
    "/js/search.js",
    "/js/weather.js",
    "/js/logsign.js",
    "/js/lockscreen.js",
    "/js/updel.js",
    "/img/profile.jpg",
    "/img/zour-icon-512.png",
    "/img/zour-icon-384.png",
    "/img/zour-icon-192.png",
    "/img/zour-icon-152.png",
    "/img/zour-icon-144.png",
    "/img/zour-icon-128.png",
    "/img/zour-icon-96.png",
    "/img/zour-icon-72.png",
];

// Install Service Worker
self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(cacheName).then((cache) => {
        cache.addAll(assets);
    }));
});
// Install Service Worker

// Activating Service Worker
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (datas) {
            return Promise.all(
                datas.map(function (data) {
                    if (data != cacheName) {
                        return caches.delete(data);
                    }
                })
            );
        })
    );
});
// Activating Service Worker

// Fetch Event For Banner (HTTPS)
self.addEventListener("fetch", (e) => {

    // Get The Cached Data
    e.respondWith(
        caches.match(e.request).then(cacheData => {
            return cacheData || fetch(e.request);
        })
    )
    // Get The Cached Data

});
// Fetch Event For Banner (HTTPS)
var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "/",
    "/favicon.ico",
    "/controllers/",
    "/controllers/global.js",
    "/controllers/layout.js",
    "/controllers/storage.js",
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(STATIC_CACHE_CONTAINER)
            .then(function(cache){
                cache.addAll(STATIC_FILES);
            })
    )

})

self.addEventListener('activate', function(event){
    console.log("service worker activated", event)
})


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(STATIC_CACHE_CONTAINER).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })

    );

});

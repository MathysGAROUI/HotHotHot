let STATIC_CACHE_CONTAINER = "static_v1"
let STATIC_FILES = [
    "/",
    "/favicon.ico",
    "/controllers/",
    "/controllers/global.js",
    "/controllers/tablesLayout.js",
    "/controllers/storage.js",
    "/controllers/connection.js",
    "/style/",
    "/style/layout.css"

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


addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then(function(res) {
                            return caches.open(STATIC_CACHE_CONTAINER)
                                .then(function(cache) {
                                    cache.put(event.request.url, res.clone());
                                    return res;
                                })
                        });
                }
            })
    );
});

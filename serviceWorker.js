var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "/",
    "/favicon.ico",
    "/controllers/",
    "/controllers/global.js",
    "/controllers/layout.js",
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

/*
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
 */

addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;     // if valid response is found in cache return it
                } else {
                    return fetch(event.request)     //fetch from internet
                        .then(function(res) {
                            return caches.open(STATIC_CACHE_CONTAINER)
                                .then(function(cache) {
                                    cache.put(event.request.url, res.clone());    //save the response for future
                                    return res;   // return the fetched data
                                })
                        });
                }
            })
    );
});

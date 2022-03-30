var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "/",
    "/controllers/",
    "/controllers/connection.js",
    "/controllers/global.js",
    "/controllers/graphics.js",
    "/controllers/layout.js",
    "/controllers/notification.js",
    "/controllers/parsing.js",
    "/controllers/pwa.js",
    "/controllers/refresher.js",
    "/controllers/storage.js",
    "/models/",
    "/models/Sensor.js",
    "/style/",
    "/style/layout.css"
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(STATIC_CACHE_CONTAINER)
            .then(function(cache){
                cache.addAll(STATIC_FILES)
            })
    )
})

self.addEventListener('activate', function(event){
    console.log("service worker activated", event)
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response
                }
            })
    )
})
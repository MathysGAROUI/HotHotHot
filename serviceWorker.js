var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "/",
    "/favicon.ico",
    "/controllers/",
    "/controllers/connection.js",
    "/controllers/global.js",
    "/controllers/graphics.js",
    "/controllers/layout.js",
    //"/controllers/notification.js",
    "/controllers/parsing.js",
    "/controllers/pwa.js",
    "/controllers/refresher.js",
    "/controllers/storage.js",
    "/models/",
    "/models/Sensor.js",
    "/style/",
    "/style/layout.css",
    "/style/17450.jpg",
    "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js",
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,200&display=swap",
    "manifest.json"
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(STATIC_CACHE_CONTAINER)
            .then(function(cache){
                cache.addAll(STATIC_FILES).then(function() {
                    console.log('requests have been added to the cache');
                })
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
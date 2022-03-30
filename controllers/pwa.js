function registerServiceWorker(){
    navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(function(reg){
            console.log("service worker registered", reg)
        })
        .catch(function(err){
            console.log("error when registering service worker", err)
        })
}

HotSDK.registerSW = registerServiceWorker;
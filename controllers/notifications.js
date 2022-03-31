function isPushNotificationSupported() {
    return "serviceWorker" in navigator && "PushManager" in window;
}

function initializePushNotifications() {
    return Notification.requestPermission(function(result) {
        return result;
    });
}

function sendNotification() {
    const img = "/images/app_icon192x192.png";
    const text = "Notification !";
    const title = "Titre";
    const options = {
        body: text,
        icon: "/images/app_icon192x192.png",
        vibrate: [200, 100, 200],
        tag: "notification",
        image: img,
        badge: "/images/app_icon192x192.png",
    };
    navigator.serviceWorker.ready.then(function(serviceWorker) {
        serviceWorker.showNotification(title, options);
    });
}

function checkAndSendNotification(){
    if(isPushNotificationSupported()){
        initializePushNotifications().then(function (consent){
            if(consent === 'granted'){
                sendNotification();
            }
        })
    }
}

HotSDK.sendNotif =  checkAndSendNotification;
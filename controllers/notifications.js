function isPushNotificationSupported() {
    return "serviceWorker" in navigator && "PushManager" in window;
}

function initializePushNotifications() {
    return Notification.requestPermission(function(result) {
        return result;
    });
}

function sendNotification(msg) {
    const img = "/images/app_icon192x192.png";
    const text = msg;
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

function checkAndSendNotification(msg){
    if(isPushNotificationSupported()){
        initializePushNotifications().then(function (consent){
            if(consent === 'granted'){
                sendNotification(msg);
            }
        })
    }
}

function sendAlert(msg){
    if (confirm(msg + ' Voulez vous consulter l\'historique des alertes ?')) {
        HotSDK.switchPage('alertHistory');
    }
}

function notifyAndAlert(msg){
    HotSDK.storeAlert(msg);
    sendAlert(msg);
    checkAndSendNotification(msg);
    HotSDK.updateTable('alert');
}

HotSDK.sendAlert = sendAlert;
HotSDK.sendNotif = checkAndSendNotification;
HotSDK.notifyAndAlert = notifyAndAlert;
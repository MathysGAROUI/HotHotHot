const HotSDK = {
    refreshTimeRate: 60,
    socketTimeout: 5
};

document.addEventListener('DOMContentLoaded', function() {
    HotSDK.online = window.navigator.onLine;
    if(HotSDK.online){
        HotSDK.registerSW();
        HotSDK.initLocalStorage();
        HotSDK.loadTable('alert');
        HotSDK.loadTable('sensor');
        HotSDK.connect();
        HotSDK.refreshMinAndMax();
    }
    else{
        HotSDK.initLocalStorage();
        HotSDK.loadTable('alert');
        HotSDK.loadTable('sensor');
        HotSDK.refreshMinAndMax();
    }
});
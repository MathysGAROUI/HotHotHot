const HotSDK = {
    refreshTimeRate: 60,
    socketTimeout: 5
};

document.addEventListener('DOMContentLoaded', function() {
    HotSDK.registerSW();
    HotSDK.initLocalStorage();
    HotSDK.connect();
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
});
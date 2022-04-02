const HotSDK = {
    refreshTimeRate: 60,
    socketTimeout: 5
};

document.addEventListener('DOMContentLoaded', function() {
    HotSDK.registerSW();
    HotSDK.initLocalStorage();
    HotSDK.loadTable('alert');
    HotSDK.loadTable('sensor');
    HotSDK.connect();
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
});
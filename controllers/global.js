const HotSDK = {

};

document.addEventListener('DOMContentLoaded', function() {
    HotSDK.registerSW();
    HotSDK.initLocalStorage();
    HotSDK.connect();
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
});
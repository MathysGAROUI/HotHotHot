const HotSDK = {

};

document.addEventListener('DOMContentLoaded', function() {
    HotSDK.registerSW();
    HotSDK.connect();
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
});
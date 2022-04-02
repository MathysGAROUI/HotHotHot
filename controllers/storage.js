function storeSensors(sensorObject){
    jsonData = JSON.parse(localStorage.getItem('capteurs'));
    jsonData.cpt1.push(sensorObject.getCptIntVal());
    jsonData.cpt2.push(sensorObject.getCptExtVal());
    jsonData.dates.push(sensorObject.getDate());
    localStorage.setItem('capteurs', JSON.stringify(jsonData));
}

function storeAlert(alertObject){
    jsonData = JSON.parse(localStorage.getItem('alerts'));
    jsonData.msg.push(alertObject.getMessage());
    jsonData.dates.push(alertObject.getDate());
    localStorage.setItem('alerts', JSON.stringify(jsonData));
}

function load(from){
    return JSON.parse(localStorage.getItem(from));
}

function initLocalStorage(){
    console.log('Init local storage');
    if(localStorage.getItem('capteurs') == null){
        localStorage.setItem('capteurs', "{\"cpt1\" : [],\"cpt2\" : [], \"dates\" : []}");
    }
    if(localStorage.getItem('alerts') == null){
        localStorage.setItem('alerts', "{\"msg\" : [], \"dates\" : []}");
    }
}

HotSDK.storeAlert = storeAlert;
HotSDK.initLocalStorage = initLocalStorage;
HotSDK.storeSensors = storeSensors;
HotSDK.load = load;


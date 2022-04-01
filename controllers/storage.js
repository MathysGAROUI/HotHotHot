function storeSensors(cpt1, cpt2){
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    if(localStorage.getItem('capteurs') == null){
        localStorage.setItem('capteurs', "{\"cpt1\" : [],\"cpt2\" : [], \"dates\" : []}")
    }
    jsonData = JSON.parse(localStorage.getItem('capteurs'));
    jsonData.cpt1.push(cpt1);
    jsonData.cpt2.push(cpt2);
    jsonData.dates.push(hour+":"+minutes);
    localStorage.setItem('capteurs', JSON.stringify(jsonData));
}

function storeAlert(msg){
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    if(localStorage.getItem('alerts') == null){
        localStorage.setItem('alerts', "{\"msg\" : [], \"dates\" : []}")
    }
    jsonData = JSON.parse(localStorage.getItem('alerts'));
    jsonData.msg.push(cpt2);
    jsonData.dates.push(hour+":"+minutes);
    localStorage.setItem('alerts', JSON.stringify(jsonData));
}

function load(from){
    return JSON.parse(localStorage.getItem(from));
}

function initLocalStorage(){
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


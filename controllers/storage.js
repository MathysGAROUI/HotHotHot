function store(where, cpt1, cpt2){
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    if(localStorage.getItem(where) == null){
        localStorage.setItem(where, "{\"cpt1\" : [],\"cpt2\" : [], \"dates\" : []}")
    }
    jsonData = JSON.parse(localStorage.getItem(where));
    jsonData.cpt1.push(cpt1);
    jsonData.cpt2.push(cpt2);
    jsonData.dates.push(hour+":"+minutes);
    localStorage.setItem(where, JSON.stringify(jsonData));
}

function load(from){
    return JSON.parse(localStorage.getItem(from));
}

function initLocalStorage(){
    if(localStorage.getItem('capteurs') == null){
        localStorage.setItem('capteurs', "{\"cpt1\" : [],\"cpt2\" : [], \"dates\" : []}");
    }
}

HotSDK.initLocalStorage = initLocalStorage;
HotSDK.store = store;
HotSDK.load = load;


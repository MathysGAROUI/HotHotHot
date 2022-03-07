function store(where, cpt1, cpt2){
    if(localStorage.getItem(where) == null){
        localStorage.setItem(where, "{\"cpt1\" : [],\"cpt2\" : []}")
    }
    jsonData = JSON.parse(localStorage.getItem(where));
    jsonData.cpt1.push(cpt1);
    jsonData.cpt2.push(cpt2);
    localStorage.setItem(where, JSON.stringify(jsonData));
}

function load(from){
    return JSON.parse(localStorage.getItem(from));
}

HotSDK.store = store;
HotSDK.load = load;



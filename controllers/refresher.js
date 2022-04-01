function refresh(jsonData){
    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val2');
    val1.innerText = jsonData.capteurs[0].Valeur;
    val2.innerText = jsonData.capteurs[1].Valeur;
    checkValues(jsonData.capteurs[0].Valeur, jsonData.capteurs[1].Valeur);
    HotSDK.storeSensors(parseFloat(jsonData.capteurs[0].Valeur), parseFloat(jsonData.capteurs[1].Valeur))
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
}

function checkValues(cpt1, cpt2){
    if(cpt2 > 35){
        HotSDK.notifyAndAlert('alerte : Hot Hot Hot !');
    }
    else if(cpt2 < 0){
        HotSDK.notifyAndAlert('alerte : Banquise en vue !');
    }
    if(cpt1 > 22){
        HotSDK.notifyAndAlert('alerte : Baissez le chauffage !');
    }
    else if(cpt1 > 50){
        HotSDK.notifyAndAlert('alerte : Appelez les pompiers ou arrêtez votre barbecue !');
    }
    else if(cpt1 < 12){
        HotSDK.notifyAndAlert('alerte : montez le chauffage ou mettez un gros pull !');
    }
    else if(cpt1 < 0){
        HotSDK.notifyAndAlert('alerte : canalisations gelées, appelez SOS plombier et mettez un bonnet !');
    }
}

function refreshMinAndMax(){
    const val1min = document.getElementById('val1min');
    const val1max = document.getElementById('val1max');
    const val2min = document.getElementById('val2min');
    const val2max = document.getElementById('val2max');
    if(HotSDK.load('capteurs') != null){
        val1min.innerText = Math.min.apply(Math, HotSDK.load('capteurs').cpt1);
        val2min.innerText = Math.min.apply(Math, HotSDK.load('capteurs').cpt2);
        val1max.innerText = Math.max.apply(Math, HotSDK.load('capteurs').cpt1);
        val2max.innerText = Math.max.apply(Math, HotSDK.load('capteurs').cpt2);
    }


}

HotSDK.refresh = refresh;
HotSDK.refreshMinAndMax = refreshMinAndMax;

function refresh(jsonData){
    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val2');
    let sensorObject = new Sensor(parseFloat(jsonData.capteurs[0].Valeur), parseFloat(jsonData.capteurs[1].Valeur));
    val1.innerText = sensorObject.getCptIntVal();
    val2.innerText = sensorObject.getCptExtVal();
    sensorObject.checkValues();
    HotSDK.storeSensors(sensorObject);
    HotSDK.updateTable('sensor');
    HotSDK.refreshMinAndMax();
    HotSDK.refreshGraphics();
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
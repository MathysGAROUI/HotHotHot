function refresh(jsonData){
    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val1');
    val1.innerText = jsonData.capteurs[0].valeur;
    val2.innerText = jsonData.capteurs[0].valeur;

}

HotSDK.refresh = refresh;
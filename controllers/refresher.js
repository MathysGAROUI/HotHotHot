function refresh(jsonData){
    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val2');
    val1.innerText = jsonData.capteurs[0].Valeur;
    val2.innerText = jsonData.capteurs[1].Valeur;
}

HotSDK.refresh = refresh;
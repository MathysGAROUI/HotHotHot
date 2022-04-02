function switchPage(page){
    disableAllPages();
    switch (page) {
        case 'history':
            document.getElementById('historyPage').style = 'display: block;';
            break;
        case 'main':
            document.getElementById('mainPage').style = 'display: block;';
            break;
        case 'alertHistory':
            document.getElementById('alertHistoryPage').style = 'display: block;';
            break;
        case 'test':
            document.getElementById('testPage').style = 'display: block;';
            break;
    }
}

function disableAllPages(){
    document.getElementById('historyPage').style = 'display: none;';
    document.getElementById('mainPage').style = 'display: none;';
    document.getElementById('alertHistoryPage').style = 'display: none;';
    document.getElementById('testPage').style = 'display: none;';

}


document.getElementById("historyPageButton").onclick = function (){
    switchPage('history');
}

document.getElementById("mainPageButton").onclick = function (){
    switchPage('main');
}

document.getElementById("alertHistoryPageButton").onclick = function (){
    switchPage('alertHistory');
}
document.getElementById("testPageButton").onclick = function (){
    switchPage('test');
}

document.getElementById("testAlertHot").onclick = function (){
    new Alert('Alerte : Chaud (test)')
}

document.getElementById("testAlertCold").onclick = function (){
    new Alert('Alerte : Froid (test)')
}

switchPage('main');
HotSDK.switchPage = switchPage;
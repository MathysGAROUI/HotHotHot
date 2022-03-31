function switchPage(page){
    disableAllPages();
    switch (page) {
        case 'history':
            document.getElementById('historyPage').style = 'display: block;';
            break;
        case 'main':
            document.getElementById('mainPage').style = 'display: block;';
            break;
    }
}

function disableAllPages(){
    document.getElementById('historyPage').style = 'display: none;';
    document.getElementById('mainPage').style = 'display: none;';

}


document.getElementById("historyPageButton").onclick = function (){
    switchPage('history');
    HotSDK.sendNotif();
}

document.getElementById("mainPageButton").onclick = function (){
    switchPage('main');
}
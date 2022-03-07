function logServerStatus(status){
    /*
    const term = document.getElementById('term');
    term.innerText += '\n';
    term.innerText += '\n' + status + '\n';
    */
   console.log(status);
}

function webSocketMethod() {
    logServerStatus('Méthode : socket');
    webSocketState = false;
    const socket = new WebSocket('wss://ws.hothothot.dog:9502');

    socket.onopen = function () {
        logServerStatus('Connecté au serveur socket');
    }

    socket.onmessage = function (event) {
        logServerStatus('Données recues : ' + event.data);
        if(event.data != '')
            webSocketState = true;
        HotSDK.refresh(HotSDK.parse(event.data));
    }

    socket.onclose = function () {
        logServerStatus('Déconnecté du serveur socket');
    }

    socket.onerror = function (error) {
        logServerStatus('Erreur : ' + error);
    }
    countdown = 5;
    function websSocketStateChecker(){
        if(countdown > 0 && !webSocketState){
            countdown--;
            logServerStatus('En attente du serveur web socket...');
            setTimeout(websSocketStateChecker, 1000);
        }
        else{
            if(webSocketState)
                return;
            socket.close();
            logServerStatus('Serveur socket hors service changement de méthode')
            HotSDK.connect = fetchMethod;
            logServerStatus('Méthode : Fetch');
            HotSDK.connect();
            return;
        }
    }
    if(!webSocketState){
        websSocketStateChecker();
    }
}


function fetchMethod()  {
  var promise = fetch("https://hothothot.dog/api/capteurs");
  promise.then(function(response) {
        if(!response.ok) {
            logServerStatus("erreur : " + response.status);
            throw new Error("erreur : " + response.status);
        }
        var data = response.text();
        return data;
    })
    .then(function(data) {
        logServerStatus('Données recues : ' + data);
        HotSDK.refresh(HotSDK.parse(data));
    })
    .catch(function(error)  {
        logServerStatus(error);
    });
    setTimeout(fetchMethod, 5000);
}

HotSDK.connect = webSocketMethod;
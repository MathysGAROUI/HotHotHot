function logServerStatus(status){
    const term = document.getElementById('term');
    term.innerText += '\n';
    term.innerText += '\n' + status + '\n';
}

function webSocketMethod() {
    logServerStatus('Socket method');
    webSocketState = false;
    const socket = new WebSocket('wss://ws.hothothot.dog:9502');

    socket.onopen = function () {
        logServerStatus('Connecté au serveur');
    }

    socket.onmessage = function (event) {
        console.log('data received : ' + event.data);
        if(event.data != '')
            webSocketState = true;
        logServerStatus('new data received');
        HotSDK.refresh(HotSDK.parse(event.data));
    }

    socket.onclose = function () {
        logServerStatus('Déconnecté du serveur');
    }

    socket.onerror = function (error) {
        logServerStatus('Erreur : ' + error);
    }

    HotSDK._socket = socket;

    countdown = 5;
    function websSocketStateChecker(){
        if(countdown > 0 && !webSocketState){
            countdown--;
        }
        else{
            logServerStatus('Socket not responding, switching method')
            HotSDK.connect = fetchMethod;
            logServerStatus('Fetch method');
            HotSDK.connect();
            return;
        }
        console.log('Waiting for websocket...');
        setTimeout(websSocketStateChecker, 1000);
    }
    websSocketStateChecker();
}


function fetchMethod()  {
  var promise = fetch("https://hothothot.dog/api/capteurs");
  promise.then(function(response) {
        if(!response.ok) {
            logServerStatus("HTTP error, status = " + response.status);
            throw new Error("HTTP error, status = " + response.status);
        }
        var data = response.text();
        return data;
    })
    .then(function(data) {
        logServerStatus('new data received');
        HotSDK.refresh(HotSDK.parse(data));
    })
    .catch(function(error)  {
        console.log(error);
    });
    setTimeout(fetchMethod, 5000);
}

HotSDK.connect = webSocketMethod;
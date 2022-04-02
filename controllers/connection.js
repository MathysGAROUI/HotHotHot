function logServerStatus(status){
    /*
    const term = document.getElementById('term');
    term.innerText += '\n';
    term.innerText += '\n' + status + '\n';
    */
   console.log(status);
}

function webSocketMethod() {
    if(HotSDK.online) {
        logServerStatus('Méthode : socket');
        let webSocketState = false;
        const socket = new WebSocket('wss://ws.hothothot.dog:9502');

        socket.onopen = function () {
            logServerStatus('Connecté au serveur socket');
        }

        socket.onmessage = function (event) {
            logServerStatus('Données recues : ' + event.data);
            if (event.data !== '')
                webSocketState = true;
            HotSDK.refresh(HotSDK.parse(event.data));
        }

        socket.onclose = function () {
            logServerStatus('Déconnecté du serveur socket');
            webSocketState = false;
        }

        socket.onerror = function (error) {
            logServerStatus('Erreur : ' + error);
        }

        let timeout = HotSDK.socketTimeout;

        function websSocketStateChecker() {
            if (timeout > 0 && !webSocketState) {
                timeout--;
                logServerStatus('En attente du serveur web socket...');
                setTimeout(websSocketStateChecker, 1000);
            } else {
                if (webSocketState)
                    return;
                socket.close();
                logServerStatus('Serveur socket hors service changement de méthode')
                HotSDK.connect = fetchMethod;
                logServerStatus('Méthode : Fetch');
                HotSDK.connect();
            }
        }

        if (!webSocketState) {
            websSocketStateChecker();
        }
    }
}


function fetchMethod()  {
    if(HotSDK.online){
        const promise = fetch("https://hothothot.dog/api/capteurs");
        promise.then(function(response) {
            if(!response.ok) {
                logServerStatus("erreur : " + response.status);
                throw new Error("erreur : " + response.status);
            }
            return response.text();
        })
            .then(function(data) {
                logServerStatus('Données recues : ' + data);
                HotSDK.refresh(HotSDK.parse(data));
            })
            .catch(function(error)  {
                logServerStatus(error);
            });
        setTimeout(fetchMethod, HotSDK.refreshTimeRate*1000);
    }
}

window.addEventListener('offline', () => {
    console.log('offline');
    HotSDK.online = false;
});

window.addEventListener('online', () => {
    if(HotSDK.online === false){
        console.log('reconnection');
        HotSDK.online = true;
        HotSDK.connect();
    }
    console.log('online');
});

HotSDK.connect = webSocketMethod;
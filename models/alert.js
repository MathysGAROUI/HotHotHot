class Alert {
    #msg;
    #date;
    constructor(msg) {
        this.#msg = msg;
        const d = new Date();
        let hour = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours();
        let minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes();
        this.#date = hour+":"+minutes;
        HotSDK.storeAlert(this);
        this.notifyAndAlert();

    }

    getDate(){
        return this.#date;
    }

    getMessage(){
        return this.#msg;
    }

    notifyAndAlert(){
        HotSDK.sendAlert(this.#msg);
        HotSDK.sendNotif(this.#msg);
        HotSDK.updateTable('alert');
    }


}
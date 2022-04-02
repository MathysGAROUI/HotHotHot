class Sensor {
    #cpt1;
    #cpt2;
    #date;

    constructor(cpt1, cpt2) {
        this.#cpt1 = cpt1;
        this.#cpt2 = cpt2;
        const d = new Date();
        let hour = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours();
        let minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes();
        this.#date = hour+":"+minutes;
    }

    getCptIntVal(){
        return this.#cpt1;
    }

    getCptExtVal(){
        return this.#cpt2;
    }

    getDate(){
        return this.#date;
    }

    checkValues() {
        if(this.#cpt2 > 35){
           new Alert('alerte : Hot Hot Hot !');
        }
        else if(this.#cpt2 < 0){
            new Alert('alerte : Banquise en vue !');
        }
        if(this.#cpt1 > 22){
            new Alert('alerte : Baissez le chauffage !');
        }
        else if(this.#cpt1 > 50){
            new Alert('alerte : Appelez les pompiers ou arrêtez votre barbecue !');
        }
        else if(this.#cpt1 < 12){
            new Alert('alerte : montez le chauffage ou mettez un gros pull !');
        }
        else if(this.#cpt1 < 0){
            new Alert('alerte : canalisations gelées, appelez SOS plombier et mettez un bonnet !');
        }
    }
}
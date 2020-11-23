// Constructor UfosPark

function UfosPark(){
    this.fee = 500;
    this.float = new Map();
}

// Instanciador de UfosPark, si ya existe instancia devuelve esta (Patrón Singleton)

function singletonUfosPark() {

    let instance;

    function createInstance() {
        var object = new UfosPark();
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
};

// Lógica de UfosPark

UfosPark.prototype.dispatch = function(creditCard){
    if (!checkCreditCardHasUfo(this.float, creditCard)){
        if(creditCard.pay(this.fee) === true){
            for (var [key, value] of this.float){
                if(value === null){
                    this.float.set(key, creditCard);
                    break;
                }
            }
        }
       
    }
}

const checkCreditCardHasUfo = (map, val) => {
    for (let value of map.values()){
        if(val === value ){
            return true;
        }
    }
    return false;
}

UfosPark.prototype.addUfo = function(ufo){
    if (!this.float.has(ufo)){
        this.float.set(ufo, null);
    }
}


module.exports.singletonUfosPark = singletonUfosPark;
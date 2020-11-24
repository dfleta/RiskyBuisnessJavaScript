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

UfosPark.prototype.constainsCard = function(val){
    for (let value of this.float.values()){
        if(val === value ){
            return true;
        }
    }
    return false;
}

UfosPark.prototype.dispatch = function(creditCard){
    if (!this.constainsCard(creditCard)){
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

UfosPark.prototype.getUfoOf = function(creditCard){
    for (var [key, value] of this.float){
        if (value === creditCard){
            return key;
        }
    }
}

UfosPark.prototype.addUfo = function(ufo){
    if (!this.float.has(ufo)){
        this.float.set(ufo, null);
    }
}

UfosPark.prototype.cardNumbers = function(){
    let cards = [];
    for (card of this.float.values()) {
        cards.push(card.numberCard);
    }
    return cards;
}


module.exports.singletonUfosPark = singletonUfosPark;
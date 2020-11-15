// Creación de objetos

var creditCard = {
    owner : "Morty",
    number : "123-456-789",
    credit : 200,
    symbol : "ADC",

    pay : function(fee){
        this.credit = this.credit - fee;
    }
}

var ufosPark = {
    fee : 50,
    availabilityFleet : {
        ufo1 : "",
        ufo2 : "",
        ufo3 : ""
    },

    dispatch : function dispatch(creditCard){
        for(let ufo of Object.keys(this.availabilityFleet)){
            if(ufo.valueOf != ""){
                creditCard.pay(this.fee);
                ufo.valueOf = creditCard.owner;
            }
        }
        
    }
}
console.log(creditCard);
console.log(ufosPark);

ufosPark.dispatch(creditCard);

console.log(creditCard);
console.log(ufosPark);
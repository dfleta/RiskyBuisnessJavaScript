function CrystalExpender(cost, stock){
    this.cost = cost;
    this.stock = stock;
}

function singletonCrystalExpender(stock, price){
    let instance;

    function createInstance(stock, price){
        object = new CrystalExpender(stock, price);
        return object;
    }
   return {
       getInstance : function(){
           if (!instance){
               instance = createInstance(stock, price);
           }
           return instance;
       }
   }
};

CrystalExpender.prototype.dispatch = function(creditCard){
    if (this.stock > 0){
        if(creditCard.pay(this.cost)){
            this.stock -= 1;
        }
    }
}

/**
 * Export de singleton function
 */
module.exports.singletonCrystalExpender = singletonCrystalExpender;
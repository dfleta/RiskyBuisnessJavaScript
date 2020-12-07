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
    if (creditCard.pay(this.cost) && this.stock > 0){
        this.stock -= 1;
    }
}

CrystalExpender.prototype.getStock = function(){
    return this.stock;
}
/**
 * Export de singleton function
 */
module.exports.singletonCrystalExpender = singletonCrystalExpender;
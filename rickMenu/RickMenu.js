function RickMenu(cost, stock){
    this.cost = cost;
    this.stock = stock;
    this.orders = [];
}

function singletonRickMenu(stock, price){
    let instance;

    function createInstance(stock, price){
        object = new RickMenu(stock, price);
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

RickMenu.prototype.dispatch = function(creditCard){
    if (this.stock > 0){
        if(creditCard.pay(this.cost)){
            this.stock -= 1;
            this.orders.push(creditCard);
        }
    }
}
/**
 * Export de singleton function
 */
module.exports.singletonRickMenu = singletonRickMenu;
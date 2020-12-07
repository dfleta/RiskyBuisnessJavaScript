/**
 * Contructor  of CreditCard
 * @param {User name} name 
 * @param {User number} numberCard 
 */
function CreditCard(name, numberCard){
    this.name = name;
    this.numberCard = numberCard;
    this.credit = 3000;
    this.SYMBOL = "EZI";
}
/**
 * To pay a service
 * @param {Product cost} cost 
 */
CreditCard.prototype.pay = function(cost){
    if (this.credit >= cost){
        this.credit -= cost;
        return true;
    }
    return false;
}
/**
 * Export constructor
 */
module.exports = CreditCard;
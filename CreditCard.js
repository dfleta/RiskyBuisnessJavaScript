function CreditCard(name, numberCard){
    this.name = name;
    this.numberCard = numberCard;
    this.credit = 3000;
    this.SYMBOL = "EZI";
}

CreditCard.prototype.pay = function(cost){
    if (this.credit >= cost){
        this.credit -= cost;
        return true;
    }
    return false;
}

module.exports = CreditCard;
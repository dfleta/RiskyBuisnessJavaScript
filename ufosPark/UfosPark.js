/**
 * Constructor of UfosPark
 */
function UfosPark() {
    this.fee = 500;
    this.float = new Map();
}
/**
 * Function to create instace if don't exist
 * Apply the singleton pattern
 */
function singletonUfosPark() {

    let instance;

    function createInstance() {
        object = new UfosPark();
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
/**
 * Check if CreditCard exists in the map float
 * @param {CreditCard} val 
 */
UfosPark.prototype.containsCard = function (creditCard) {
    for (let cardFloat of this.float.values()) {
        if (creditCard === cardFloat) {
            return true;
        }
    }
    return false;
}
/**
 * Assign ufo if are met the consitions
 *  => CreditCard hasn't ufo assigned
 *  => CreditCard could pay
 * @param {CreditCard} creditCard 
 */
UfosPark.prototype.dispatch = function (creditCard) {
    if (!this.containsCard(creditCard)) {
        if (creditCard.pay(this.fee)) {
            for (var [key, value] of this.float) {
                if (value === null) {
                    this.float.set(key, creditCard);
                    break;
                }
            }
        }

    }
}
/**
 * Get ufo of CreditCard
 * @param {CreditCard} creditCard 
 */
UfosPark.prototype.getUfoOf = function (creditCard) {
    for (var [key, value] of this.float) {
        if (value === creditCard) {
            return key;
        }
    }
}
/**
 * Add new available ufo into the float
 * @param {Ufo} ufo 
 */
UfosPark.prototype.addUfo = function (ufo) {
    if (!this.float.has(ufo)) {
        this.float.set(ufo, null);
    }
}
/**
 * Get collection of card numbers
 */
UfosPark.prototype.cardNumbers = function () {
    let cards = [];
    for (card of this.float.values()) {
        cards.push(card.numberCard);
    }
    return cards;
}
/**
 * Export de singleton function
 */
module.exports.singletonUfosPark = singletonUfosPark;
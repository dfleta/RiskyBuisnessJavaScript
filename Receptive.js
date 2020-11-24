/**
 * Constructor of Receptive
 */
function Receptive(){
    this.services = [];
}
/**
 * Function to create instace if don't exist
 * Apply the singleton pattern
 */
function singletonReceptive() {

    let instance;

    function createInstance() {
        object = new Receptive();
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
 * Add service to the list of availanility serivice
 * @param {*} service 
 */
Receptive.prototype.registerService = function(service){
    this.services.push(service);
}
/**
 * Dispath CreditCard with all added services 
 * @param {CreditCard} creditCard 
 */
Receptive.prototype.dispatch = function(creditCard){
    for(service of this.services){
        service.dispatch(creditCard);
    }
}
/**
 * Export de singleton function
 */
module.exports.singletonReceptive = singletonReceptive;
function Receptive(){
    this.services = [];
}

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

Receptive.prototype.registerService = function(service){
    this.services.push(service);
}

Receptive.prototype.dispatch = function(creditCard){
    for(service of this.services){
        service.dispatch(creditCard);
    }
}
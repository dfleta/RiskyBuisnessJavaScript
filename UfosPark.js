// Constructor UfosPark

function UfosPark(name){
    this.fee = 500;
    this.float = [];
};

// Instanciador de UfosPark, si ya existe instancia devuelve esta (Patrón Singleton)

var instanceUfosPark = (function () {

    let instance;

    function createInstance(name) {
        var object = new UfosPark(name);
        return object;
    }
 
    return {
        getInstance: function (name) {
            if (!instance) {
                instance = createInstance(name);
            }
            return instance;
        }
    };
})();

// Lógica de UfosPark


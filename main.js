// Declaracion de objetos

/*var UfosPark = (function(){
    var instance;

    function createInstance(nombre, id){
        var object = new UfosPark(nombre, id);
        return object;
    }

    return {
        getInstance : function(nombre, id) {
            if (!instance) {
                instance = createInstance(nombre, id);
            }
            return instance;
        }
    };
})();

var ufo1 = UfosPark.getInstance("Sebas", 12);
var ufo2 = UfosPark.getInstance("Toni", 14);

console.log(ufo1);
console.log(ufo2);*/

function UfosPark(name){
    this.name = name;
    this.fee = 500;
    this.float = [];
}


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
 
var ufos1 = instanceUfosPark.getInstance("sebas");
var ufos2 = instanceUfosPark.getInstance("alberto");

console.log(ufos1);
console.log(ufos2); 
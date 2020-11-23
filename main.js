const CreditCard = require("./CreditCard.js");
const UfosPark = require("./UfosPark");

var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");

console.log("\nTarjeta de Abradolph\n====================");

console.log(abradolph);

var ufosPark = UfosPark.singletonUfosPark().getInstance();

ufosPark.addUfo("unx");
ufosPark.addUfo("dox");

ufosPark.dispatch(abradolph);
ufosPark.dispatch(abradolph);

console.log(abradolph);
console.log(ufosPark);
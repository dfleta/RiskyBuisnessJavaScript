const CreditCard = require("./CreditCard.js");
const UfosPark = require("./UfosPark");

var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
var morty = new CreditCard("Morty Smith", "2134346557687964363");

console.log("\nTarjeta de Abradolph\n====================");

console.log(abradolph);

var ufosPark = UfosPark.singletonUfosPark().getInstance();

ufosPark.addUfo("unx");
ufosPark.addUfo("dox");

ufosPark.dispatch(abradolph);
ufosPark.dispatch(abradolph);
ufosPark.dispatch(morty);

console.log(abradolph);
console.log(ufosPark);
console.log(ufosPark.getUfoOf(abradolph));
console.log(ufosPark.getUfoOf(morty));
console.log(ufosPark.constainsCard(abradolph));
console.log(ufosPark.constainsCard(morty));
console.log(ufosPark.cardNumbers());
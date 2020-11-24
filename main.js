const CreditCard = require("./CreditCard.js");
const UfosPark = require("./UfosPark");
const CrystalExpender = require("./CrystalExpender");

var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
var morty = new CreditCard("Morty Smith", "2134346557687964363");
var squanch = new CreditCard("Squanchy Squanch", "876778567569879098")
var ufosPark = UfosPark.singletonUfosPark().getInstance();
var crystalExpender = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();

console.log("\n==================== Tarjeta de Abradolph ====================\n");

console.log(abradolph);

console.log("\n==================== Tarjeta de Morty ====================\n");

console.log(morty);

console.log("\n==================== Tarjeta de Squanchy ====================\n");

console.log(squanch);

console.log("\n==================== UfosPark sin ufos ====================\n");

console.log(ufosPark);

console.log("\n=============== Añadir unx y dox a UfosPark ================\n");

ufosPark.addUfo("unx");
ufosPark.addUfo("dox");

console.log(ufosPark);

console.log("\n================ Abradolph quiere un ufo ==================\n");

ufosPark.dispatch(abradolph);

console.log(ufosPark);
console.log(abradolph);

console.log("\n================ Abradolph quiere otro ufo ==================\n");

ufosPark.dispatch(abradolph);

console.log(ufosPark);
console.log(abradolph);

console.log("\n=========== Abradolph no puede adquirir otro ufo ===========\n");
console.log("\n================ Morty quiere un ufo ==================\n");

ufosPark.dispatch(morty);

console.log(ufosPark);

console.log("\n================ Squanchy quiere un ufo ==================\n");

ufosPark.dispatch(squanch);

console.log(ufosPark);
console.log(squanch);

console.log("\n============= No hay ufos para Squanchy =============\n");
console.log("\n================= Nuevo CystalExpender ================\n");

console.log(crystalExpender);

console.log("\n================ Abradolph quiere un Crystal ==================\n");

crystalExpender.dispatch(abradolph);

console.log(crystalExpender);
console.log(abradolph);

console.log("\n================ Morty quiere dos Crystales ==================\n");

crystalExpender.dispatch(morty);
crystalExpender.dispatch(morty);

console.log(crystalExpender);
console.log(morty);

console.log("\n================ Squanchy quiere cinco Crystales ==================\n");

crystalExpender.dispatch(squanch);
crystalExpender.dispatch(squanch);
crystalExpender.dispatch(squanch);
crystalExpender.dispatch(squanch);
crystalExpender.dispatch(squanch);

console.log(crystalExpender);
console.log(squanch);
const menus = require("./db/menus.json");
const crystalExpenders = require("./db/crystalExpender.json");
const ufos = require("./db/ufos.json");

const CreditCard = require("./creditCard/CreditCard");
const UfosPark = require("./ufosPark/UfosPark");
const CrystalExpender = require("./crystalExpender/CrystalExpender");
const Receptive = require("./receptive/Receptive");
const RickMenu = require("./rickMenu/RickMenu");

var abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
var morty = new CreditCard("Morty Smith", "2134346557687964363");
var squanch = new CreditCard("Squanchy Squanch", "876778567569879098");
var birdMan = new CreditCard("Hombre Pájaro", "87667596747966986");
var jerry = new CreditCard("Jerry Smith", "23523670538742");

var ufosPark = UfosPark.singletonUfosPark().getInstance();
var crystalExpender = CrystalExpender.singletonCrystalExpender(crystalExpenders.crystalExpender2.price, crystalExpenders.crystalExpender2.stck).getInstance();
var rickMenu = RickMenu.singletonRickMenu(menus.menu3.stck, menus.menu3.price).getInstance();
var receptive = Receptive.singletonReceptive().getInstance();

console.log("\n==================== Tarjeta de Abradolph ====================\n");

console.log(abradolph);

console.log("\n==================== Tarjeta de Morty ====================\n");

console.log(morty);

console.log("\n==================== Tarjeta de Squanchy ====================\n");

console.log(squanch);

console.log("\n============== Tarjeta de Jerry sin credito ============\n");

jerry.pay(3000);
console.log(jerry);

console.log("\n==================== UfosPark sin ufos ====================\n");

console.log(ufosPark);

console.log("\n=============== Añadir unx y dox a UfosPark ================\n");

ufosPark.addUfo(ufos.ufo1.name);
ufosPark.addUfo(ufos.ufo2.name);

console.log(ufosPark);

console.log("\n================ Jerry quiere un ufo ==================\n");

ufosPark.dispatch(jerry);

console.log(ufosPark);
console.log(jerry);

console.log("\n=========== Jerry no puede adquirir un ufo ===========\n");
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

console.log("\n=============== Añadir trex y cuatrx a UfosPark ================\n");

ufosPark.addUfo(ufos.ufo3.name);
ufosPark.addUfo(ufos.ufo4.name);

console.log(ufosPark);

console.log("\n================ Nuevo servicio de RickMenú ==================\n")

console.log(rickMenu);

console.log("\n================ Despachamos a BirdMan y Morty ==================\n")

rickMenu.dispatch(birdMan);
rickMenu.dispatch(morty);

console.log(rickMenu)

console.log("\n================ Nuevo Receptivo ==================\n");

console.log(receptive);

console.log("\n======= Añadimos los servicios al Receptivo ========\n");

receptive.registerService(ufosPark);
receptive.registerService(crystalExpender);

console.log(receptive);

console.log("\n==== El Receptivo atiende a BirdMan y a Morty ====\n");

receptive.dispatch(squanch);
receptive.dispatch(birdMan);

console.log(ufosPark);
console.log(crystalExpender);
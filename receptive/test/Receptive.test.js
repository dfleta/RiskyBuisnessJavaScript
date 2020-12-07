const { expect } = require('@jest/globals');
const { TestScheduler } = require('jest');

const Reptive = require("../Receptive");
const UfosPark = require("../../ufosPark/UfosPark");
const CrystalExpender = require("../../crystalExpender/CrystalExpender");
const CreditCard = require("../../creditCard/CreditCard")

test("Comprobar singleton", () => {
    var receptiveOne = Reptive.singletonReceptive().getInstance();
    var receptiveTwo = Reptive.singletonReceptive().getInstance();

    expect(receptiveOne).toMatchObject(receptiveTwo);
});

test("Registrar servicios", () => {
    var receptiveActual = Reptive.singletonReceptive().getInstance();
    var ufosPark = UfosPark.singletonUfosPark().getInstance();
    var crystalExpender = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    
    receptiveActual.registerService(ufosPark);
    receptiveActual.registerService(crystalExpender);

    servicesExpected = [];
    servicesExpected.push(ufosPark, crystalExpender);

    expect(receptiveActual.services).toEqual(servicesExpected);
});

test("Dispatch servicios", () => {
    var card = new CreditCard("sebas", "1238486384932")
    var receptive = Reptive.singletonReceptive().getInstance();
    var crystalExpenderActual = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();

    ufosParkActual.addUfo("Unx");
    ufosParkActual.addUfo("Dox");
    
    var crystalExpenderExpected = {
        cost : 50,
        stock : 49
    }

    var flotaUfosExpected = new Map();
    flotaUfosExpected.set("Unx", card);
    flotaUfosExpected.set("Dox", null);

    var ufosParkExpected = {
        fee : 500,
        float : flotaUfosExpected
    }

    receptive.registerService(ufosParkActual);
    receptive.registerService(crystalExpenderActual);

    receptive.dispatch(card);

    expect(crystalExpenderActual).toEqual(crystalExpenderExpected);
    expect(ufosParkActual).toEqual(ufosParkExpected);
});
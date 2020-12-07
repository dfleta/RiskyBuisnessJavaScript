const { expect } = require('@jest/globals');
const { TestScheduler } = require('jest');

const CrystalExpender = require("../CrystalExpender");
const CreditCard = require("../../creditCard/CreditCard");

test("Comprobar singleton", () => {
    var crystalExpenderOne = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    var crystalExpenderTwo = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();

    expect(crystalExpenderOne).toMatchObject(crystalExpenderTwo);
});

test("Crear crystalExpender", () => {
    var crystalExpenderActual = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    var crystalExpenderExpected = {
        cost : 50,
        stock : 50
    };
    expect(crystalExpenderActual).toEqual(crystalExpenderExpected);
});

test("Dispatch creditCard", () => {
    var crystalExpender = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    crystalExpender.dispatch(card);

    expect(crystalExpender.stock).toEqual(49);
});

test("No dispatch creditCard por falta de crédito", () => {
    var crystalExpender = CrystalExpender.singletonCrystalExpender(50, 50).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    card.pay(3000);
    crystalExpender.dispatch(card);

    expect(crystalExpender.stock).toEqual(50);
    expect(card.credit).toEqual(0);
});

test("No dispatch creditCard por falta de stock", () => {
    var crystalExpender = CrystalExpender.singletonCrystalExpender(50, 0).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    crystalExpender.dispatch(card);

    expect(crystalExpender.stock).toEqual(0);
    expect(card.credit).toEqual(3000);
});
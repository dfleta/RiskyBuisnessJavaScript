const { expect } = require('@jest/globals');
const { TestScheduler } = require('jest');

const RickMenu = require("../RickMenu");
const CreditCard = require("../../creditCard/CreditCard");

test("Comprobar singleton", () => {
    var rickMenuOne = RickMenu.singletonRickMenu(50, 50).getInstance();
    var rickMenyTwo = RickMenu.singletonRickMenu(50, 50).getInstance();

    expect(rickMenuOne).toMatchObject(rickMenyTwo);
});

test("Crear crystalExpender", () => {
    var rickMenuActual = RickMenu.singletonRickMenu(50, 50).getInstance();
    var ordersEmptyExpected = [];
    var rickMenuExpected = {
        cost : 50,
        stock : 50,
        orders : ordersEmptyExpected
    };
    expect(rickMenuActual).toEqual(rickMenuExpected);
});

test("Dispatch creditCard", () => {
    var rickMenu = RickMenu.singletonRickMenu(50, 50).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    var ordersExpected = [];
    ordersExpected.push(card);

    rickMenu.dispatch(card);

    expect(rickMenu.stock).toEqual(49);
    expect(rickMenu.orders).toEqual(ordersExpected);
});

test("No dispatch creditCard por falta de crédito", () => {
    var rickMenu = RickMenu.singletonRickMenu(50, 50).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    card.pay(3000);
    rickMenu.dispatch(card);

    expect(rickMenu.stock).toEqual(50);
    expect(card.credit).toEqual(0);
});

test("No dispatch creditCard por falta de stock", () => {
    var rickMenu = RickMenu.singletonRickMenu(50, 0).getInstance();
    var card = new CreditCard("Sebas", "139489759496874");

    rickMenu.dispatch(card);

    expect(rickMenu.stock).toEqual(0);
    expect(card.credit).toEqual(3000);
});
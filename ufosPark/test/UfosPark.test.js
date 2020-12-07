const { expect } = require('@jest/globals');
const { TestScheduler } = require('jest');

const UfosPark = require("../UfosPark");
const CreditCard = require("../../creditCard/CreditCard");

test("Comprobar singleton", () => {
    var ufosParkOne = UfosPark.singletonUfosPark().getInstance();
    var ufosParkTwo = UfosPark.singletonUfosPark().getInstance();

    expect(ufosParkOne).toMatchObject(ufosParkTwo);
});

test("Crear ufosPark", () => {
    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    
    var flotaUfosExpected = new Map();
    var ufosParkExpected = {
        fee : 500,
        float : flotaUfosExpected
    }
    expect(ufosParkActual).toEqual(ufosParkExpected);
});

test("Add ufos", () => {
    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    ufosParkActual.addUfo("Unx");
    ufosParkActual.addUfo("Dox");
    
    var flotaUfosExpected = new Map();
    flotaUfosExpected.set("Unx", null);
    flotaUfosExpected.set("Dox", null);
    var ufosParkExpected = {
        fee : 500,
        float : flotaUfosExpected
    }
    
    expect(ufosParkActual).toEqual(ufosParkExpected);
});

test("Existe tarjeta en la flota", () => {
    var card = new CreditCard("Sebas", "2194712849835629");

    var ufosPark = UfosPark.singletonUfosPark().getInstance();
    ufosPark.addUfo("Unx");
    ufosPark.addUfo("Dox");

    ufosPark.dispatch(card);
  
    expect(ufosPark.containsCard(card)).toEqual(true);
});

test("Dispatch card", () => {
    var card = new CreditCard("Sebas", "2194712849835629");

    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    ufosParkActual.addUfo("Unx");
    ufosParkActual.addUfo("Dox");

    ufosParkActual.dispatch(card);
    
    var flotaUfosExpected = new Map();
    flotaUfosExpected.set("Unx", card);
    flotaUfosExpected.set("Dox", null);
    var ufosParkExpected = {
        fee : 500,
        float : flotaUfosExpected
    }
    
    expect(ufosParkActual).toEqual(ufosParkExpected);
    expect(card.credit).toEqual(2500);
});

test("No dispatch card because haven't ufo", () => {
    var cardOne = new CreditCard("Sebas", "2194712849835629");
    var cardTwo = new CreditCard("Sebas", "2194712849835629");

    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    ufosParkActual.addUfo("Unx");

    ufosParkActual.dispatch(cardOne);
    ufosParkActual.dispatch(cardTwo);
    
    expect(ufosParkActual.containsCard(cardTwo)).toEqual(false);
});

test("No dispatch card because haven't credit", () => {
    var cardOne = new CreditCard("Sebas", "2194712849835629");
    var cardTwo = new CreditCard("Sebas", "2194712849835629");
    cardTwo.pay(3000);
    
    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    ufosParkActual.addUfo("Unx");
    ufosParkActual.addUfo("Trex");

    ufosParkActual.dispatch(cardOne);
    ufosParkActual.dispatch(cardTwo);
    
    expect(ufosParkActual.containsCard(cardTwo)).toEqual(false);
});

test("Get ufo of", () => {
    var card = new CreditCard("Sebas", "2194712849835629");
    
    var ufosParkActual = UfosPark.singletonUfosPark().getInstance();
    ufosParkActual.addUfo("Unx");

    ufosParkActual.dispatch(card);

    expect(ufosParkActual.getUfoOf(card)).toEqual("Unx");
});
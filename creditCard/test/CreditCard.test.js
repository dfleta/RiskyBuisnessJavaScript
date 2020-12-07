const { expect } = require('@jest/globals');
const { TestScheduler } = require('jest');

const CreditCard = require("../CreditCard");

test("Crear CreditCard", () => {
    var actualCard = new CreditCard("Sebas", "139489759496874");
    var expectedCard = {
        name : "Sebas",
        numberCard : "139489759496874",
        credit : 3000,
        SYMBOL : "EZI"
    }
    expect(actualCard).toEqual(expectedCard);
});

test("Devolver true si hay suficiente crédito", () => {
    var actualCard = new CreditCard("Sebas", "139489759496874");
    expect(actualCard.pay(2000)).toEqual(true);
});

test("Devolver false si no hay suficiente crédito", () => {
    var actualCard = new CreditCard("Sebas", "139489759496874");
    expect(actualCard.pay(4000)).toEqual(false);
});

test("Restar dinero si hay suficiente dinero", () => {
    var actualCard = new CreditCard("Sebas", "139489759496874");
    actualCard.pay(2000);
    expect(actualCard.credit).toEqual(1000);
});

test("No restar dinero si no hay suficiente crédito", () => {
    var actualCard = new CreditCard("Sebas", "139489759496874");
    actualCard.pay(4000);
    expect(actualCard.credit).toBe(3000);
});
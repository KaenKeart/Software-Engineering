const testDataLoginswag = require("../../fixtures/loginswaglabs.json")
const dataCustomer = require("../../fixtures/customer.json")

import loginSwag from "../../support/page_object/loginswag.js"
import buy from "../../support/page_object/buy.js"
describe('swaglabs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('tc-01', () => {
        cy.loginswag('', '')
        loginSwag.verifyLoginEmptyText()
    })
    it('tc-02', () => {
        cy.loginswag(testDataLoginswag.username.negative, testDataLoginswag.password.positive)
        loginSwag.verifyLoginFailText()
    })
    it('tc-03', () => {
        cy.loginswag(testDataLoginswag.username.lockuser, testDataLoginswag.password.positive)
        loginSwag.verifyLoginLockText()
    })
    it('tc-04', () => {
        cy.loginswag(testDataLoginswag.username.problemuser, testDataLoginswag.password.positive)
    })
    it('tc-05', () => {
        cy.loginswag(testDataLoginswag.username.positive1, testDataLoginswag.password.positive)
        loginSwag.verifyLoginSucessText()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.buy(dataCustomer.Firstname, dataCustomer.Lastname, dataCustomer.Code)
        buy.verifybuyText()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
    })
    it('tc-06', () => {
        cy.loginswag(testDataLoginswag.username.positive2, testDataLoginswag.password.positive)
        loginSwag.verifyLoginSucessText()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.buy(dataCustomer.Firstname, dataCustomer.Lastname, dataCustomer.Code)
        buy.verifybuyText()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
    })
    it('tc-07', () => {
        cy.loginswag(testDataLoginswag.username.positive3, testDataLoginswag.password.positive)
        loginSwag.verifyLoginSucessText()



    })
    it('tc-08', () => {
        cy.loginswag(testDataLoginswag.username.positive4, testDataLoginswag.password.positive)
        loginSwag.verifyLoginSucessText()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.wait(1000)
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
    })
})
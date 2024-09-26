const testDataLogin = require("../../fixtures/login.json")

import loginPage from "../../support/page_object/loginPage.js"
describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('tc-01', () => {
        cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
        loginPage.verifyLoginSucessText()

    })
    it('tc-02', () => {
        // cy.login('IncorrectUser', 'Password123')
        cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
        loginPage.verifyLoginErrorUsername()
        // cy.get('#username').type('incorrectUser')
        // cy.get('#password').type('Password123')
        // cy.get('#submit').click()
        // cy.get('#error').contains('Your username is invalid!')
    })
    it.only('tc-03', () => {
        // cy.login('student', 'incorrectPassword')
        cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
        loginPage.verifyLoginErrorPassword('Your password is invalid!')
        // cy.get('#username').type('student')
        // cy.get('#password').type('incorrectPassword')
        // cy.get('#submit').click()
        // cy.get('#error').should('have.text', 'Your password is invalid!')
    })
    it('tc-04', () => {

        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text', 'Logged In Successfully')
        cy.get('.wp-block-button__link').rightclick
        cy.get('.custom-logo').rightclick().trigger('mousedown');

    })
})


// describe('login', () => {
//     beforeEach(() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//     })
//     it('tc-01', () => {
//         cy.get('#username').type('student')
//         cy.get('#password').type('Password123')
//         cy.get('#submit').click()
//         cy.get('.post-title').should('have.text', 'Logged In Successfully')
//         cy.wait(3000)
//         cy.go('back')
//         cy.get('input').clear()
//     })
//     it('tc-02', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         // cy.get('#username').type('student'.repeat(25))
//         cy.get('#username').type('incorrectUser')
//         cy.get('#password').type('Password123')
//         cy.get('#submit').click()
//         // cy.get('#error').should('have.text', 'Your username is invalid!')
//         cy.get('#error').contains('Your username is invalid!')
//     })
//     it('tc-03', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('#username').type('student')
//         cy.get('#password').type('incorrectPassword')
//         cy.get('#submit').click()
//         cy.get('#error').should('have.text', 'Your password is invalid!')
//         cy.screenshot()

//     })
//     it.only('tc-04', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('#username').type('student')
//         cy.get('#password').type('Password123')
//         cy.get('#submit').click()
//         cy.get('.post-title').should('have.text', 'Logged In Successfully')
//         cy.get('.wp-block-button__link').rightclick
//         cy.get('.custom-logo').rightclick().trigger('mousedown');

//     })
// })
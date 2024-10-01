// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#submit').click()
})

Cypress.Commands.add('loginswag', (username, password) => {
    if (username) {
        cy.get('[data-test="username"]').type(username)
    }
    if (password) {
        cy.get('[data-test="password"]').type(password)
    }
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('buy', (Firstname, Lastname, Code) => {
    if (Firstname) {
        cy.get('[data-test="firstName"]').type('Kongkeart')
    }
    if (Lastname) {
        cy.get('[data-test="lastName"]').type('Narakulmongkol')
    }
    if (Code) {
        cy.get('[data-test="postalCode"]').type('Promocode')
    }
})
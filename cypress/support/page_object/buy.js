class buy {
    get buyText() {
        return cy.get('[data-test="title"]')
    }
    verifybuyText() {
        this.buyText.should('have.text', 'Checkout: Your Information')
    }
}
export default new buy();
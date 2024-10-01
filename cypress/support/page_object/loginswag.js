class loginSwag {
    get LoginSucessText() {
        return cy.get('[data-test="title"]')
    }

    verifyLoginSucessText() {
        this.LoginSucessText.should('have.text', 'Products')
    }

    get LoginFailText() {
        return cy.get('[data-test="error"]')
    }

    verifyLoginFailText() {
        this.LoginFailText.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

    get LoginEmptyText() {
        return cy.get('[data-test="error"]')
    }

    verifyLoginEmptyText() {
        this.LoginEmptyText.should('have.text', 'Epic sadface: Username is required')
    }

    get LoginLockText() {
        return cy.get('[data-test="error"]')
    }

    verifyLoginLockText() {
        this.LoginLockText.should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }

}
export default new loginSwag();
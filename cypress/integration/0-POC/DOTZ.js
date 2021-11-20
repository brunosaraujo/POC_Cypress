/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://uat.dotznext.com/vivo-web-platform/ui/default/')
    })

    it('displays two todo items by default', () => {
        cy.get('#inputNumVivo').shadow().find("dha-form-group > div > div > input")
            .type('42999676427')
    })
})

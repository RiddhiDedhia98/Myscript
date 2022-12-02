describe('Exception Handling In Cypress', () => {

    it('Navigate to webpage', () => {

        Cypress.on('fail', (error, runnable) => {

            if (!error.message.includes('buttondoestexist')) {

                throw error

            }

        })

        cy.visit('https://www.google.in');

        cy.get('#buttondoestexist')
        document.write("Error")
    })

})
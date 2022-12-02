import product from "../fixtures/product"
import checkout from "../fixtures/checkout_details" 

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Create Account test suite', () => {
        it('CreateCustomer', function(){
            cy.visit(product.createAccountPage.accountPageUrl) // site url
            //cy.wait(6000)
            cy.Create_Account();
            
        })
})
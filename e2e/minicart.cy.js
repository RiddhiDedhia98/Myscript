
import product from "../fixtures/Product"
import selectors from "../fixtures/Selectors/AddToCart"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('Simple Product test suite', () => {
    it('Simple', function(){
        cy.visit(product.simpleProduct.simpleProductUrl) // site url
        cy.wait(6000)
        cy.addTocart();
        
    })
    // it('Can delete an item from the cart slider', () => {
    //     cy.get(selectors.removeProductButton, {timeout :15000}).click()
    //     cy.get('.modal-footer .action-primary.action-accept').click()
    //     Cypress.LocalStorage.clear()

        //cy.wait(10000)
        //cy.get('.modal-footer .action-primary.action-accept').click()
        //cy.get('.action-primary.action-accept > span').click()
        //cy.wait(6000)
    // })

   
        // cy.get(selectors.miniCartProductName).then(($productName) => {
        //     const productName = $productName[0].textContent.trim()
        //     cy.wait(2000)
        //     cy.get(selectors.miniCartEditProductButton).click()
        //     cy.wait(2000)
        //     cy.get(selectors.PDPProductName).then(($productName2) => {
        //     const productName2 = $productName2[0].textContent.trim()
        //     expect(productName).to.equal(productName2)
        //   })
        // })
    

})

import 'percy/cypress';

describe('ProductPage', function () {
    it('productDetailPage', function(){
        cy.percySnapshot()
        cy.visit('https://ramudden.stag2.salecto.dk/services')
        cy.get('#product-item-info_1 > .photo > .product-image-container > .product-image-wrapper > picture > .product-image-photo').click()
        cy.get('#product-addtocart-button').click()
        cy.wait(10000)
        cy.get('#qty').clear()
        cy.get('#qty').type(10)
        cy.get('#product-addtocart-button').click()
        cy.get('.showcart').click()
    // cy.get('#top-cart-btn-checkout').click()
    // cy.get('#')
})

})
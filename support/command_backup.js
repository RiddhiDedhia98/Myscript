import product from "../fixtures/product"
import selectors from "../fixtures/selector"
import checkout from "../fixtures/checkout_details"
import 'cypress-wait-until';
Cypress.Commands.add("addTocart", (ButtonClick) => {
  //to input search text in Google and perform search
  cy.get(selectors.addToCartButton).click()
 
    cy.wait(3000)
    cy.get('.minicart-wrapper .showcart').click()
    cy.wait(2000)   
})
Cypress.Commands.add("checkout", (ButtonClick) => {
  cy.wait(6000)
  cy.get('#top-cart-btn-checkout').click()
})
Cypress.Commands.add("checkoutDetails", (ButtonClick) => {
    cy.wait(38000)
    cy.get('.form-login #customer-email-fieldset #aw-customer-email').type(checkout.email,'{enter}')
    cy.get('input[name="firstname"]').type(checkout.firstname,'{enter}')
    cy.get('input[name="lastname"]').type(checkout.lastname,'{enter}')
    cy.get('input[name="street[0]"]').type(checkout.address,'{enter}')
    cy.get('input[name="postcode"]').type(checkout.postcode,'{enter}')
    cy.get('input[name="city"]').type(checkout.city,'{enter}')
    cy.get('input[name="telephone"]').type(checkout.telephone,'{enter}')

cy.get('div').then(($div) => {
  if($div.hasClass('onestep-shipping-address')) { // Checks for Downloaded product
    if($div.hasClass('field _required fl-label fl-label-state')) {
      cy.get('select').select(1)                              
    }
  }
})
    
  })

  Cypress.Commands.add("orderClick", (ButtonClick) => {
    cy.wait(3000)
    if(cy.get('.payment-methods-inner').find('.payment-method')){
      cy.get('[type="radio"]#checkmo').check()
    }
    if(cy.get('.checkout-agreements').find('.checkout-agreement')){
      cy.get('[type="checkbox"]').check({force: true})
    }
    cy.get('.aw-onestep-sidebar-content > .actions-toolbar .action.primary.checkout', { timeout: 10000 })
      .should('be.visible')
      .wait(3000)
      .then($btn  => cy.wrap($btn).click())
      //cy.task('log', 'Product added')
  })
 
//   cy.get('div').then(($div) => {
//                 if($div.hasClass('checkout-agreements')) { // Checks for Downloaded product
//                     if($div.hasClass('checkout-agreement')) {
//                       cy.get('[type="checkbox"]').check({force: true})
                                  
//                         }
//                     }
//   })

// cy.get('div').then(($div) => {
//   if($div.hasClass('onestep-shipping-address')) { // Checks for Downloaded product
//     if($div.hasClass('field _required fl-label fl-label-state')) {
//       cy.get('select').select(1)                              
//     }
//   }
// })
    
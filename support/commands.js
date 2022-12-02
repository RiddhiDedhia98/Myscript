import product from "../fixtures/product"
import selectors from "../fixtures/selector"
import checkout from "../fixtures/checkout_details"
import 'cypress-wait-until';
Cypress.Commands.add("addTocart", (ButtonClick) => {
  //to input search text in Google and perform search
  cy.get(selectors.addToCartButton).click()
  cy.wait(5000)
      //if(cy.get('.counter-number')){
        cy.get('.counter-number').should('be.visible').click({ timeout: 10000 })
      // }
      // else {
      //   this.skip()
      // } 
})
Cypress.Commands.add("checkout", (ButtonClick) => {
  // cy.wait(6000)
  
          if(cy.get('#minicart-content-wrapper')) {
              cy.get('#top-cart-btn-checkout').click({force: true})                            
          }
})
Cypress.Commands.add("checkoutDetails", (ButtonClick) => {
    cy.wait(38000)
    cy.get('.form-login #customer-email-fieldset #aw-customer-email').type(checkout.email,'{enter}')
    cy.get('input[name="firstname"]').type(checkout.firstname,'{enter}')
    cy.get('input[name="lastname"]').type(checkout.lastname,'{enter}')
    cy.get('input[name="street[0]"]').type(checkout.address,'{enter}')
    //cy.get('input[name="stat/provins[0]').type(checkout.stat,'{enter}')
    cy.get('input[name="postcode"]').type(checkout.postcode,'{enter}')
    cy.get('input[name="city"]').type(checkout.city,'{enter}')
    cy.get('input[name="telephone"]').type(checkout.telephone,'{enter}')

    cy.get('body') // update button availble check
    .then($body=>{
      if($body.find('.action-toolbar > .action.primary').length){
        cy.get('.action-toolbar > .action.primary').click();
      }
    })

    cy.get('div').then(($div) => {
      if($div.hasClass('field _required fl-label fl-label-state')) {
          cy.get('select').eq(1).select(1,{force: true})                              
      }
      //}
    })

})
Cypress.Commands.add("orderClick", (ButtonClick) => {
    cy.wait(3000)
    if(cy.get('.payment-methods-inner').find('.payment-method')){
      cy.get('[type="radio"]#checkmo').check({force: true})
    }
    
    cy.get('div').then(($div) => {
      if($div.hasClass('checkout-agreements')) { // Checks for Downloaded product
          if($div.hasClass('checkout-agreement')) {
            cy.get('[type="checkbox"]').check({force: true})
                        
              }
          }
        })

    // cy.get('.aw-onestep-sidebar-content > .actions-toolbar .action.primary.checkout', { timeout: 10000 })
    //   .should('be.visible')
    //   .wait(3000)
    //   .then($btn  => cy.wrap($btn).click())
      //cy.task('log', 'Product added')
 })

 Cypress.Commands.add("Create_Account",(ButtonClick) => {
  cy.get('input[name="firstname"]').type(checkout.firstname,'{enter}')
  cy.get('input[name="lastname"]').type(checkout.lastname,'{enter}')
  cy.get('#email_address').type(checkout.email,'{enter}')
  cy.get('#password').type(checkout.password,'{enter}')
  cy.get('#password-confirmation').type(checkout.password,'{enter}')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  cy.wait(5000)
  cy.get('body').then($body => {
    if ($body.find('.message-error.message').length) {
      cy.task('log','User Already Exists')
      // cy.visit(product.loginPage.loginPageUrl)
      cy.get('.header .account .my-account').click()
      cy.get('#email').type(checkout.email,'{enter}')
      cy.get('#pass').type(checkout.password,'{enter}')
      cy.get('#send2').click()
    }
  })

//   })
})
//  cy.wait(1000)
  //     cy.WaitUntil()
  // cy.get(selectors.successMessage).should('be.visible')
  //         .contains(`Du har tilføjet ${product.simpleProduct.ProductName} til din indkøbskurv.`)
  //         .contains(`Du har tilføjet ${product.configProduct.ProductName} til din indkøbskurv.`)
  //         .contains(`Du har tilføjet ${product.BundleProduct.ProductName} til din indkøbskurv.`)
  //         .contains(`Du har tilføjet ${product.GroupProduct.ProductName} til din indkøbskurv.`)
  //         cy.WaitUntil()


    //  cy.get(selectors.PDPProductName).then(($productName2) => {
    //           cy.get('div').then(($div) => {
    //               if($div.hasClass('input-group-qty')){ // Change product qyt
    //                   cy.wait(5000)
    //                       cy.get('#qty')
    //                       .then($qtyText => {
    //                           if ($qtyText.is(':visible')) {
    //                               cy.wrap($qtyText).clear()
    //                               cy.wrap($qtyText).type('2')
    //                           }
    //                       })
                  
    //               }
    //           })
    // })
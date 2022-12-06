import product from "../fixtures/product"
import checkout from "../fixtures/checkout_details" 

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Simple Product test suite', () => {
    if(product.simpleProduct.isproductExists){
        it('Simple', function(){
            //cy.visit(product.simpleProduct.simpleProductUrl) // site url
            cy.visit(Cypress.env("URL"));
            cy.wait(6000)
            cy.addTocart();
            cy.checkout(); // checkout button click
            //cy.checkoutDetails(); // checkout details fill
            //cy.orderClick();
        })
    }
})

// describe('Config Product Test suite',() => {
//     if(product.configProduct.isproductExists){
//     it('config', function(){
//         cy.visit(product.configProduct.configProductUrl) // site url
//         cy.wait(6000)
//         cy.get('div').then(($div) => {
//             if($div.hasClass('box-tocart')){
//                 if($div.hasClass('product-options-wrapper')){ // checks config product
//                     if($div.hasClass('swatch-opt')){ // Checks for swatch variant
//                         cy.get('.swatch-opt')
//                         .then($configOpt => {
//                             cy.wait(5000)
//                             cy.wrap($configOpt).find('.swatch-attribute').each(($attribute) => {
//                                 cy.wait(5000)
//                                 if($attribute.find('.swatch-option').length)
//                                 cy.wrap($attribute).find('.swatch-option').then(($select1) => {
//                                 cy.wrap($select1).eq(0).click({multiple: true})
//                                 })
//                                 if($attribute.find('select').length)
//                                 cy.wrap($attribute).find('select').then(($select) => {
//                                     if($select.hasClass('swatch-select')){
//                                         cy.wrap($select).select(1);
//                                     }
//                                 })
//                             })
//                     })
//                 }
//                 if($div.hasClass('configurable')){ // Checks for dropdown only variant
//                     cy.get('.field.configurable')
//                     .then($configOpt => {
//                         cy.wait(5000)
//                         cy.wrap($configOpt).each(($attribute) => {
//                             if($attribute.find('select').length){
//                                 cy.wrap($attribute).find('select').then(($select) => {
//                                     if($select.hasClass('super-attribute-select')){
//                                         cy.wrap($select).select(1);
//                                         cy.wait(6000)
                                       
//                                     }
//                                 })
//                             }
//                         })
//                     })
                    
//                 }}
//             }
//         }) 
//        cy.addTocart();
//        cy.checkout(); // checkout button click
//     //    cy.checkoutDetails(); // checkout details fill
//     //    cy.orderClick();
//     })
//     }
   
// })

// describe('Bundle Product test suite', () => {
//     if(product.bundleProduct.isproductExists){
//     it('Bundle', function(){
//         cy.visit(product.bundleProduct.bundleProductUrl) // site url
//         cy.wait(6000)
//         cy.get('div').then(($div) => {
//             if($div.hasClass('bundle-actions')){ // Checks for Bundle product 
//                 cy.wait(5000)
//                 cy.get('#bundle-slide').click();
//                 cy.wait(5000)
//                 cy.get('.fieldset-bundle-options').then(($bundleoptions) => {
//                     cy.wrap($bundleoptions).find('.field.option').each(($options) => {
//                         if($options.find('select').length){ //Checks for dropdown type in Bundle Prod
//                             cy.wrap($options).find('select').each(($select) => {
//                                 if($select.hasClass('bundle-option-select')){
//                                     cy.wrap($select).select(1);
//                                 }
//                             })
//                         }
//                         if($options.find('.options-list > .field.choice > .checkbox').length){ //Checks for checkbox type in Bundle Prod
//                             cy.wrap($options).find('.options-list > .field.choice').eq(0)
//                             .find('input[type="checkbox"]')
//                                 .check()
//                         }
//                         if($options.find('.options-list > .field.choice > .radio').length){ // Checks for radio type in Bundle Prod
//                             cy.wrap($options).find('.options-list > .field.choice').eq(0)
//                             .find('input[type="radio"]')
//                                 .check();
//                         }
//                         if($options.find('select.multiselect').length){ // Checks for multiselect type in Bundle Prod
//                             cy.wrap($options).find('select.multiselect').each(($select) => {
//                                 // if($select.hasClass('bundle-option-select')){
//                                     cy.wrap($select).select(0);
//                                 // }
//                             })
//                         }
//                     })
//                 })
//             }
//         })
//         cy.addTocart();
//         cy.checkout(); // checkout button click
//         // cy.checkoutDetails(); // checkout details fill
//         // cy.orderClick();
//     })
//     }
// })

// describe('Group Product test suite', () => {
//     if(product.groupProduct.isproductExists){
//     it('Group', function(){
//         cy.visit(product.groupProduct.groupProductUrl) // site url
//         cy.wait(6000)
//         cy.get('div').then(($div) => {
//             if($div.hasClass('grouped')){ // checks for group product 
//                 cy.get('tbody tr')
//                 .then($tr => {
//                     cy.wait(5000)
//                     cy.wrap($tr).find('.control.qty').each(($attribute) => {
//                         if($attribute.find('.input-text.qty').length)
//                         cy.wrap($attribute).find('.input-text.qty').then(($qty) => {
//                             cy.wrap($qty).clear()
//                             cy.wrap($qty).type('2')
//                         })
//                     })
//                 })
//             }
//         })
//         cy.addTocart();
//         cy.checkout(); // checkout button click
//         // cy.checkoutDetails(); // checkout details fill
//         // cy.orderClick();
//     }) 
//     }
// })

// describe('Download Product test suite', () => {
//     if(product.downloadProduct.isproductExists){
//     it('Download', function(){
//         cy.visit(product.downloadProduct.downloadProductUrl) // site url
//         cy.wait(6000)
//         cy.get('div').then(($div) => {
//             if($div.hasClass('downloads')) { // Checks for Downloaded product
//                 if($div.hasClass('field downloads required')) {
//                     cy.get('.field.downloads.required').then(($check) => {
//                         cy.get('input[type="checkbox"]')
//                             .each(($ele, index) => {
//                                 if (index === 0) {
//                                     cy.wrap($ele).click();
//                                     cy.wait(5000)
//                                 }
//                             })
//                      })
//                 }
//             }
//             cy.addTocart();
//             //cy.showCart()
//             //cy.deleteProduct()
//             cy.checkout() // checkout button click
//             cy.get('#customer-email').type(checkout.email,'{enter}')
//             cy.get('#pass').type(checkout.password,'{enter}')
//             cy.get('#send2').click()
//             cy.wait(38000)
//             //cy.orderClick();
//         })
//     }) 
//     }
// })



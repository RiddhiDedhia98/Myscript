/// <reference types="cypress" />
describe('Home Page', function () {
    it('visit site', function(){
   
        cy.visit('https://cleanmanagement.stag2.salecto.dk/') // site url
        cy.wait(6000)
    })
   
    it('Product Add', () => { 
       
        cy.get('.product-item-info > a.product-item-photo').eq(0).click({force: true});
        cy.get('div').then(($div) => {
            if($div.hasClass('product-options-wrapper')){ // check config product
         
                if($div.hasClass('swatch-opt')){
                    cy.get('.swatch-opt')
                    .then($configOpt => {
                        cy.wait(5000)
                            cy.wrap($configOpt).find('.swatch-attribute').each(($attribute) => {
                                cy.wait(5000)
                                if($attribute.find('.swatch-option').length) // Checks for visual swatch
                                cy.wrap($attribute).find('.swatch-option').then(($select1) => {
                                cy.wrap($select1).eq(0).click({multiple: true})
                                })
                                if($attribute.find('select').length) // Checks for dropdown when visual swatch is available in same product
                                cy.wrap($attribute).find('select').then(($select) => {
                                    if($select.hasClass('swatch-select')){
                                        cy.wrap($select).select(1);
                                    }
                                })
                            })
                    })
                }

                if($div.hasClass('configurable')){ // Checks for only dropdown in the config product
                    cy.get('.field.configurable')
                    .then($configOpt => {
                        cy.wait(5000)
                        cy.wrap($configOpt).each(($attribute) => {
                            if($attribute.find('select').length){
                                cy.wrap($attribute).find('select').then(($select) => {
                                    if($select.hasClass('super-attribute-select')){
                                        cy.wrap($select).select(1);
                                    }
                                })
                            }
                        })
                    })
                }
                
            }

            if($div.hasClass('grouped')){ // check group product (run sucess)
                cy.get('tbody tr')
                .then($tr => {
                    cy.wait(5000)
                    cy.wrap($tr).find('.control.qty').each(($attribute) => {
                        if($attribute.find('.input-text.qty').length)
                        cy.wrap($attribute).find('.input-text.qty').then(($qty) => {
                            cy.wrap($qty).clear()
                            cy.wrap($qty).type('1')
                        })
                    })
                })
            }
            
                if($div.hasClass('downloads')) { // Test for download product: Links can be purchased separately
                    if($div.hasClass('field downloads required')) {
                        cy.get('.field.downloads.required').then(($check) => {
                            cy.get('input[type="checkbox"]')
                                .each(($ele, index) => {
                                    if (index === 0) {
                                        cy.wrap($ele).click();
                                    }
                                })
                         })
                    }
                }    
               
            if($div.hasClass('input-group-qty')){ // Change product qyt
             cy.wait(5000)
                cy.get('#qty')
                .then($qtyText => {
                    if ($qtyText.is(':visible')) {
                        cy.wrap($qtyText).clear()
                        cy.wrap($qtyText).type('2')
                    }
                })
            }
        })
        
        // if(cy.get('#downloadable-links-list')){
        //     cy.get('.fieldset')
        //     .then($tr => {
        //         cy.wait(5000)
        //         cy.get('[type="checkbox"]').check()
        //         // cy.wrap($select).select(1);
                
        //      });
        // }
        
        cy.get('#product-addtocart-button').click(); // Add product to cart
        cy.clearCookies()
    });
    
})
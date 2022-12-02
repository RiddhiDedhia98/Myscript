// <reference types="cypress" />
import '@percy/cypress';

describe('Home Page', function () {
    it('visit site', function(){
        cy.visit('https://malericentralen.stag2.salecto.dk/snejbjergrammen/') // site url
        cy.wait(6000)
        cy.percySnapshot();
    })
    // // home page slider , click on second slider
    // it('Slider', function () {
    //     cy.get('ul').then(($ul) => {
    //     // cy.scrollTo(0, 500)
    //         if ($ul.hasClass('slick-dots')) {
    //             cy.wait(1000)
    //             cy.get('.slick-dots > li').eq(1).click({ multiple: true, force: true })
    //         }
    //       })
    // })
    //  Click on prev link
    // it('Clicks every prev', () => { //prev
    //         cy.get('.slick-prev').each(($button) => {
    //         cy.wrap($button).click()
    //         cy.wait(5000)
    //     })
    // })
    // // Click on every product slider first product
    it('Product click', () => { //prev
        cy
        .percySnapshot()
        .get('.slick-track')
        .find('li.product-item > .product-item-info > a.product-item-photo:first')
        // cy.log('url check: ', $ele);
        .then($els => [...$els].map((a) => a.href))
        .each(url => {
            // cy.log('url check: ', $ele);
            cy.get('.slick-track').find('a[href="'+url+'"]').first().click();
            cy.go('back');
            //cy.wait(5000);
            cy.percySnapshot();
        })
    });
    it('Product Add', () => { //prev
        cy.get('.product-item-info > a.product-item-photo').eq(4).click({force: true});
        cy.get('.swatch-opt')
        .then($configOpt => {
            cy.wait(5000)
                cy.wrap($configOpt).find('.swatch-attribute').each(($attribute) => {
                    cy.wait(5000)
                    cy.get('div').then(($div) => {
                        if($div.hasClass('swatch-option')){
                            cy.get('.swatch-option').eq(0).click()
                        }
                    })
                    if($attribute.find('select').length)
                    cy.wrap($attribute).find('select').then(($select) => {
                        cy.wait(4000)
                        if($select.hasClass('swatch-select')){
                            cy.wrap($select).select(1);
                        }
                    })
                })
        })
        cy.get('#qty')
        .then($qtyText => {
            if ($qtyText.is(':visible')) {
                cy.wrap($qtyText).clear()
                cy.wrap($qtyText).type('2')
            }
        })
        cy.get('#product-addtocart-button').click();
    });
    //Newsletter
    // it('Newsletter', () =>{
    //     cy.get('div').then(($div) => {
    //             // cy.scrollTo(0, 500)
    //                 if ($div.hasClass('newsletter')) {
    //                     // Enter blank value
    //                     cy.get('#newsletter').type('  {enter}')
    //                     cy.wait(4000)
    //                     cy.get('#newsletter-error').contains('Dette er et obligatorisk felt.')
    //                     // Enter wrong value
    //                     cy.get('#newsletter').type('kla{enter}')
    //                     cy.wait(4000)
    //                     cy.get('#newsletter-error').contains('Angiv en gyldig e-mail-adresse (Ex: johndoe@domain.com).')
    //                     // Enter correct value
    //                     // cy.get('#newsletter').type('kla@salecto.in{enter}')
    //                     // cy.wait(4000)
    //                     // cy.get('.page.messages').contains('Tak for din tilmelding.')
    //                     // already register
    //                     cy.get('#newsletter').type('kla@salecto.in{enter}')
    //                     cy.wait(4000)
    //                     cy.get('.page.messages').contains('Denne e-mailadresse er allerede tilmeldt.')
    //                 }
    //     })
    // })
})





/// <reference types="Cypress" />

import ProductElectronicsPage from '../../support/page_Object/productElectronics_page'

const dbData = require('../../fixtures/dbElectronics.js')

describe('Buy Electronics', function() {

    this.beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    });

    it('Checkout passing many products', () => {
        dbData.productName.forEach(function(item){
            cy.selectProductByElement('.card-title', item);
        });

        cy.get('a.nav-link.btn.btn-primary').then(($el)=>{
            const amount = $el.text();
            let res=amount.match(/\d+/g)[0];
            expect(Number(res)).to.be.eq(dbData.productName.length);
        });

        ProductElectronicsPage
            .goToCheckoutPage()
            .goToCountryPage();
    });
});
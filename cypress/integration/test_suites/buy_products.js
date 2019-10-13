/// <reference types="Cypress" />

import ProductPage from '../../support/page_Object/productMarket_page'
import CardPage from '../../support/page_Object/cardMarket_page'
import CountryPage from '../../support/page_Object/countryMarket_page'

const dbData = require('../../fixtures/dbMarket.js')

describe('Buy products successfuly', () => {
   
        beforeEach(() => {
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        });
    
        it('Buy different products', () => {

            ProductPage
                .search_by(dbData.checkout_data_many_products.searchBy)
                .select_products(dbData.checkout_data_many_products.product_names)
                .clickOnCheckout()
                .goToNextPage();

            CardPage
                .validate_card_checkout_data()
                .clickOnNextPage();

            CountryPage
                .select_country(dbData.country)
                .check_agreement()
                .goToNextPage();
    });

    it('Buy only a product', () => {
    
        ProductPage
            .search_by(dbData.checkout_data_only_one_product.searchBy)
            .select_products(dbData.checkout_data_only_one_product.product_name)
            .clickOnCheckout()
            .goToNextPage();

        CardPage
            .validate_card_checkout_data()
            .clickOnNextPage();

        CountryPage
            .select_country(dbData.country)
            .check_agreement()
            .goToNextPage();
    });
});
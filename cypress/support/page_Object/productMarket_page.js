class ProductPage {

    search_by(txt){
        cy.get('.search-keyword').clear().type(txt);
        cy.wait(2000);
        return this;
    }

    get_total_items(){
        return cy.get(':nth-child(1) > :nth-child(3) > strong');
    }

    get_total_price(){
        return cy.get(':nth-child(2) > :nth-child(3) > strong');
    }

    get_products(){
        return cy.get('.products .product');
    }

    clickOnCheckout(){
        cy.get('.cart-icon > img').click();
        return this;
    }

    goToNextPage(){
        return cy.contains('PROCEED TO CHECKOUT').click();
    }

    select_products(chosen_products){

        let total_price = 0;

        this.get_products().each((element, index, list) => {
            let product_name = element.find('.product-name').text().split('-');
            product_name = product_name[0].trim();

            if(chosen_products.includes(product_name)){
                const price = element.find('.product-price').text();
                total_price = Number(total_price) + Number(price);
                element.find('button').click();
                expect(element.find('button').text()).to.eq('✔ ADDED');
            }
        });

        this.get_total_items().then((element) =>{
            expect(Number(element.text())).to.eq(chosen_products.length);
        });

        this.get_total_price().then((element) =>{
            expect(Number(element.text())).to.eq(total_price);
        });
        return this;
    }
}
export default new ProductPage();
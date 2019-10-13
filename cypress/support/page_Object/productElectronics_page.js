const start_checkout_btn = 'a.nav-link.btn.btn-primary';
const finish_checkout_btn = 'button.btn.btn-success'

class ProductElectronicsPage{

    goToCheckoutPage(){
        cy.get(start_checkout_btn).click();
        return this;
    }

    goToCountryPage(){
        cy.get(finish_checkout_btn).click();
        return this;
    }
}
export default new ProductElectronicsPage();
class CountryPage{

    select_country(country){
        cy.get('select').select(country).should('have.value', country);
        return this;
    }

    check_agreement(){
        cy.get('.chkAgree').check();
        return this;
    }

    goToNextPage(){
        cy.contains('Proceed').click();
        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/');
    }
}
export default new CountryPage();
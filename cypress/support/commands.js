// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add("selectProductByElement", (element, productName) => {
    cy.get(element).each(function(item, index){
       if(item.text().includes(productName)){
           cy.get('.card-footer').find('button').eq(index).click();
       }
   });
});

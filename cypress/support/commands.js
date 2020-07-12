// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import '@4tw/cypress-drag-drop';

Cypress.Commands.add('muiDemo', hash => {
  cy.visit('/');
  cy.hash().should('be.empty');
  cy.get(`a[href="${hash}"]`).click({ force: true });
  cy.hash().should('eq', hash);
});

Cypress.Commands.add('checkColHeaders', columnsContents => {
  cy.get('th').each(($el, index) => {
    expect($el).to.contain(columnsContents[index]);
  });
});

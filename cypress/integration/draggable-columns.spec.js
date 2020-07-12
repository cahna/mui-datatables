/// <reference types="cypress" />

context('Draggable columns', () => {
  beforeEach(() => {
    cy.muiDemo('#draggable-columns');
  });

  it('supports column drag-and-drop', () => {
    cy.get('thead')
      .should('have.class', 'MuiTableHead-root')
      .within(() => {
        cy.get('th').should('have.length', 5);
        cy.checkColHeaders(['Name', 'Title', 'Location', 'No Drag', 'Phone']);

        // Drag 1st col to 3rd position
        cy.get('th:first').should('have.attr', 'data-colindex', '1');
        cy.get('th:first span[draggable="true"]').drag('th:nth-child(3)', { position: 'left' });
        cy.get('th:first').should('have.attr', 'data-colindex', '2');
        cy.checkColHeaders(['Title', 'Location', 'Name', 'No Drag', 'Phone']);

        // Do it again
        cy.get('th:first span[draggable="true"]').drag('th:nth-child(3)', { position: 'left' });
        cy.get('th:first').should('have.attr', 'data-colindex', '3');
        cy.checkColHeaders(['Location', 'Name', 'Title', 'No Drag', 'Phone']);
      });
  });
});

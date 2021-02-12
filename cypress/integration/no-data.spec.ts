/// <reference types="cypress" />
import data from '../mocks/no-data.json';

describe('Search (with no data)', () => {
  it('renders the no data message', () => {
    cy.intercept('POST', 'https://api.github.com/graphql', {
      delayMs: 1000,
      body: JSON.stringify(data),
    });
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-search]').type('github-user');
    // Triggering the click on submit - for fetching data
    // There is a delay configured for 2000ms
    cy.get('[data-cy=user-submit]').click();
    // Wait for 1000ms
    cy.wait(1000);
    //no data found div should be rendered
    cy.get('[data-cy=no-data-found]').should('be.visible');
    // Should contain text "No data found!"
    cy.contains('No data found!').should('be.visible');
  });
});

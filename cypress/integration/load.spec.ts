/// <reference types="cypress" />

describe('Initial App load', () => {
  it('renders the user search form', () => {
    cy.visit('http://localhost:3000');
    const userForm = cy.get('[data-cy=user-form]');
    userForm.should('be.visible');
    cy.get('[data-cy=user-search]').should('be.visible');
    cy.get('[data-cy=user-submit]').should('be.visible');
  });
  // check if the button rendered is disabled
  it('check if the button rendered is disabled', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-submit]').should('be.disabled');
  });
  // check if the input field is empty
  it('check if the input field is empty', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-search]').should('be.empty');
  });
});

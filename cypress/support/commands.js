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
//

// -- This is a parent command --
Cypress.Commands.add('login', () => { 
    cy.visit('http://localhost:3000/login');
    cy.get("input[id='email']").type('timA@mail.com');
    cy.wait(1000);
    cy.get("input[id='password']").type('password');
    cy.wait(1000);
    cy.get('#action-select').contains('-Login sebagai-');
    cy.get('#action-select').click();
    cy.get('div[role="option"]:contains("Tutor")').click();
    cy.get('button:contains("Login")').first().click();
    cy.contains('Beranda');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

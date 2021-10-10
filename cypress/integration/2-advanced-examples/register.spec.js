describe ('Register page auth app', ()=> {
    it ('succcesfuly loads', () => {
        cy.visit('http://localhost:3000/register');
    });
    it  ('Register correctly', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('.query-form').within(() => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Isi username atau email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Isi Ulang Password')
    });
    cy.get("input[id='email']").type('timA@mail.com');
    cy.wait(1000);
    cy.get("input[id='password']").type('password');
    cy.wait(1000);
    cy.get("input[id='re-password']").type('password');
    cy.wait(1000);
    cy.get('.action-select').should('have.value', '-Register sebagai-')
    cy.get('.action-select').select('Tutor')
    cy.get('.action-select').should('have.value', 'fr-Learner')
    cy.get('form').submit();
    cy.contains('Register Success');
    });
    });
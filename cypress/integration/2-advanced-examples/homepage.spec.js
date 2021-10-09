describe ('Home page auth app', ()=> {
    it ('redirected to login if not logged in', () => {
        cy.visit('http://localhost:3000/');
        cy.location('pathname').should('eq','/login')
    });
    it  ('can see Homepage correctly', () => {
        cy.login();
        cy.location('pathname').should('eq','/homepage');
        cy.contains('Banking Crowd Academy');
        cy.contains('Kelas');
        cy.contains('Artikel');
    });
    });

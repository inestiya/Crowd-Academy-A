describe ('Login page auth app', ()=> {
    it ('succcesfuly loads', () => {
        cy.visit('http://localhost:3000/login');
    });
    it  ('Login correctly', () => {
        cy.login();
    });
    });
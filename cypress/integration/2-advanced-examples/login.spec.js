describe ('Login page auth app', ()=> {
    it ('succcesfuly loads', () => {
        cy.visit('http://127.0.0.1:3000/login');
    });
    it  ('Login correctly', () => {
        cy.login();
    });
    });
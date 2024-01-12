Cypress.Commands.add("loginUser", (email, password) => {
    cy.get("#user_email").type(email);
    cy.get("#user_password").type(password);
    cy.get('button[type="submit"]').click();
  });

  describe('User can login to GoIT page', () => {
    it('succesfully login to the GoIT page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.loginUser('user888@gmail.com','1234567890');
        cy.get('button[data-element-type="burger-menu"]').click();
        cy.get(':nth-child(8) > .next-bve2vl').click();

    })
})

describe('User can login to GoIT page', () => {
    it('succesfully login to the GoIT page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.loginUser('testowyqa@qa.team','QA!automation-1');
        cy.get('button[data-element-type="burger-menu"]').click();
        cy.get(':nth-child(8) > .next-bve2vl').click();

    })
})
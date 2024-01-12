describe('User can login to GoIT page', () => {
    it('succesfully login to the GoIT page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.get('#user_email').type('user888@gmail.com');
        cy.get('[name="password"]').type('1234567890');
        cy.get('button[type="submit"]').click();

    })
})


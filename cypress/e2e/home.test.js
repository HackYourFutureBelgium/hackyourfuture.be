describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('our program', { matchCase: false });
        });
    });
});

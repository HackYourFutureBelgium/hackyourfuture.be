describe('Program page', () => {
    beforeEach(() => {
        cy.visit('/program');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('your new career starts here', { matchCase: false });
        });
    });
});

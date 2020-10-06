describe('About page', () => {
    beforeEach(() => {
        cy.visit('/about');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('what is hack your future about', { matchCase: false });
        });
    });
});

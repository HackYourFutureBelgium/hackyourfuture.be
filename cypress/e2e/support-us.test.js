describe('Support Us page', () => {
    beforeEach(() => {
        cy.visit('/support-us');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('why become a partner', { matchCase: false });
        });
    });
});

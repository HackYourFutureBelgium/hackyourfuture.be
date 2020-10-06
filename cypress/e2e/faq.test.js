describe('Faq page', () => {
    beforeEach(() => {
        cy.visit('/faq');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('faq', { matchCase: false });
        });
    });
});

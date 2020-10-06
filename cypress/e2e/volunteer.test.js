describe('Volunteer page', () => {
    beforeEach(() => {
        cy.visit('/volunteer');
    });

    describe('Page interactions', () => {
        it('renders fine', () => {
            cy.get('main').contains('why should I volunteer at hyf?', { matchCase: false });
        });
    });
});

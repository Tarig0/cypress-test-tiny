describe('fail',  () => {
    afterEach(() => {
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').then(($el)=> {$el.val('speed')}).should('have.value','speed');
        cy.get('input[value="Google Search"]').click();
    });
    it('will fail',() => {
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').type('speed').should('have.value','speed');
        cy.get('input[value="Google Searches"]');
    });
});
describe('pass',  () => {
    afterEach(() => {
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').then(($el)=> {$el.val('speed');}).should('have.value','speed');
        cy.get('input[value="Google Search"]').click();
    });
    it('will fail',() => {
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').type('speed').should('have.value','speed');
        cy.get('input[value="Google Searches"]');
    });
});

describe('fail', function () {
    afterEach(function(){
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').type('speed');
        cy.get('input[value="Google Search"]').click();
    });
    it('will fail',function(){
        cy.visit('https://www.google.com');
        cy.get('#lst-ib').type('speed');
        cy.get('input[value="Google Searches"]');
    });
});

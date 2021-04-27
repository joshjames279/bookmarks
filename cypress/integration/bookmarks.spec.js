describe("Bookmark page tests:", function(){

    beforeEach(function(){
        cy.visit('/')
    })
    it("Checks for header:", function(){
        cy.contains('Bookmarks');
    })
    it("Checks for a bookmark url", function() {
        cy.contains('https://google.com');
    })
    it("Checks for the second bookmark url", function() {
        cy.contains('https://sourcemaking.com/refactoring/smells');
    })
}) 
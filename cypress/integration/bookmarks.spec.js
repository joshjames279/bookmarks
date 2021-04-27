describe("Bookmark page tests:", function(){

    beforeEach(function(){
        cy.visit('/')
    })

    it("Checks for header:", function(){

        cy.contains('Bookmarks');
    })
}) 
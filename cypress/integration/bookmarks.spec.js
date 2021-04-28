describe("Bookmark page tests:", function(){
    
    beforeEach(function(){
        cy.exec("NODE_ENV=test npm run db:reset");
        cy.visit('/')
    })

    it("Checks for a form and add button", function(){
            cy.visit('/')
            cy.get('#addForm').should('be.visible')
            cy.get('#addButton').should('be.visible')  
    })

    it("Adds a new bookmark", function(){
        cy.visit('/')
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()  
    })

    it("Checks for header:", function(){
            cy.visit('/')
            cy.contains('Bookmarks');
    })
}) 
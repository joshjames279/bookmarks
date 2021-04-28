describe("Bookmark page tests:", function(){
    
  
    // beforeEach(function(){
    //     cy.exec("npm run db:reset");
    //     cy.visit('/')
    // })
    
   
    // it("Checks for a bookmark url", function() {
    //     cy.contains('https://google.com');
    // })
    // it("Checks for the second bookmark url", function() {
    //     cy.contains('https://sourcemaking.com/refactoring/smells');
    // })

    it("Checks for a form and add button", function(){
        cy.exec("npm run db:reset").then(() => {
            cy.visit('/')
            cy.get('#addForm').should('be.visible')
            cy.get('#addButton').should('be.visible')
        })
        
    })

    // it("Adds a new bookmark", function(){
    //     cy.exec("npm run db:reset");
    //     cy.visit('/')
    //     cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
    //     cy.get('#addButton').click()  
    // })
    it("Checks for header:", function(){
        cy.exec("npm run db:reset").then(() => {
            cy.visit('/')
            cy.contains('Bookmarks');
        })
  
    })
}) 
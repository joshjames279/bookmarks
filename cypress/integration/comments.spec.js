describe("Bookmark page tests:", function(){
    
    beforeEach(function(){
        cy.task("resetDb");
        cy.visit('/bookmarks')
    })

it("Check ability to add a comment", function(){
    cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
    cy.get('#addButton').click()
    cy.get('#addForm').type('https://google.com')
    cy.get('#addButton').click()

    cy.get('#comment-button-1').click()
    cy.get('#commentForm').type("A lovely search engine")
    cy.get("#commentButton").click()
    cy.contains("A lovely search engine")
    })

    it("Check ability to add comments", function(){
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()
        cy.get('#addForm').type('https://google.com')
        cy.get('#addButton').click()
    
        cy.get('#comment-button-1').click()
        cy.get('#commentForm').type("A lovely search engine")
        cy.get("#commentButton").click()
        cy.contains("A lovely search engine")
        cy.get('#comment-button-0').click()
        cy.get('#commentForm').type("I know")
        cy.get("#commentButton").click()
        cy.contains("I know")
        })

})
describe("Bookmark page tests:", function(){
    
    beforeEach(function(){
        cy.task("resetDb");
        cy.visit('/bookmarks')
    })

    it("Checks for a form and add button", function(){
            cy.get('#addForm').should('be.visible')
            cy.get('#addButton').should('be.visible')  
    })

    it("Adds a new bookmark", function(){
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()  
    })

    it("Checks for header:", function(){
            cy.contains('Bookmarks');
    })

    it("Checks for a delete button", function(){
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()
        cy.get('#addForm').type('https://google.com')
        cy.get('#addButton').click()  
        cy.get('#delete-button-1').click()
        cy.contains('https://google.com').should('not.exist')
    })

    it("Check for an update option", function(){
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()
        cy.get('#addForm').type('https://google.com')
        cy.get('#addButton').click()

        cy.get('#update-button-1').click()
        cy.get('#updateForm').type("https://google.co.uk")
        cy.get('#updateButton').click()

        cy.contains('https://google.co.uk')
    })

    it("Check ability to add comments", function(){
        cy.get('#addForm').type('https://developer.mozilla.org/en-US/')
        cy.get('#addButton').click()
        cy.get('#addForm').type('https://google.com')
        cy.get('#addButton').click()

        cy.get('#comment-button-1').click()
        cy.get("#changeButton").click()
        cy.get('#commentForm').type("A lovely search engine")
        cy.get("#commentButton").click()
        cy.contains("A lovely search engine")
    })
}) 
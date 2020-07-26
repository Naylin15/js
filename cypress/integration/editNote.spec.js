describe('Add category', () => {
    it('removes a note', () => {
        cy.visit('/')

        cy.get('#noteTitle').type('abc')

        cy.get('#addNoteBtn').click()
      
        cy.get('.ellipsis.vertical.icon').click()

        cy.get('#editNote-0').click()

        cy.get('#editInput-0').type('de')
    
        cy.get('#saveButton-0').click()

        cy.get('#0 h2:first').should('have.text', 'abcde')

    })
  })
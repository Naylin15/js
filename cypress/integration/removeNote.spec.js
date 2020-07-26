describe('Remove Note', () => {
    it('removes a note', () => {
      cy.visit('/')

      cy.get('#noteTitle').type('abc')

      cy.get('#addNoteBtn').click()
      
      cy.get('.ellipsis.vertical.icon').click()

      cy.get('#removeNote-0').click()
    
      cy.get('#0').should('not.exist')

    })
  })
describe('Add Note', () => {
    it('gets started', () => {
      cy.visit('/')

      cy.get('#noteTitle')
        .type('abc')

      cy.get('#addNoteBtn')
        .click()
      
      cy.get('#0 h2:first')
        .should('have.text', 'abc')

    })
  })
describe('Add category', () => {
    it('removes a note', () => {
        cy.visit('/')

        cy.get('#noteTitle').type('abc')

        cy.get('#addNoteBtn').click()
      
        cy.get('span').contains('Category').click()

        cy.get('span').contains('Important').click()

        cy.get('span.text span:first').should('have.text', 'Important')

    })
  })
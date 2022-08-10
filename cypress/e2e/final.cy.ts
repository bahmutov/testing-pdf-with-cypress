it('converts downloaded PDF to HTML', () => {
  cy.visit('/')

  cy.contains('simple.pdf').click()

  // wait for the file to be downloaded
  cy.readFile('cypress/downloads/simple.pdf', 'utf8')
  cy.task('toHtml', 'cypress/downloads/simple.pdf').then((html) => {
    cy.document({ log: false }).invoke({ log: false }, 'write', html)
  })
  cy.contains('Hello darkness my old friend')
})

it('tests the complex pdf', () => {
  cy.visit('/')

  cy.contains('complex.pdf').click()

  // wait for the file to be downloaded
  cy.readFile('cypress/downloads/complex.pdf', 'utf8')
  cy.task('toHtml', 'cypress/downloads/complex.pdf').then((html) => {
    cy.document({ log: false }).invoke({ log: false }, 'write', html)
  })
  cy.contains('Total €9 504,00')
})

it('downloads a simple PDF file', () => {
  cy.visit('/')

  cy.contains('simple.pdf').click()

  // wait for the file to be downloaded
  cy.readFile('cypress/downloads/simple.pdf', 'utf8')
  cy.task('readPdf', 'cypress/downloads/simple.pdf')
    // yields the text from the PDF file
    .should('contain', 'Hello darkness my old friend')
})

it('downloads a complex PDF file', () => {
  cy.visit('/')

  cy.contains('complex.pdf').click()

  cy.readFile('cypress/downloads/complex.pdf')
  cy.task('readPdf', 'cypress/downloads/complex.pdf')
})

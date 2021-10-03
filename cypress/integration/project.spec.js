describe('Project page', () => {
  const BASE_URL = 'http://localhost:3000/projects'
  const ERROR_MESSAGE = 'There was something wrong'
  const ERROR_MESSAGE_SELECTOR = '[data-test=error-banner]'
  const PROJECT_CARD_TITLE = 'Seam'
  const PROJECT_CARD_TITLE_SELECTOR = '[data-test=project-card-name]'

  it('returns error banner with message in case project is not found', () => {
    cy.visit(`${BASE_URL}/invalid-project-id`)
    cy.get(ERROR_MESSAGE_SELECTOR)
      .should('have.text', ERROR_MESSAGE)
  })

  it(`returns project card`, () => {
    cy.visit(`${BASE_URL}/1`)
    cy.get(PROJECT_CARD_TITLE_SELECTOR)
      .should('have.text', PROJECT_CARD_TITLE)
  })
})

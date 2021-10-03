describe('Project page', () => {
  const BASE_URL = 'http://localhost:3000/users'
  const ERROR_MESSAGE = 'There was something wrong'
  const ERROR_MESSAGE_SELECTOR = '[data-test=error-banner]'
  const USER_CARD_TITLE = 'Dennis Pearson'
  const USER_CARD_TITLE_SELECTOR = '[data-test=user-card-name]'

  it('returns error banner with message in case user is not found', () => {
    cy.visit(`${BASE_URL}/invalid-user-id`)
    cy.get(ERROR_MESSAGE_SELECTOR)
      .should('have.text', ERROR_MESSAGE)
  })

  it(`returns user card`, () => {
    cy.visit(`${BASE_URL}/1`)
    cy.get(USER_CARD_TITLE_SELECTOR)
      .should('have.text', USER_CARD_TITLE)
  })
})

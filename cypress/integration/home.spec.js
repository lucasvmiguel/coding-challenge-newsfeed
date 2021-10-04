describe('Home page', () => {
  const BASE_URL = 'http://localhost:3000'
  const QUERY_PARAM = '?user_type'
  const ERROR_MESSAGE = 'Failed to load feed, you may have to choose a valid user type above'
  const ERROR_MESSAGE_SELECTOR = '[data-test=error-banner]'
  const ANNOUNCEMENT_CARD_TITLE = 'Get ready for Global Build Weekend Pitches next Sunday'
  const ANNOUNCEMENT_CARD_TITLE_SELECTOR = '[data-test=announcement-card-title]'

  it('returns error banner with message in case no user type is selected', () => {
    cy.visit(BASE_URL)
    cy.get(ERROR_MESSAGE_SELECTOR)
      .should('have.text', ERROR_MESSAGE)
  })

  it('returns error banner with message in case invalid user type is selected', () => {
    cy.visit(`${BASE_URL}${QUERY_PARAM}=invalid`)
    cy.get(ERROR_MESSAGE_SELECTOR)
      .should('have.text', ERROR_MESSAGE)
  })

  it(`returns announcement card at first as founder`, () => {
    cy.visit(`${BASE_URL}${QUERY_PARAM}=founders`)
    cy.get(ANNOUNCEMENT_CARD_TITLE_SELECTOR)
      .should('contains.text', ANNOUNCEMENT_CARD_TITLE)
  })

  it(`returns announcement card at first as writer`, () => {
    cy.visit(`${BASE_URL}${QUERY_PARAM}=writers`)
    cy.get(ANNOUNCEMENT_CARD_TITLE_SELECTOR)
      .should('contains.text', ANNOUNCEMENT_CARD_TITLE)
  })

  it(`returns announcement card at first as angel`, () => {
    cy.visit(`${BASE_URL}${QUERY_PARAM}=angels`)
    cy.get(ANNOUNCEMENT_CARD_TITLE_SELECTOR)
      .should('contains.text', ANNOUNCEMENT_CARD_TITLE)
  })
})

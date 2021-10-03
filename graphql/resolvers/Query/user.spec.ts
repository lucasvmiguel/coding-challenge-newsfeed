import { USER_QUERY } from '../../client/user'
import { server } from '../../server'

it('fetches user', async () => {
  const res = await server.executeOperation({ query: USER_QUERY, variables: { id: 1 } })
  expect(res).toMatchSnapshot()
})

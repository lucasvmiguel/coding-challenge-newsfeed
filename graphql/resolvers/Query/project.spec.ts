import { PROJECT_QUERY } from '../../client/project';
import { server } from '../../server'

it('fetches project', async () => {
  const res = await server.executeOperation({ query: PROJECT_QUERY, variables: { id: 1 } });
  expect(res).toMatchSnapshot();
})

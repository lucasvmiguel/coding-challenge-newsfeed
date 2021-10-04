import renderer from 'react-test-renderer'

import { user } from '../../test/mocks/user'

import UserCard from './UserCard'

it('renders UserCard component correctly - snapshot', () => {
  const tree = renderer
    .create(<UserCard user={user} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

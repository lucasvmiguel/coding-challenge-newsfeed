import renderer from 'react-test-renderer'

import { project } from '../../test/mocks/project'
import { user } from '../../test/mocks/user'
import { announcement } from '../../test/mocks/announcement'

import NewsFeed from './NewsFeed'

it('renders NewsFeed component correctly - snapshot', () => {
  const tree = renderer
    .create(<NewsFeed items={[announcement, user, project]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

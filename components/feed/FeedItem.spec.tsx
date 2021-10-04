import renderer from 'react-test-renderer'

import { announcement } from '../../test/mocks/announcement'
import { user } from '../../test/mocks/user'
import { project } from '../../test/mocks/project'

import FeedItem from './FeedItem'

it('renders FeedItem component with announcement correctly - snapshot', () => {
  const tree = renderer
    .create(<FeedItem item={announcement} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with user correctly - snapshot', () => {
  const tree = renderer
    .create(<FeedItem item={user} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with project correctly - snapshot', () => {
  const tree = renderer
    .create(<FeedItem item={project} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with no card - snapshot', () => {
  const item = {
    __typename: 'invalid',
    id: 1,
    title: 'title testing',
    body: 'body testing',
    created_ts: '01-01-2021'
  }

  const tree = renderer
    .create(<FeedItem item={item} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

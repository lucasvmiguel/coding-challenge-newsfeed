import renderer from 'react-test-renderer'

import { resolveTypes } from '../../graphql/client/types'
import { Fellowship } from '../../graphql/client/__generated__/globalTypes'

import FeedItem from './FeedItem'

it('renders FeedItem component with announcement correctly - snapshot', () => {
  const announcement = {
    __typename: resolveTypes.Announcement,
    id: 1,
    title: "title testing",
    body: "body testing",
    created_ts: "01-01-2021"
  }

  const tree = renderer
    .create(<FeedItem item={announcement} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with user correctly - snapshot', () => {
  const user = {
    __typename: resolveTypes.User,
    id: 1,
    name: "name testing",
    bio: "desc testing",
    avatar_url: "icon.svg",
    fellowship: Fellowship.founders,
    created_ts: "01-01-2021",
    projects: [
      { id: 2, name: "user testing", icon_url: "icon2.svg" }
    ]
  }

  const tree = renderer
    .create(<FeedItem item={user} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with project correctly - snapshot', () => {
  const project = {
    __typename: resolveTypes.Project,
    id: 1,
    name: "name testing",
    description: "desc testing",
    icon_url: "icon.svg",
    created_ts: "01-01-2021",
    users: [
      { id: 2, name: "user testing", avatar_url: "icon2.svg" }
    ]
  }

  const tree = renderer
    .create(<FeedItem item={project} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FeedItem component with no card - snapshot', () => {
  const item = {
    __typename: "invalid",
    id: 1,
    title: "title testing",
    body: "body testing",
    created_ts: "01-01-2021"
  }

  const tree = renderer
    .create(<FeedItem item={item} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
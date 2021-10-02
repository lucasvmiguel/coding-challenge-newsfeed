import renderer from 'react-test-renderer'

import { announcement } from '../../test/mocks/announcement'

import AnnouncementCard from './AnnouncementCard'


it('renders AnnouncementCard component correctly - snapshot', () => {
  const tree = renderer
    .create(<AnnouncementCard announcement={announcement} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
import renderer from 'react-test-renderer'

import Loading from './Loading'

it('renders Loading component correctly - snapshot', () => {
  const tree = renderer
    .create(<Loading />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

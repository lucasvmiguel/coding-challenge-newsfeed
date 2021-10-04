import renderer from 'react-test-renderer'

import Banner from './Banner'

it('renders Banner component correctly - snapshot', () => {
  const tree = renderer
    .create(<Banner bgColor="black" color="white" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

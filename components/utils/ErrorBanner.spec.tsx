import renderer from 'react-test-renderer'

import ErrorBanner from './ErrorBanner'

it('renders ErrorBanner component correctly - snapshot', () => {
  const tree = renderer
    .create(<ErrorBanner message="testing" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

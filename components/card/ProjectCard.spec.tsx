import renderer from 'react-test-renderer'

import { project } from '../../test/mocks/project'

import ProjectCard from './ProjectCard'

it('renders ProjectCard component correctly - snapshot', () => {
  const tree = renderer
    .create(<ProjectCard project={project} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
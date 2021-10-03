import { resolveTypes } from '../../graphql/client/types'

export const project = {
  __typename: resolveTypes.Project,
  id: 1,
  name: 'name testing',
  description: 'desc testing',
  icon_url: 'icon.svg',
  created_ts: '01-01-2021',
  users: [
    { id: 2, name: 'user testing', avatar_url: 'icon2.svg' }
  ]
}

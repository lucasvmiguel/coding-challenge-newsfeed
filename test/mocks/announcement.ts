import { resolveTypes } from '../../graphql/client/types'

export const announcement = {
  __typename: resolveTypes.Announcement,
  id: 2,
  title: 'title testing',
  body: 'body testing',
  created_ts: '01-01-2021'
}

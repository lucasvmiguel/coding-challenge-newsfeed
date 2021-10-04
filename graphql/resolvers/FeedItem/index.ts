import { resolveTypes } from '../../../graphql/client/types'
import { AnnouncementRow, ProjectRow, UserRow } from '../../../graphql/db'

export const __resolveType = (obj: UserRow | AnnouncementRow | ProjectRow, context: any, info: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  // only User has bio
  if (isValueValid((obj as UserRow).bio)) {
    return resolveTypes.User
  }

  // only Announcement has body
  if (isValueValid((obj as AnnouncementRow).body)) {
    return resolveTypes.Announcement
  }

  // only Project has description
  if (isValueValid((obj as ProjectRow).description)) {
    return resolveTypes.Project
  }

  return null
}

const isValueValid = (value: any) => {
  return value !== null && value !== undefined
}

import db, { UserRow, AnnouncementRow, ProjectRow, Fellowship, ExtraFellowship } from '../../db'
import { limitQueryParam, offsetQueryParam } from '../../utils/pagination'

const ANNOUNCEMENTS_QUERY = `
  SELECT a.id, a.title, NULL as name, a.body, NULL as bio, NULL as description, a.created_ts, a.fellowship, NULL as avatar_url, NULL as icon_url FROM announcements a
`

const USERS_QUERY = `
  SELECT u.id, NULL as title, u.name, NULL as body, u.bio, NULL as description, u.created_ts, u.fellowship, u.avatar_url, NULL as icon_url FROM users u
`

const PROJECTS_QUERY = `
  SELECT p.id, NULL as title, p.name, NULL as body, NULL as bio, p.description, p.created_ts, NULL as fellowship, NULL as avatar_url, p. icon_url FROM projects p
`
const ORDER_LIMIT_OFFSET = `
  ORDER BY created_ts DESC
  LIMIT ? OFFSET ?
`

const MERGE_QUERIES = 'UNION ALL'

type Args = {
  user_type: Fellowship
  limit: number
  offset: number
}

type FeedItem = UserRow | AnnouncementRow | ProjectRow

export default async function feed(parent: unknown, { user_type, limit, offset }: Args): Promise<FeedItem[]> {
  const limitQP = limitQueryParam(limit)
  const offsetQP = offsetQueryParam(offset)

  switch (user_type) {
    case Fellowship.Writers:
      return writersQuery(limitQP, offsetQP)
    case Fellowship.Founders:
      return foundersQuery(limitQP, offsetQP)
    case Fellowship.Angels:
      return angelsQuery(limitQP, offsetQP)
    default:
      return []
  }
}

const writersQuery = (limitQP: number, offsetQP: number) => {
  return db.getAll(`
    ${ANNOUNCEMENTS_QUERY}
    WHERE a.fellowship == "${Fellowship.Writers}" OR a.fellowship == "${ExtraFellowship.All}"
    ${MERGE_QUERIES}
    ${USERS_QUERY}
    WHERE u.fellowship == "${Fellowship.Writers}"
    ${ORDER_LIMIT_OFFSET}
  `,
  [limitQP, offsetQP]
  )
}

const foundersQuery = (limitQP: number, offsetQP: number) => {
  return db.getAll(`
    ${ANNOUNCEMENTS_QUERY}
    WHERE a.fellowship == "${Fellowship.Founders}" OR a.fellowship == "${ExtraFellowship.All}"
    ${MERGE_QUERIES}
    ${USERS_QUERY}
    WHERE u.fellowship == "${Fellowship.Founders}" OR u.fellowship == "${Fellowship.Angels}"
    ${MERGE_QUERIES}
    ${PROJECTS_QUERY}
    ${ORDER_LIMIT_OFFSET}
  `,
  [limitQP, offsetQP]
  )
}

const angelsQuery = (limitQP: number, offsetQP: number) => {
  return db.getAll(`
    ${ANNOUNCEMENTS_QUERY}
    WHERE a.fellowship == "${Fellowship.Angels}" OR a.fellowship == "${ExtraFellowship.All}"
    ${MERGE_QUERIES}
    ${USERS_QUERY}
    WHERE u.fellowship == "${Fellowship.Founders}" OR u.fellowship == "${Fellowship.Angels}"
    ${MERGE_QUERIES}
    ${PROJECTS_QUERY}
    ${ORDER_LIMIT_OFFSET}
  `,
  [limitQP, offsetQP]
  )
}

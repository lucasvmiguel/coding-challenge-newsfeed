import { gql } from '@apollo/client'

export const FEED_QUERY = gql`
  query Feed($user_type: Fellowship!, $limit: Int, $offset: Int) {
    feed(user_type: $user_type, limit: $limit, offset: $offset) {
      __typename
      ... on User {
        id
        name
        bio
        avatar_url
        fellowship
        created_ts
        projects {
          id
          name
          icon_url
        }
      }
      ... on Announcement {
        id
        title
        body
        fellowship
        created_ts
      }
      ... on Project {
        id
        name
        description
        icon_url
        created_ts
        users {
          id
          name
          avatar_url
        }
      }
    }
  }
`

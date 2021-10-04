import { ApolloServer, gql } from 'apollo-server-micro'

import * as resolvers from './resolvers'

const typeDefs = gql`
  enum Fellowship {
    founders
    angels
    writers
    all
  }

  type Project {
    id: Int!
    name: String!
    description: String!
    icon_url: String!
    users: [User!]!
    created_ts: String!
  }

  type User {
    id: Int!
    name: String!
    bio: String!
    avatar_url: String!
    fellowship: Fellowship!
    projects: [Project!]!
    created_ts: String!
  }

  type Announcement{
    id: Int!
    fellowship: Fellowship!
    title: String!
    body: String!
    created_ts: String!
    updated_ts: String!
  }

  union FeedItem = User | Announcement | Project

  type Query {
    project(id: Int!): Project!
    user(id: Int!): User!
    feed(user_type: Fellowship!, limit: Int, offset: Int): [FeedItem!]!
  }
`

export const server = new ApolloServer({ typeDefs, resolvers })

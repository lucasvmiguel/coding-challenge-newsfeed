/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Fellowship } from "./globalTypes";

// ====================================================
// GraphQL query operation: Feed
// ====================================================

export interface Feed_feed_User_projects {
  __typename: "Project";
  id: number;
  name: string;
  icon_url: string;
}

export interface Feed_feed_User {
  __typename: "User";
  id: number;
  name: string;
  bio: string;
  avatar_url: string;
  fellowship: Fellowship;
  created_ts: string;
  projects: Feed_feed_User_projects[];
}

export interface Feed_feed_Announcement {
  __typename: "Announcement";
  id: number;
  title: string;
  body: string;
  fellowship: Fellowship;
  created_ts: string;
}

export interface Feed_feed_Project_users {
  __typename: "User";
  id: number;
  name: string;
  avatar_url: string;
}

export interface Feed_feed_Project {
  __typename: "Project";
  id: number;
  name: string;
  description: string;
  icon_url: string;
  created_ts: string;
  users: Feed_feed_Project_users[];
}

export type Feed_feed = Feed_feed_User | Feed_feed_Announcement | Feed_feed_Project;

export interface Feed {
  feed: Feed_feed[];
}

export interface FeedVariables {
  user_type: Fellowship;
  limit?: number | null;
  offset?: number | null;
}

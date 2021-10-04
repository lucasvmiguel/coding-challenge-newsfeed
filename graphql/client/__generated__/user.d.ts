/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Fellowship } from "./globalTypes";

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user_projects {
  __typename: "Project";
  id: number;
  name: string;
  icon_url: string;
}

export interface user_user {
  __typename: "User";
  id: number;
  name: string;
  bio: string;
  fellowship: Fellowship;
  avatar_url: string;
  projects: user_user_projects[];
}

export interface user {
  user: user_user;
}

export interface userVariables {
  id: number;
}

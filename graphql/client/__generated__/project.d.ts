/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project_users {
  __typename: "User";
  id: number;
  name: string;
  avatar_url: string;
}

export interface project_project {
  __typename: "Project";
  id: number;
  name: string;
  description: string;
  icon_url: string;
  users: project_project_users[];
}

export interface project {
  project: project_project;
}

export interface projectVariables {
  id: number;
}

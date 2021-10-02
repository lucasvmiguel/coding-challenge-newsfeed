import { Fellowship } from "../../graphql/client/__generated__/globalTypes";
import { resolveTypes } from "../../graphql/client/types";

export const user = {
  __typename: resolveTypes.User,
  id: 3,
  name: "name testing",
  bio: "desc testing",
  avatar_url: "icon.svg",
  fellowship: Fellowship.founders,
  created_ts: "01-01-2021",
  projects: [
    { id: 2, name: "user testing", icon_url: "icon2.svg" }
  ]
}
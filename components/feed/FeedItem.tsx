
import { resolveTypes } from '../../graphql/client/types'

import AnnouncementCard, { Announcement } from '../card/AnnouncementCard'
import UserCard, { User } from '../card/UserCard'
import ProjectCard, { Project } from '../card/ProjectCard'

export type Item = (Announcement | User | Project) & { __typename: string, created_ts: string }

type Props = {
  item: Item;
}

export default function FeedItem({ item }: Props) {
  switch (item.__typename) {
    case resolveTypes.Project:
      return <ProjectCard project={item as Project} />
    case resolveTypes.User:
      return <UserCard user={item as User} />
    case resolveTypes.Announcement:
      return <AnnouncementCard announcement={item as Announcement} />
    default:
      return null
  }
}
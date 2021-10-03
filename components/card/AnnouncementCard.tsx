import Card, { Icon, Columns, ColumnLeft, ColumnRight } from './Card'
import Markdown from '../Markdown'

const ICON_URL = 'https://avatars.dicebear.com/api/initials/a.svg'

export type Announcement = {
  id: number;
  title: string;
  body: string;
}

type Props = {
  announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: Props) {
  return (
    <Card>
      <Columns>
        <ColumnLeft>
          <Icon src={ICON_URL} />
        </ColumnLeft>
        <ColumnRight>
          <h2 data-test="announcement-card-title">{announcement.title}</h2>
          <Markdown>{announcement.body}</Markdown>
        </ColumnRight>
      </Columns>
    </Card>
  )
}

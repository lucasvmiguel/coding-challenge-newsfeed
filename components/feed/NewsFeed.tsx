import styled from 'styled-components'

import FeedItem, { Item } from './FeedItem'

type Props = {
  items: Item[];
}

export default function NewsFeed({ items }: Props) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <ListItem key={`${item.id}-${item.__typename}`}>
            <FeedItem item={item} />
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

const ListItem = styled.li`
  list-style-type: none;
  padding-bottom: 20px;
`

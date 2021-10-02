import Head from 'next/head'
import { useRouter } from 'next/router'

import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from '@apollo/client'

import { FEED_QUERY } from 'graphql/client/feed'
import { Feed } from '../graphql/client/__generated__/Feed'

import Layout from 'components/Layout'
import NewsFeed from 'components/feed/NewsFeed'

export default function Home() {
  const router = useRouter()
  const { user_type } = router.query
  const { error, data, loading, fetchMore } = useQuery<Feed>(FEED_QUERY, {
    variables: { user_type }
  })

  const items = data?.feed || []

  return (
    <Layout>
      <Head>
        <title>On Deck Newsfeed</title>
      </Head>
      <h1>Hello there! - {items.length}</h1>
      {error && <p>error</p>}
      {loading && <p>Loading...</p>}

      <InfiniteScroll
        dataLength={items.length}
        next={() => fetchMore({ variables: { user_type, offset: items.length } })}
        hasMore={true}
        loader={null}
      >
        {!loading && <NewsFeed items={items} />}
      </InfiniteScroll >
    </Layout>
  )
}

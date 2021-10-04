import Head from 'next/head'
import { useRouter } from 'next/router'

import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from '@apollo/client'

import { FEED_QUERY } from 'graphql/client/feed'
import { Feed, FeedVariables } from 'graphql/client/__generated__/Feed'
import { Fellowship } from 'graphql/client/__generated__/globalTypes'

import Layout from 'components/Layout'
import NewsFeed from 'components/feed/NewsFeed'
import RoleChanger from 'components/utils/UserTypeChanger'
import ErrorBanner from 'components/banner/ErrorBanner'
import Loading from 'components/utils/Loading'

export default function Home() {
  const router = useRouter()
  const user_type = router.query.user_type as Fellowship

  const { error, data, loading, fetchMore } = useQuery<Feed, FeedVariables>(FEED_QUERY, {
    variables: { user_type },
    skip: !user_type
  })

  const items = data?.feed || []
  const showError = error || (!user_type && router.isReady)

  return (
    <Layout>
      <Head>
        <title>On Deck Newsfeed</title>
      </Head>
      <RoleChanger />
      <h1>Hello there!</h1>
      <div>
        {showError && <ErrorBanner message="Failed to load feed, you may have to choose a valid user type above" />}
        {loading && <Loading />}
      </div>

      <div>
        <InfiniteScroll
          dataLength={items.length}
          next={() => fetchMore({ variables: { user_type, offset: items.length } })}
          hasMore={true}
          loader={null}
        >
          {!loading && <NewsFeed items={items} />}
        </InfiniteScroll >
      </div>
    </Layout>
  )
}

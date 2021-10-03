import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { user, userVariables } from 'graphql/client/__generated__/user'

import Layout from 'components/Layout'
import UserCard from 'components/card/UserCard'
import { USER_QUERY } from 'graphql/client/user'

export default function UserPage() {
  const { query } = useRouter()

  const { data, error, loading } = useQuery<user, userVariables>(
    USER_QUERY,
    {
      skip: !query.id,
      variables: { id: Number(query.id) }
    }
  )
  const user = data?.user

  if (!user || loading || error) {
    return null
  }

  return (
    <Layout>
      <UserCard user={user} />
    </Layout>
  )
}

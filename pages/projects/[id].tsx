import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { project, projectVariables } from 'graphql/client/__generated__/project'
import { PROJECT_QUERY } from 'graphql/client/project'

import Layout from 'components/Layout'
import ProjectCard from 'components/card/ProjectCard'
import ErrorBanner from 'components/utils/ErrorBanner'
import Loading from 'components/utils/Loading'

export default function ProjectPage() {
  const { query } = useRouter()

  const { data, error, loading } = useQuery<project, projectVariables>(
    PROJECT_QUERY,
    {
      skip: !query.id,
      variables: { id: Number(query.id) }
    }
  )
  const project = data?.project

  return (
    <Layout>
      {loading && <Loading />}
      {error && <ErrorBanner message="There was something wrong" />}
      {project && <ProjectCard project={project} />}
    </Layout>
  )
}

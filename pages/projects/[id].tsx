import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { project, projectVariables } from 'graphql/client/__generated__/project'
import { PROJECT_QUERY } from 'graphql/client/project'

import Layout from 'components/Layout'
import ProjectCard from 'components/card/ProjectCard'

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

  if (!project || loading || error) {
    return null
  }

  return (
    <Layout>
      <ProjectCard project={project} />
    </Layout>
  )
}

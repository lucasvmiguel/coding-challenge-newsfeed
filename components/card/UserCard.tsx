import Link from 'next/link'
import styled from 'styled-components'

import { Fellowship } from '../../graphql/client/__generated__/globalTypes'

import Card, { Icon, Columns, ColumnLeft, ColumnRight } from './Card'
import Markdown from '../Markdown'

type Project = {
  id: number;
  name: string;
  icon_url: string;
}

export type User = {
  id: number;
  name: string;
  bio: string;
  fellowship: Fellowship;
  avatar_url: string;
  projects: Project[];
}

type Props = {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <Card>
      <Columns>
        <ColumnLeft>
          <Avatar src={user.avatar_url} />
        </ColumnLeft>
        <ColumnRight>
          <h2>{user.name}</h2>
          <p>Fellowship: {user.fellowship}</p>
          <Markdown>{user.bio}</Markdown>
          {!!user.projects.length && (
            <>
              <h3>Projects:</h3>
              {user.projects.map(p => (
                <ProjectItem key={p.id} project={p} />
              ))}
            </>
          )}
        </ColumnRight>
      </Columns>
    </Card>
  )
}

const Avatar = styled.img`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

function ProjectItem({ project }: { project: Project }) {
  return (
    <ProjectContainer>
      <ProjectColumnLeft>
        <Icon src={project.icon_url} />
      </ProjectColumnLeft>
      <ProjectColumnRight>
        <Link href={`/projects/${project.id}`}>
          {project.name}
        </Link>
      </ProjectColumnRight>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const ProjectColumnLeft = styled.div`
  flex-basis: 2rem;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 1rem;
`

const ProjectColumnRight = styled.div`
  flex-basis: 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

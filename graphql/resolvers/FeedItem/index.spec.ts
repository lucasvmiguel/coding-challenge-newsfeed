import { resolveTypes } from '../../../graphql/client/types'
import { announcement } from '../../../test/mocks/announcement'
import { project } from '../../../test/mocks/project'
import { user } from '../../../test/mocks/user'

import { __resolveType } from './index'

it('should return correct resolveType', () => {
  const tests = [
    {
      param: { obj: user, context: null, info: null },
      expected: resolveTypes.User
    },
    {
      param: { obj: project, context: null, info: null },
      expected: resolveTypes.Project
    },
    {
      param: { obj: announcement, context: null, info: null },
      expected: resolveTypes.Announcement
    },
    {
      param: { obj: { ...user, bio: '' }, context: null, info: null },
      expected: resolveTypes.User
    },
    {
      param: { obj: {}, context: null, info: null },
      expected: null
    }
  ]

  tests.forEach(test => {
    // @ts-ignore ignoring type check because it could be returned "anything" from the database to this function
    expect(__resolveType(test.param.obj, test.param.context, test.param.info)).toBe(test.expected)
  })
})

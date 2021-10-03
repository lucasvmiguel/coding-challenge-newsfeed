import { Fellowship } from '../../db';
import { FEED_QUERY } from '../../client/feed';
import { server } from '../../server'

const LIMIT_AND_OFFSET = 5;

[
  Fellowship.Founders,
  Fellowship.Writers,
  Fellowship.Angels,
  "invalid",
].forEach(role => {
  describe(`fetches feed as ${role}`, () => {
    it('fetches feed', async () => {
      const res = await server.executeOperation({
        query: FEED_QUERY,
        variables: { user_type: role, limit: LIMIT_AND_OFFSET }
      });
      expect(res).toMatchSnapshot();
    })

    it('fetches feed with offset', async () => {
      const res = await server.executeOperation({
        query: FEED_QUERY,
        variables: { user_type: role, limit: LIMIT_AND_OFFSET, offset: LIMIT_AND_OFFSET }
      });
      expect(res).toMatchSnapshot();
    })
  })
})
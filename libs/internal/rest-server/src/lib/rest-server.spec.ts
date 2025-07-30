import { RestServer } from './rest-server';
import request from 'supertest'

describe('RestServer', () => {
  it('should receive requests', async () => {
    const server = new RestServer(
      {
        routes:
          [{ method: 'GET', path: '/test', handler: (request, response) => 'tested' }]
      }
    )

    const response = await request(server.httpServer).get('/test')

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual('tested');
  });
});

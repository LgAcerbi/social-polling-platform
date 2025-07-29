import { restServer } from './rest-server';

describe('restServer', () => {
  it('should work', () => {
    expect(restServer()).toEqual('rest-server');
  });
});

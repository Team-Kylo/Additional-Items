/* eslint-disable no-undef */
/*
* Testing the API endpoints from the client side to the server
*   - should import fetch functions
*   - import mock-fetch funtions
*/
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { getAdditionalItems } from './lib';

// eslint-disable-next-line no-undef
describe('fetching data from the server API', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should get the remaining items that the seller has for sale', async () => {
    fetchMock.mock('/3', {
      body: { name: 'date' },
      status: 200,
    });

    const additionalItems = await getAdditionalItems(3);
    expect(additionalItems).toEqual({ name: 'date' });
  });
});

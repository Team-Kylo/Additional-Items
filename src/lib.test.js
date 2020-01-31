/* eslint-disable no-undef */
/*
* Testing the API endpoints from the client side to the server
*   - should import fetch functions
*   - import mock-fetch funtions
*/
// import mfetch from './mfetch';
import { getAdditionalItems } from './lib';

// eslint-disable-next-line no-undef
describe('fetching data from the server API', () => {
  it('should get the remaining items that the seller has for sale', async () => {
    getAdditionalItems(3);
  });
});

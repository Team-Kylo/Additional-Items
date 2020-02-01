/* eslint-disable no-undef */
/*
* Testing the API endpoints from the client side to the server
*   - should import fetch functions
*   - import mock-fetch funtions
*/

import { getAdditionalItems } from './lib';
import mFetch from './mFetch.mock';

describe('fetching data from the server API', () => {
  beforeEach(() => {
    mFetch.resetMock();
  });

  it('should recieve a JSON response and return CommonJS', async () => {
    mFetch.properFetch();
    const additionalItems = await getAdditionalItems(3);
    expect(additionalItems).toEqual(mFetch.testData);
  });

  it('should handle recieving an error for invalid input', async () => {
    mFetch.invalidFetch();
    const fooError = await getAdditionalItems('foo');
    expect(fooError.error).toEqual('Invalid input type');
  });

  it('should handle recieving nothing in the body', async () => {
    mFetch.notFoundFetch();
    const blankFoo = await getAdditionalItems(10000);
    expect(blankFoo.error).toEqual('That ID does not exist in the database');
  });
});

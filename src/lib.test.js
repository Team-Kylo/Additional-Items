/* eslint-disable no-undef */
/*
* Testing the API endpoints from the client side to the server
*   - should import fetch functions
*   - import mock-fetch funtions
*/
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { getAdditionalItems } from './lib';
import { testData } from '../dummyData/testData';

// eslint-disable-next-line no-undef
describe('fetching data from the server API', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should recieve a JSON response and return CommonJS', async () => {
    // console.log(testData);
    const allButThree = testData.filter((item) => item.itemId !== 3);

    fetchMock.mock('/3', {
      body: JSON.stringify(allButThree),
      status: 200,
    });

    const additionalItems = await getAdditionalItems(3);
    expect(additionalItems).toEqual(allButThree);
  });

  // it('should handle recieving an error', async () => {
  //   fetchMock.mock('/foo', {
  //     body: {}
  //   });
  // });
});

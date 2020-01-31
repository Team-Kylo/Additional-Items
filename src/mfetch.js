/* eslint-disable import/no-extraneous-dependencies */
/*
This will create the fetch request mocks that will be used to test my front end.
*  imports from the fetch-mock library
*  needs to be able to reply to a GET request, preferably 2.
*/

import fetchMock from 'fetch-mock';

module.exports.get = () => (
  fetchMock
    .mock('/3', 200)
);

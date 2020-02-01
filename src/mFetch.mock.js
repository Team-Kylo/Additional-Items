/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { testData } from '../dummyData/testData';

const allButOne = testData.filter((item) => item.itemId !== 1);

module.exports.testData = allButOne;

module.exports.invalidFetch = () => {
  fetchMock.mock('/foo', {
    body: JSON.stringify({
      error: 'Invalid input type',
    }),
    status: 404,
  });
};

module.exports.notFoundFetch = () => {
  fetchMock.mock('/10000', {
    body: JSON.stringify({ error: 'That ID does not exist in the database' }),
    status: 200,
  });
};

module.exports.properFetch = () => {
  fetchMock.mock('/1', {
    body: JSON.stringify(allButOne),
    status: 200,
  });
};

module.exports.resetMock = () => {
  fetchMock.reset();
};

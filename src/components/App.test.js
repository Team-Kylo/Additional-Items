/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import mFetch from '../mFetch.mock';

describe('<App />', () => {
  beforeEach(() => {
    mFetch.resetMock();
  });

  it('Renders to the page with the class name container', () => {
    const wrapper = shallow(<App itemId="1" />);
    mFetch.properFetch(mFetch.testData);
    expect(wrapper.exists('.container')).toEqual(true);
  });
});

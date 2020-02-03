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

  // it('Accepts a string, itemId as a prop', () => {
  //   const wrap = shallow(<App itemId="5" />);
  //   // mFetch.properFetch(mFetch.testData);
  //   // wrap.setProps({ itemId: '5' });
  //   console.log(wrap);
  //   expect(wrap.props('itemId')).toEqual('5');
  // });

  it('Will make a call to the API when mounted', () => {
    mFetch.properFetch(mFetch.testData);
    const wrapper = shallow(<App itemId="1" />);
    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.state('allItems')).toEqual(mFetch.testData);
    });
  });

  // it('Has two children Items and Seller', () => {
  //   mFetch.properFetch(mFetch.testData);
  //   const wrapper = mount(<App itemId="1" />);
  //   expect(wrapper.find('.seller')).toEqual(true);
  // });
});

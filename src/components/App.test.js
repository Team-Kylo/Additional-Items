/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import mFetch from '../mFetch.mock';


describe('<App />', () => {
  const allButThree = testData.filter((item) => item.itemId !== 3);

  beforeEach(() => {
    mFetch.resetMock();
  });

  it('Renders to the page with the class name container', () => {
    const wrap = shallow(<App />);
    mFetch.properFetch(allButThree);
    expect(wrap.exists('.container')).toEqual(true);
  });

  it('Accepts a string, itemId as a prop', () => {
    const wrap = shallow(<App />);
    mFetch.properFetch(allButThree);
    wrap.setProps({ itemId: '5' });
    expect(wrap.props('itemId').children).toEqual('5');
  });

  it('Will make a call to the API when mounted', () => {
    const wrap = shallow(<App />);
    mFetch.properFetch(allButThree);
    const instance = wrap.instance();
    jest.spyOn(instance, 'getAdditionalItems');
    expect(instance.getAdditionalItems).toHaveBeenCalledTimes(1);
  });
});

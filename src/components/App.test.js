/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';


describe('<App />', () => {
  it('renders to the page', () => {
    const wrap = shallow(<App />);
    expect(wrap.exists('.container')).toEqual(true);
  });

  it('Accepts a string as the prop', () => {
    const wrap = shallow(<App />);
    wrap.setProps({ itemId: '5' });
  });
});

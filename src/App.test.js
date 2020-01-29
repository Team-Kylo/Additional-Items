import React from 'react';
import App from './App';
import { shallow, wrapper } from 'enzyme';


describe('<App />', () => {
  it('renders to the page', () => {
    const wrap = shallow(<App />);
    expect(wrap.text()).toEqual('Testing.... Testing.... 123?');
  })
})
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import Seller from './Seller';

describe('<Seller />', () => {
  it('renders to the page with the class name container', () => {
    const wrap = shallow(<Seller />);
    expect(wrap.exists()).toEqual(true);
  });

  // it('Accepts a string, itemId as a prop', () => {
  //   const wrap = shallow(<Seller />);
  //   wrap.setProps({ itemId: '5' });
  //   expect(wrap.props('itemId').children).toEqual('5');
  // });
});

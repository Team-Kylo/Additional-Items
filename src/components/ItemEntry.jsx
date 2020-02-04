/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const itemEntry = ({ item }) => {
  const {
    itemName = null,
    itemPrice = null,
    itemPicture = null,
    itemFreeShipping = null,
  } = item;

  const ItemDiv = styled.div`
    cursor: pointer;
    flex-direction: column;
    padding: 9px;
  `;

  const ItemImage = styled.img`
    content: url(${itemPicture});
    height: 174.844px;
    width: 220.188px;
  `;

  const ItemName = styled.h2`
    display: block;
    font-size: 14px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    margin: 0px;
    line-height: 1.6;
    font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  `;

  const ItemPrice = styled.span`
    font-weight: 600;
    font-size: 16px;
    font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    margin-top: 0px;
    line-height: 1.6;
    letter-spacing: normal;
    color: #222;
  `;

  const ShippingAndAvailibility = styled.div`
    display:flex;
    flex-direction: column;
  `;

  const FreeShippingBadge = styled.span`
    font-size: 11px;
    font-weight: bold;
    padding: 3px 6px;
    background: #D4E9D7;
    border-radius: 15px;
    display: inline-block;
    word-break: break-word;
    line-height: 1;
  `;

  const FreeShippingElgible = styled.span`
    font-size: 12px;
    font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: normal;
  `;

  const freeShippingOption = (shipping) => {
    switch (shipping) {
      case 'yes':
        return (
          <ItemPrice>
            ${itemPrice} <FreeShippingBadge>FREE shipping</FreeShippingBadge>
          </ItemPrice>
        );
      case 'elgible':
        return (
          <ShippingAndAvailibility>
            <ItemPrice>${itemPrice}</ItemPrice>
            <FreeShippingElgible>Free shipping eligible</FreeShippingElgible>
          </ShippingAndAvailibility>
        );
      default:
        return (
          <ItemPrice>${itemPrice}</ItemPrice>
        );
    }
  };


  return (
    <ItemDiv>
      <ItemImage />
      <ItemName>{itemName}</ItemName>
      {freeShippingOption(itemFreeShipping)}
    </ItemDiv>
  );
};

itemEntry.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemPicture: PropTypes.string,
    itemFreeShipping: PropTypes.string,
  }),
};

export default itemEntry;

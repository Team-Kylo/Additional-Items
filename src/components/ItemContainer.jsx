/* eslint-disable react/require-default-props */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemEntry from './ItemEntry';

const ItemContainer = styled.div`
border-bottom: 1px solid #E1E3DF;
display:flex;
padding-bottom: 24px;
flex-direction: row;
`;

const ArrowBuffer = styled.div`
height: 30%
`;

const ArrowContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Arrow = styled.button`
background: #FFFFFF;
margin: 0px;
height: 43px;
width: 43px;
border-radius: 50%;
border-width: 0px;
font-size: 38px;
padding: 0px;
box-shadow:
  0 0 5px 5px rgb(0, 0, 0, 0.07),
  0 0 0px 0px rgb(0, 0, 0, 0.07);
:hover {
  box-shadow:
    0 0 5px 5px rgb(0, 0, 0, 0.15),
    0 0 0px 0px rgb(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: #f9f9f9;
}
`;

const itemContainer = ({ allItems, onArrowClickCallback }) => {
  // eslint-disable-next-line consistent-return
  const onArrowClick = (e) => {
    const classNameArray = e.target.className.split(' ');

    for (let i = 0; i < classNameArray.length; i++) {
      if (classNameArray[i] === 'left-arrow') {
        return onArrowClickCallback(-1);
      }
      if (classNameArray[i] === 'right-arrow') {
        return onArrowClickCallback(1);
      }
    }
  };

  return (
    <ItemContainer>
      <ArrowContainer>
        <ArrowBuffer />
        <Arrow className="left-arrow" onClick={onArrowClick}>&#8249;</Arrow>
      </ArrowContainer>
      {allItems.map((item) => (
        <ItemEntry key={item.itemId} item={item} />
      ))}
      <ArrowContainer>
        <ArrowBuffer />
        <Arrow className="right-arrow" onClick={onArrowClick}>&#8250;</Arrow>
      </ArrowContainer>
    </ItemContainer>
  );
};

itemContainer.propTypes = {
  allItems: PropTypes.arrayOf(PropTypes.object),
  onArrowClickCallback: PropTypes.func,
};

export default itemContainer;

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Seller = ({
  sellerName,
  // sellerStarRating={allItems[0].sellerStarRating}
  // sellerReviewCount={allItems[0].sellerName}
  // sellerTotalItems ={allItems[0].sellerTotalItems}
  sellerCountry,
  sellerTotalSales,
  sellerJoinDate,
  sellerPicture,
}) => {
  const sellerStarRating = 4;

  const SellerCont = styled.div`
    padding: 30px 0px 24px 0px;
    border-top: 1px solid #E1E3DF;
    display:flex;
    flex-dirction: row;
  `;

  const SellerPicture = styled.img`
    height: 75px;
    width: 75px;
  `;

  const SellerContainer = styled.div`
    padding: 12px 0px 0px 12px;
    line-height: 1.4;
    display:flex;
    flex-direction: column;
  `;

  const SellerInfoTop = styled.div`
    padding: 6px 4px 0px 2px;
    display:flex;
    flex-direction: row;
  `;

  const SellerInfoBottom = styled.div`
    display:flex;
    flex-direction: row;
  `;

  const SellerName = styled.div`
    font: 18px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    padding: 4px 6px 0px 0px;
    cursor: pointer;
    color: #222;
    font-weight: bold;
    :hover {
      color: #757575;
      text-decoration: underline;
    }
  `;

  const SellerStarRating = styled.div`
    font-size: 22px;
    cursor: pointer;
    color: #222222;
  `;

  const SellerReviewCount = styled.div`
    font-size: 14px;
    margin: 5px 0px 0px 6px;
    color: #757575;
    cursor: pointer;
    text-decoration: underline;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  `;

  const SellerCountry = styled.div`
    font-size: 14px;
    padding-right: 24px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  const SellerTotalSales = styled.div`
    font-size: 14px;
    padding-right: 24px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  const SellerJoinDate = styled.div`
    font-size: 14px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  const ViewAllItems = styled.button`
    background-color: #FFF;
    border-color: rgba(0, 0, 0, 0.15);;
    color: #222;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    border-width: 1px;
    height: 38px;
    line-height: 1.4;
    margin: 18px 26px 18px 18px;
    padding: 8px 12px;
    position: absolute;
    right: 0;
    cursor: pointer;
    :hover{
      background-color: #f9f9f7
    }
  `;

  const stars = (rating) => {
    switch (rating) {
      case 0:
        return <SellerStarRating className="sellerStarRating">&#9734;&#9734;&#9734;&#9734;&#9734;</SellerStarRating>;
      case 1:
        return <SellerStarRating className="sellerStarRating">&#9733;&#9734;&#9734;&#9734;&#9734;</SellerStarRating>;
      case 2:
        return <SellerStarRating className="sellerStarRating">&#9733;&#9733;&#9734;&#9734;&#9734;</SellerStarRating>;
      case 3:
        return <SellerStarRating className="sellerStarRating">&#9733;&#9733;&#9733;&#9734;&#9734;</SellerStarRating>;
      case 4:
        return <SellerStarRating className="sellerStarRating">&#9733;&#9733;&#9733;&#9733;&#9734;</SellerStarRating>;
      case 5:
        return <SellerStarRating className="sellerStarRating">&#9733;&#9733;&#9733;&#9733;&#9733;</SellerStarRating>;
      default:
        return 'No rating yet';
    }
  };

  return (
    <SellerCont>
      <SellerPicture src={sellerPicture} alt="" />
      <SellerContainer>
        <SellerInfoTop>
          <SellerName>{sellerName}</SellerName>
          {stars(sellerStarRating)}
          <SellerReviewCount>(74)</SellerReviewCount>
        </SellerInfoTop>
        <SellerInfoBottom>
          <SellerCountry>{sellerCountry}</SellerCountry>
          <SellerTotalSales>
            {sellerTotalSales} Sales
          </SellerTotalSales>
          <SellerJoinDate>
            On Etsy since {sellerJoinDate.slice(0, 4)}
          </SellerJoinDate>
        </SellerInfoBottom>
      </SellerContainer>
      <ViewAllItems>
        View all 171 items
      </ViewAllItems>
    </SellerCont>
  );
};

Seller.defaultProps = {
  sellerName: '',
  // sellerStarRating: 0,
  // sellerReviewCount: 0,
  // sellerTotalItems: 0,
  sellerCountry: '',
  sellerTotalSales: 0,
  sellerPicture: '',
  sellerJoinDate: '',
};

Seller.propTypes = {
  sellerName: PropTypes.string,
  // sellerStarRating: PropTypes.number,
  // sellerReviewCount: PropTypes.number,
  // sellerTotalItems: PropTypes.number,
  sellerCountry: PropTypes.string,
  sellerTotalSales: PropTypes.number,
  sellerPicture: PropTypes.string,
  sellerJoinDate: PropTypes.string,
};

export default Seller;

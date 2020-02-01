import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Seller = ({
  sellerName,
  // sellerStarRating={allItems[0].sellerStarRating}
  // sellerReviewCount={allItems[0].sellerName}
  sellerCountry,
  sellerTotalSales,
  sellerJoinDate,
  sellerPicture,
}) => {

  const sellerStarRating= 4;

  const SellerCont = styled.div`
    display:flex;
    flex-dirction: row;
  `;

  const SellerPicture = styled.img`
    height: 75px;
    width: 75px;
  `;

  const SellerContainer = styled.div`
    display:flex;
    flex-direction: column;
  `;

  const SellerInfoTop = styled.div`
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
    cursor: pointer;
    color: #222;
    font-weight: bold;
    :hover {
      color: #757575;
      text-decoration: underline;
    }
  `;

  const SellerStarRating = styled.div`
    width: 50px;
    height: 50px;
    display: grid;
    grid-column-start: col-two;
    grid-row-start: row-two;
    cursor: pointer;
    color: #222222;
  `;

  const SellerReviewCount = styled.div`
    font: 14px;
    color: #757575;
    cursor: pointer;
    text-decoration: underline;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  `;

  const SellerCountry = styled.div`
    font: 14px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  const SellerTotalSales = styled.div`
    font: 14px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  const SellerJoinDate = styled.div`
    font: 14px;
    font-family:"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    color: #595959;
  `;

  //   const Star = styled.div`
  //   width: 50px;
  //   height: 50px;
  //   display: grid;
  //   grid-column-start: col-two;
  //   grid-row-start: row-two;
  // `;

  const stars = (rating) => {
    // render stars based on rating received
    switch (rating) {
      case 0:
        return '☆☆☆☆☆';
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return '';
    }
  };

  // something about styled components
  // need to use flexbox

  // button for viewing all additional items

  return (
    <SellerCont>
      <SellerPicture src={sellerPicture} alt="" />
      <SellerContainer className="sellerContainer">
        <SellerInfoTop className="sellerInfoTop">
          <SellerName className="sellerName">{sellerName}</SellerName>
          <SellerStarRating className="sellerStarRating">{stars(sellerStarRating)}</SellerStarRating>
          <SellerReviewCount className="sellerReviewCount">(120)</SellerReviewCount>
        </SellerInfoTop>
        <SellerInfoBottom className="sellerInfoBottom">
          <SellerCountry className="sellerCountry">{sellerCountry}</SellerCountry>
          <SellerTotalSales className="sellerTotalSales">{sellerTotalSales}</SellerTotalSales>
          <SellerJoinDate className="sellerJoinDate">{sellerJoinDate}</SellerJoinDate>
        </SellerInfoBottom>
        {/* button to see all items */}
      </SellerContainer>
    </SellerCont>
  );
};

Seller.defaultProps = {
  sellerName: '',
  // sellerStarRating: 0,
  // sellerReviewCount: 0,
  sellerCountry: '',
  sellerTotalSales: 0,
  sellerPicture: '',
  sellerJoinDate: '',
};

Seller.propTypes = {
  sellerName: PropTypes.string,
  // sellerStarRating: PropTypes.number,
  // sellerReviewCount: PropTypes.number,
  sellerCountry: PropTypes.string,
  sellerTotalSales: PropTypes.number,
  sellerPicture: PropTypes.string,
  sellerJoinDate: PropTypes.string,
};

export default Seller;

import React from 'react';
import PropTypes from 'prop-types';

const Seller = ({
  sellerName,
  sellerStarRating,
  sellerReviewCount,
  sellerLocation,
  sellerNumberOfSales,
  sellerJoinDate,
}) => (
  <div className="sellerContainer">
    {sellerName}
    {sellerStarRating}
    {sellerReviewCount}
    {sellerLocation}
    {sellerNumberOfSales}
    {sellerJoinDate}
  </div>
);

Seller.defaultProps = {
  sellerName: '',
  sellerStarRating: 0,
  sellerReviewCount: 0,
  sellerLocation: '',
  sellerNumberOfSales: 0,
  sellerJoinDate: new Date(),
};

Seller.propTypes = {
  sellerName: PropTypes.string,
  sellerStarRating: PropTypes.number,
  sellerReviewCount: PropTypes.number,
  sellerLocation: PropTypes.string,
  sellerNumberOfSales: PropTypes.number,
  sellerJoinDate: PropTypes.instanceOf(Date),
};

export default Seller;

import React from 'react';
import PropTypes from 'prop-types';
import { getAdditionalItems } from '../lib';
import Seller from './Seller';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [{
        sellerName: '',
        // sellerStarRating: 0,
        // sellerReviewCount: 0,
        sellerCountry: '',
        sellerTotalSales: 0,
        sellerPicture: '',
        sellerJoinDate: '',
      }],
    };
  }

  componentDidMount() {
    const { itemId } = this.props;
    getAdditionalItems(itemId)
      .then((allAdditionalItems) => {
        this.setState({
          allItems: allAdditionalItems,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { allItems } = this.state;
    return (
      <div className="container">
        <h1>Aditional Items</h1>
        <Seller
          sellerName={allItems[0].sellerName}
          // sellerStarRating={allItems[0].sellerStarRating}
          // sellerReviewCount={allItems[0].sellerName}
          sellerCountry={allItems[0].sellerCountry}
          sellerTotalSales={allItems[0].sellerTotalSales}
          sellerJoinDate={allItems[0].sellerJoinDate}
          sellerPicture={allItems[0].sellerPicture}
        />
        {/* Additional Items */}
      </div>
    );
  }
}


App.defaultProps = {
  itemId: '1',
};

App.propTypes = {
  itemId: PropTypes.string,
};

export default App;

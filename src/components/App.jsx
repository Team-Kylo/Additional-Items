import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAdditionalItems } from '../lib';
import Seller from './Seller';
import ItemContainer from './ItemContainer';

const Container = styled.div`
  padding: 0px 18px 0px 18px;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerInfo: {},
      allItems: [],
      itemsToDisplayIndex: 0,
    };
    this.onArrowClickCallback = this.onArrowClickCallback.bind(this);
  }

  componentDidMount() {
    const { itemId } = this.props;
    getAdditionalItems(itemId)
      .then((allAdditionalItems) => {
        this.setState({
          sellerInfo: allAdditionalItems[0],
          allItems: allAdditionalItems,
        });
      })
      .catch((error) => console.error(error));
  }

  // will need a callback that takes +1 or -1 so that the images can scroll
  onArrowClickCallback(value) {
    const { itemsToDisplayIndex } = this.state;
    this.setState({
      itemsToDisplayIndex: itemsToDisplayIndex + value,
    });
  }

  render() {
    const { allItems, sellerInfo, itemsToDisplayIndex } = this.state;
    return (
      <Container className="container">
        <Seller aboutSeller={sellerInfo} />
        <ItemContainer
          onArrowClickCallback={this.onArrowClickCallback}
          // splice(starting index, how many to delete)
          allItems={[...allItems].splice(itemsToDisplayIndex, 5)}
        />
      </Container>
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

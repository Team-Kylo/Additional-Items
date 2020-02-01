import React from 'react';
import PropTypes from 'prop-types';
import { getAdditionalItems } from '../lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
    };
  }

  componentDidMount() {
    const { itemId } = this.props;
    getAdditionalItems(itemId)
      .then((allAdditionalItems) => {
        console.log(allAdditionalItems);
      });
  }

  render() {
    const { allItems } = this.state;
    return (
      <div className="container">
        {allItems}
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

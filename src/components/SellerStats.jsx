import React from 'react';
import PropTypes from 'prop-types';

const App = ({ itemId }) => (
  <div className="container">
    {itemId}
  </div>
);


App.defaultProps = {
  itemId: '1',
};

App.propTypes = {
  itemId: PropTypes.string,
};

export default App;

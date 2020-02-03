// the 'starting point' of this module
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const itemId = document.location.search.slice(1);

ReactDOM.render(<App itemId={itemId} />, document.getElementById('additionalItems'));

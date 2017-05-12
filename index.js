import React from 'react';
import ReactDOM from 'react-dom';

import LibComponent from 'external-lib';

ReactDOM.render(
  React.createElement(LibComponent, {foo: 'bar'}),
  document.getElementById('root')
);
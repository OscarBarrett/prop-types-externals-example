import React from 'react';
import PropTypes from 'prop-types';

var LibComponent = function LibComponent(props) {
  return React.createElement('div', null, props.foo);
};

LibComponent.propTypes = {
  foo: PropTypes.string.isRequired
};

export default LibComponent;
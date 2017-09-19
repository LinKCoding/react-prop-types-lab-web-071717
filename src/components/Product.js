import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.producer}</div>
        <div>{this.props.hasWatermark}</div>
        <div>{this.props.color}</div>
      </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false
}

function weightChecker(props, propName){
  if (!props[propName]) {
    return new Error(
      `It's required!`
    )
  } else if (typeof props[propName] !== 'number'){
    return new Error(
      `NaN`
    )
  } else if (props[propName] < 80 || props[propName] > 300) {
    return new Error(
      `Invalid range`
    )
  }
    return null
  }


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color:  PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightChecker
}

export default Product;

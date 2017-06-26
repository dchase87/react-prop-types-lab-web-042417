import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <h3>{this.props.hasWatermark ? "Watermarked" : "Non-Watermarked"}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight} lbs.</h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function createArray() {
  var arr = [...Array(301).keys()]
  arr.shift()
  arr.splice(0, 80)
  return arr
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(createArray()).isRequired
}

import React from 'react'
import PropTypes from 'prop-types';

const Counter = ({counter}) => (

  <span id="score" className="moves">Moves: {counter}</span>

)

Counter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Counter;

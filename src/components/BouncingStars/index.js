import React from 'react';
import { trackProgress } from '../../util/helpers'
import PropTypes from 'prop-types';


const BouncingStars = ({counter}) => (
  <ul className="stars">
    {trackProgress(counter)}
  </ul>
)

BouncingStars.propTypes = {
  counter : PropTypes.number.isRequired
}

export default BouncingStars;

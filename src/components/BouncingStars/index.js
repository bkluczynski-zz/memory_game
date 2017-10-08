import React from 'react';
import { trackProgress } from '../../util/helpers'


const BouncingStars = ({counter}) => (
  <ul className="stars">
    {trackProgress(counter)}
  </ul>
)

export default BouncingStars;

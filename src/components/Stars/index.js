import React from 'react';
import Counter from '../Counter/index'
import BouncingStars from '../BouncingStars/index'
import ResetButton from '../ResetButton/index'
import { trackProgress } from '../../util/helpers'
import PropTypes from 'prop-types';

const formattedSeconds = (sec) => {
  return Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
}

const Stars = ({counter, deck, reset, start, time}) => (

  <div className="score-float">
    <section className="score-panel">
        <BouncingStars counter={counter}/>
        <Counter counter={counter}/>
        <div>Time: {formattedSeconds(time)}</div>
        <ResetButton reset={reset}/>
    </section>
  </div>


)
Stars.propTypes = {
  deck: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
}

export default Stars;

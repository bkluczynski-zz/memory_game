import React from 'react';
import Counter from '../Counter/index'
import BouncingStars from '../BouncingStars/index'
import ResetButton from '../ResetButton/index'
import { trackProgress } from '../../util/helpers'
import PropTypes from 'prop-types';



const Stars = ({counter, deck, reset}) => (

    <section className="score-panel">
        <BouncingStars counter={counter}/>
        <Counter counter={counter}/>
        <ResetButton reset={reset}/>
    </section>

)
Stars.propTypes = {
  deck: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
}

export default Stars;

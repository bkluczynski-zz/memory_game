import React from 'react';
import Counter from '../Counter/index'
import GameOver from '../GameOver/index'
import { trackProgress } from '../../util/helpers'
import PropTypes from 'prop-types';



const Stars = ({counter, deck}) => (

    <section className="score-panel">
        <ul className="stars">
          {trackProgress(counter)}
        </ul>
        <GameOver deck={deck} counter={counter}/>
        <Counter counter={counter}/>
        <div className="restart">
            <i className="fa fa-repeat"></i>
        </div>
    </section>

)

Stars.propTypes = {
  deck: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
}

export default Stars;

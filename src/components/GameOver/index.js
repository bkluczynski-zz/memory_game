import React from 'react'
import Modal from 'react-modal'
import Counter from '../Counter/index'
import PropTypes from 'prop-types';



const winner = (deck) => {
  let counter = 0;
  deck.map(card => {
    if (card.match){
      counter++
    }
  })
  console.log("counter", counter)
  return counter === 16
}

const GameOver = ({deck, counter}) => (

    <Modal
    className='content'
    overlayClassName='overlay'
    isOpen={winner(deck)}
    contentLabel='Modal'
    >
      <h1>Well done! You've won making ONLY {counter} steps!</h1>
    </Modal>
)

Counter.propTypes = {
  deck: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
}

export default GameOver;

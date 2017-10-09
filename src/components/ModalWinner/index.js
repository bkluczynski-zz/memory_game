import React from 'react'
import Modal from 'react-modal'
import { formattedSeconds } from '../../util/helpers'
import BouncingStars from '../BouncingStars/index'
import PropTypes from 'prop-types';


const ModalWinner = ({deck, modal, closeModal, counter, stopWatch, time}) => {

  const winner = (deck) => {
    let counter = 0;
     deck.map(card => {
      if (card.match){
         counter++
      }
    })
    counter === 16 ? stopWatch() : null
    return counter === 16
  }

  return (
    <div>
      {winner(deck) &&
      <Modal
      isOpen={modal}
      className='content'
      overlayClassName='overlay'
      contentLabel='Modal'
      onRequestClose={closeModal}
      >
        <h1>Well done! You've won making {counter} steps and it took you {formattedSeconds(time)} to finish the game!</h1>
          <BouncingStars counter={counter} />
          <h2>Would you like to play another game? </h2>
            <button onClick={closeModal}>PLAY</button>
      </Modal>
      }
    </div>

  )
}

ModalWinner.propTypes = {
  deck: PropTypes.array.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  stopWatch : PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
}

export default ModalWinner

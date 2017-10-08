import React from 'react'
import Modal from 'react-modal'
import { trackProgress } from '../../util/helpers'
import BouncingStars from '../BouncingStars/index'
import Timer from '../Timer/index'

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
        <h1>Well done! You've won making {counter} steps and it took you {time} s to finish the same!</h1>
          <p>Rating :<BouncingStars counter={counter} /></p>
          <h2>Would you like to play another game? </h2>
            <button onClick={closeModal}>PLAY</button>
      </Modal>
      }
    </div>

  )
}

export default ModalWinner

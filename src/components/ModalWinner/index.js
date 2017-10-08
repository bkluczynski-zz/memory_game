import React from 'react'
import Modal from 'react-modal'
import { trackProgress } from '../../util/helpers'
import BouncingStars from '../BouncingStars/index'

const ModalWinner = ({deck, modal, closeModal, counter}) => {

  const winner = (deck) => {
    let counter = 0;
    deck.map(card => {
      if (card.match){
        counter++
      }
    })
    console.log(counter)
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
        <h1>Well done! You've won making ONLY {counter} steps!</h1>
          <BouncingStars counter={counter} />
          <h2>Whould you like to play another game? </h2>
            <button onClick={closeModal}>PLAY</button>
      </Modal>
      }
    </div>

  )
}

export default ModalWinner

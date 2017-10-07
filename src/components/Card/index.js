import React from 'react';
import PropTypes from 'prop-types';

const Card = ({cards, open, handleClass}) => (

    <ul className="deck">
        {cards.map(card => (
            <li key={card.id} onClick={() => { open(card.id)}} className={ handleClass(card.active, card.match)}>
              <i className={card.name.substring(0,2) + ' ' + card.name}></i>
            </li>
        ))
      }
    </ul>
)

Card.propTypes = {
  cards: PropTypes.array.isRequired,
  open: PropTypes.func.isRequired,
  handleClass: PropTypes.func.isRequired,
}

export default Card;

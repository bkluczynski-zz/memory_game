import React from 'react'

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

  winner(deck) ? <div><p>Well done! You've won making ONLY {counter} steps</p></div> : ""

)

export default GameOver;

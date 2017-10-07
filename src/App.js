import React, { Component } from 'react';
import Card from './components/Card/index'
import Stars from './components/Stars/index'
import { shuffle } from './util/helpers'
import './App.css'
import { handleClass } from './util/helpers'

class App extends Component {

  state = {
    deck : [
        {
            id: 1,
            name: 'fa-diamond',
            active: false,
            match: null
        }, {
            id: 2,
            name: 'fa-diamond',
            active: false,
            match: null

        }, {
            id: 3,
            name: 'fa-paper-plane-o',
            active: false,
            match: null

        }, {
            id: 4,
            name: 'fa-paper-plane-o',
            active: false,
            match: null

        }, {
            id: 5,
            name: 'fa-anchor',
            active: false,
            match: null

        }, {
            id: 6,
            name: 'fa-anchor',
            active: false,
            match: null

        }, {
            id: 7,
            name: 'fa-bolt',
            active: false,
            match: null

        }, {
            id: 8,
            name: 'fa-bolt',
            active: false,
            match: null

        }, {
            id: 9,
            name: 'fa-cube',
            active: false,
            match: null

        }, {
            id: 10,
            name: 'fa-cube',
            active: false,
            match: null

        }, {
            id: 11,
            name: 'fa-bicycle',
            active: false,
            match: null

        }, {
            id: 12,
            name: 'fa-bicycle',
            active: false,
            match: null

        }, {
            id: 13,
            name: 'fa-leaf',
            active: false,
            match: null

        }, {
            id: 14,
            name: 'fa-leaf',
            active: false,
            match: null

        }, {
            id: 15,
            name: 'fa-bomb',
            active: false,
            match: null

        }, {
            id: 16,
            name: 'fa-bomb',
            active: false,
            match: null
        }
      ],
      counter : 0
  }

  componentDidMount(){
    this.setState(state => ({
      deck : this.shuffleDeck(this.state.deck)
    }))
  }


  toggleClass = (id) => {
    this.setState(state => ({
      deck : this.state.deck.map(item => {
        if (item.id === id){
          item.active = true;
          return item
        } else {
          return item
        }
      })
    }), this.twoOpened)
  }

  shuffleDeck = (deck) => {
    return shuffle(deck);
  }


  twoOpened = () => {
    let activeCards = [];
      this.state.deck.map(card => {
        if (card.active && !card.match) {
          activeCards.push(card)
        }
    })
    return this.twoSameCards(activeCards);
  }

  twoSameCards = (twoCards) => {
    if (twoCards.length >= 2 && twoCards.length % 2 === 0){
      let [cardOne, cardTwo] = twoCards;
      this.isNotSimilar(cardOne, cardTwo) ? this.removeClass(cardOne, cardTwo) : this.addClass(cardOne, cardTwo)
    }
  }

  removeClass = (x, y) => {
    setTimeout(() => {
      this.setState(state => ({
        deck : state.deck.map(card => {
          if (card.id === x.id || card.id === y.id){
            card.active = false
            card.match = false
          }
          return card
        })
      }), this.count)
    }, 500)
  }

  addClass = (x, y) => {
    setTimeout(() => {
      this.setState(state => ({
        deck : state.deck.map(card => {
          if (card.id === x.id || card.id === y.id){
            card.active = true
            card.match = true
          }
          return card
        })
      }), this.count)}, 500)
  }

  isNotSimilar = (x,y) => {
    return x.name !== y.name
  }

  count = () => {
    this.setState(state => ({
      counter: state.counter += 1
    }))
  }

  render(){
    return (

      <div className="container">
          <header>
              <h1>Matching Game</h1>
          </header>
          <Stars counter={this.state.counter} deck={this.state.deck} />
          <Card cards={this.state.deck} open={this.toggleClass} handleClass={handleClass}/>
      </div>
    )
  }
}



export default App;

import React, {Component} from 'react';
import Card from './components/Card/index'
import Stars from './components/Stars/index'
import ModalWinner from './components/ModalWinner/index'
import {shuffle} from './util/helpers'
import './App.css'
import {handleClass} from './util/helpers'
import {initialState} from './util/helpers'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.incrementer = null;

    }

    reset = () => {
        this.setState(initialState)
        this.hackToCleanState()
        this.shuffleDeck(this.state.deck)
        this.handleResetClick()
        this.handleStartClick()
    }

    componentDidMount() {
        this.setState(state => ({
            deck: this.shuffleDeck(this.state.deck)
        }))
        this.handleStartClick()
    }

    toggleClass = (id) => {
        this.setState(state => ({
            deck: this.state.deck.map(item => {
                if (item.id === id) {
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

    hackToCleanState = () => {
        this.setState(state => {
            deck : state.deck.map(card => {
                card.active = false
                card.match = null
            })
        })
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
        if (twoCards.length >= 2 && twoCards.length % 2 === 0) {
            let [cardOne,
                cardTwo] = twoCards;
            this.isNotSimilar(cardOne, cardTwo)
                ? this.removeClass(cardOne, cardTwo)
                : this.addClass(cardOne, cardTwo)
        }
    }

    removeClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => {
                    if (card.id === x.id || card.id === y.id) {
                        card.active = false
                        card.match = false
                    }
                    return card
                })
            }), this.count)
        }, 500)
    }

    openModal = () => this.setState(() => ({modal: true}))
    closeModal = () => {
        this.setState({modal: false})
        this.reset()
    }

    addClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => {
                    if (card.id === x.id || card.id === y.id) {
                        card.active = true
                        card.match = true
                    }
                    return card
                })
            }), this.count)
        }, 500)
    }

    isNotSimilar = (x, y) => {
        return x.name !== y.name
    }

    count = () => {
        this.setState(state => ({
            counter: state.counter += 1
        }))
    }

    handleStartClick = () => {
      this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        })
      , 1000);
    }

    handleStopClick = () => {
      clearInterval(this.incrementer);
    }

    handleResetClick = () => {
      clearInterval(this.incrementer);
      this.setState({
        secondsElapsed: 0,
      })
    }

    render() {
        const {counter, deck, modal, secondsElapsed} = this.state;
        return (
            <div className="container">
                <header>
                    <h1>Matching Game</h1>
                </header>
                <Stars counter={counter} deck={deck} reset={this.reset} start={this.handleStartClick} time={secondsElapsed}/>
                <ModalWinner modal={modal} deck={deck} closeModal={this.closeModal} counter={counter} stopWatch={this.handleStopClick} time={this.state.secondsElapsed}/>
                <Card cards={deck} open={this.toggleClass} handleClass={handleClass}/>
            </div>
        )
    }
}

export default App;

import React, {Component} from 'react';
import Card from './components/Card/index'
import Stars from './components/Stars/index'
import ModalWinner from './components/ModalWinner/index'
import {shuffle} from './util/helpers'
import './App.css'
import {
    handleClass,
    initialState,
    isNotSimilar,
    setVisibility,
    takeOnlyTwoCards,
    setCardOpen,
    putCardsAside
} from './util/helpers'

class App extends Component {
  //initializing the app state
    constructor(props) {
        super(props)
        this.state = initialState;
        this.incrementer = null;
    }
    //reseting the entire state: timer, cards location, active and match statuses
    reset = () => {
        this.setState(initialState)
        this.hackToCleanState()
        this.shuffleDeck(this.state.deck)
        this.handleResetClick()
        this.handleStartClick()
    }

    //immediately after mounting the component, state is being set to a shuffled deck
    //starting the timer
    componentDidMount() {
        this.setState(state => ({
            deck: this.shuffleDeck(this.state.deck)
        }))
        this.handleStartClick()
    }

    //changing the card's class by toggling it's active status
    //if id of the card matches id available in a deck, set card's status to active
    toggleClass = (id) => {
        this.setState(state => ({
            deck: this.state.deck.map(card => setCardOpen(card, id))
        }), this.twoOpened)
    }

    //shuffling the deck
    shuffleDeck = (deck) => {
        return shuffle(deck);
    }

    //cleaning the state - assigning active and match status to false and null values
    hackToCleanState = () => {
        this.setState(state => ({
            deck : this.state.deck.map(card => {
                card.active = false
                card.match = null
                return card
            })
        }))
    }
    //in case two cards have been marked as active, take those two active cards
    //and if both cards match, set their match status and active status to true,
    //otherwise, set them back to false.
    twoOpened = () => {
        let activeCards = [];
        this.state.deck.map(card => putCardsAside(activeCards, card))
        return this.handlePairOfCards(activeCards);
    }

    //handling two active cards
    handlePairOfCards = (twoCards) => {
        if (takeOnlyTwoCards(twoCards)) {
            let [cardOne,
                cardTwo] = twoCards;
            isNotSimilar(cardOne, cardTwo)
                ? this.removeClass(cardOne, cardTwo)
                : this.addClass(cardOne, cardTwo)
        }
    }

    //setting the active and match status to false
    removeClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => setVisibility(card, x, y, false))
            }), this.count)
        }, 500)
    }

    //setting the active and match status to true
    addClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => setVisibility(card, x, y, true))
            }), this.count)
        }, 500)
    }

    //closing the modal
    closeModal = () => {
        this.setState({modal: false})
        this.reset()
    }

    //counting the moves
    count = () => {
        this.setState(state => ({
            counter: state.counter += 1
        }))
    }

    //starting the watchstop
    handleStartClick = () => {
        this.incrementer = setInterval(() => this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        }), 1000);
    }
    //stoping the watchstop
    handleStopClick = () => {
        clearInterval(this.incrementer);
    }
    //reseting the watchstop
    handleResetClick = () => {
        clearInterval(this.incrementer);
        this.setState({secondsElapsed: 0})
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

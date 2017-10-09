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
            deck: this.state.deck.map(card => setCardOpen(card, id))
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
        this.state.deck.map(card => putCardsAside(activeCards, card))
        return this.handlePairOfCards(activeCards);
    }

    handlePairOfCards = (twoCards) => {
        if (takeOnlyTwoCards(twoCards)) {
            let [cardOne,
                cardTwo] = twoCards;
            isNotSimilar(cardOne, cardTwo)
                ? this.removeClass(cardOne, cardTwo)
                : this.addClass(cardOne, cardTwo)
        }
    }

    removeClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => setVisibility(card, x, y, false))
            }), this.count)
        }, 500)
    }

    addClass = (x, y) => {
        setTimeout(() => {
            this.setState(state => ({
                deck: state.deck.map(card => setVisibility(card, x, y, true))
            }), this.count)
        }, 500)
    }

    closeModal = () => {
        this.setState({modal: false})
        this.reset()
    }

    count = () => {
        this.setState(state => ({
            counter: state.counter += 1
        }))
    }

    handleStartClick = () => {
        this.incrementer = setInterval(() => this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        }), 1000);
    }

    handleStopClick = () => {
        clearInterval(this.incrementer);
    }

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

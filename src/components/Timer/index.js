import React, { Component } from 'react'


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsElapsed: 0
    }
    this.incrementer = null;
  }

  handleStartClick = () => {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  handleStopClick = () => {
    clearInterval(this.increment);
  }

  handleResetClick = () => {
    clearInterval(this.increment);
    this.setState({
      secondsElapsed: 0,
    })
  }

  render(){
    return (
      <div>{formattedSeconds(this.state.secondsElapsed)}</div>
    )
  }
}

export default Stopwatch;

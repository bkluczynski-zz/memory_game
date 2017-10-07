import React from 'react';
import Counter from '../Counter/index'
import GameOver from '../GameOver/index'

const trackProgress = (counter) => {
    switch (counter) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        return (
          <div>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
          </div>)
        break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        return (
          <div>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
          </div>
            )
              break;
              case 21:
              case 22:
              case 23:
              case 24:
              case 25:
              case 26:
              case 27:
              case 28:
              case 29:
              case 30:
              return (
                <div>
                  <li><i className="fa fa-star"></i > </li>
                </div>
              )
                break;
          default: return <div><li><i className="fa fa-star"></i > </li></div>

    }
}

const Stars = ({counter, deck}) => (

    <section className="score-panel">
        <ul className="stars">
          {trackProgress(counter)}
        </ul>
        <GameOver deck={deck} counter={counter}/>
        <Counter counter={counter}/>
        <div className="restart">
            <i className="fa fa-repeat"></i>
        </div>
    </section>

)

export default Stars;

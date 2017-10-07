import React from 'react'

export const shuffle = (array) => {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export const trackProgress = (counter) => {
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

export const handleClass = (active, match) => {
  if (match){
    return 'card match animated flip'
  } else if (active) {
    return 'card open show animated rubberBand'
  } else if (match === false) {
    return 'card animated wobble'
  } else {
    return 'card'
  }
}

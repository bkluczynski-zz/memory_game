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
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
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
            <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
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
                  <i className="fa fa-star"></i>
                </div>
              )
                break;
          default: return <div><i className="fa fa-star"></i>
</div>

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

export const initialState = {

  deck: [
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
  counter: 0,
  modal: true,
  secondsElapsed: 0
}

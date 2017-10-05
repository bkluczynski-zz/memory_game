/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import Card from '.';

describe('Card display', () => {
  it('Should display a card', () => {
    let component = shallow(<Card />)
    expect(component.exists()).toEqual(true);
  })


})

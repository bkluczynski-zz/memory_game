/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import Grid from '.';

describe('Grid component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Grid />);
    expect(component.exists()).toEqual(true);
  })
  it('Should have 16 cards being displayed', () => {
    const component = shallow(<Grid />);
    expect(component.find('.card').length).toEqual(16);
  })
})

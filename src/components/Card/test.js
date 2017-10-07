/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import Card from '.';
import faker from 'faker';
import { generateDeck } from '../../util/testData'


describe('Card display', () => {
  let wrapper;
  const deck = generateDeck();
  const classHandling = jest.fn();
  const open = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Card
         cards={deck}
         handleClass={classHandling}
         open={open}
      />
    )
  })

  afterEach(() => {
    classHandling.mockClear();
    open.mockClear();
  })

  it('Should render a component correctly', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('Should have a grid of cards', () => {
    expect(wrapper.find('.deck').length).toEqual(1);
  })
  it('should initialize the deck state to an array of 16', () => {
    expect(wrapper.props().children.length).toEqual(16)
  })
  it('fires the right method upon clicking the card', () => {
    wrapper.find('li').first().simulate('click');
    expect(open.mock.calls.length).toEqual(1);
  })




})

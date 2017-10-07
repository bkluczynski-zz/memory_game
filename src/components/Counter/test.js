/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '.';


describe('Counter display', () => {
  let wrapper;
  const counter = 0

  beforeEach(() => {
    wrapper = shallow(
      <Counter
         counter={counter}
      />
    )
  })

  it('allows to see the counter exists', () => {
    expect(wrapper.exists()).toEqual(true)
  })
  it('displays the counter', () => {
    expect(wrapper.find('span').length).toEqual(1)
    expect(wrapper.find('span').hasClass('moves'))
  })
  it('counter is a number', () => {
    expect(wrapper.props().children[1]).toEqual(0)
  })

})

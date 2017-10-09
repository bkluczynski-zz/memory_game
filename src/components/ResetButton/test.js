/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import ResetButton from '.';

describe('ResetButton', () => {
  let wrapper;
  const reset = jest.fn();


beforeEach(() => {
  wrapper = shallow(
    <ResetButton
      reset={reset}
      />
  )
})

afterEach(() => {
  reset.mockClear();
})

it('should trigger reset method upon click', () => {
  wrapper.find('div').first().simulate('click');
  expect(reset.mock.calls.length).toEqual(1);
})

})

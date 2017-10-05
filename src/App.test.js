
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/* global it, expect */

it('renders without crashing', () => {
  const component = shallow(<App />)
  expect(component.exists()).toEqual(true);
});

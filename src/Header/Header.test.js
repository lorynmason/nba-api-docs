import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme'


describe('Header', () => {
  const wrapper = shallow(<Header />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
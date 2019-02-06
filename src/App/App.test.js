import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  it('should matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('changePage updates the state', () => {
    wrapper.instance().changePage('get')
    expect(wrapper.state('activePage')).toEqual('get')
  })
})


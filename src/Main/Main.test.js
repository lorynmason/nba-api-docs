import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme'

describe('Main', () => {
  let wrapper = shallow(<Main activePage='overview'/>)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot', () => {
    wrapper = shallow(<Main activePage='get'/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot', () => {
    wrapper = shallow(<Main activePage='post'/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot', () => {
    wrapper = shallow(<Main activePage='patch'/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot', () => {
    wrapper = shallow(<Main activePage='delete'/>)
    expect(wrapper).toMatchSnapshot()
  })
})
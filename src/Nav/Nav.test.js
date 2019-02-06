import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme'


describe('Nav', () => {
  const mockFunc = jest.fn()
  const wrapper = shallow(<Nav changePage={mockFunc}/>)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call changePage when li are clicked', () => {
    wrapper.find('#page-get').simulate('click')
    wrapper.find('#page-post').simulate('click')
    wrapper.find('#page-patch').simulate('click')
    wrapper.find('#page-delete').simulate('click')
    wrapper.find('#page-overview').simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(5)
  })
})
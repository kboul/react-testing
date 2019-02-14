import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />)
})

afterEach(() => {
    wrapped.unmount()
})

it('has a text area and a buttton', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area and users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        // pass as value the desired to be tested
        target: { value: 'new comment' }
    })
    // force the component to update like using setState
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

it('should empty the textarea when form is submitted & textarea is not empty', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    })
    wrapped.update()
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
})
import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

const wrapped = shallow(<App />)

it('shows a comment box', () => {
    // expect that inside App there is a CommentBox
    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})
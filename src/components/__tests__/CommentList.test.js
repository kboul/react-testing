import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Rout from 'Root'

let wrapped, initialState

beforeEach(() => {
    initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    wrapped = mount(
        <Rout initialState={initialState}>
            <CommentList />
        </Rout>
    )
})

it('creates one <li> per comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length)
})

it('shows the text for each comment', () => {
    expect(wrapped.render().text())
        .toContain(initialState.comments.join(''))
})
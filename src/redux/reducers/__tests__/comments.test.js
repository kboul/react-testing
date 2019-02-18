import commentsReducer from 'redux/reducers/comments'
import { SAVE_COMMENT } from 'redux/actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const comment = 'New Comment'
    const action = {
        type: SAVE_COMMENT,
        comment
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual([comment])
})
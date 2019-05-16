import commentsReducer from 'store/reducers/comments'
import { SAVE_COMMENT } from 'store/actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const comment = 'New Comment'
    const action = {
        type: SAVE_COMMENT,
        comment
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual([comment])
})

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'Random type' })

    expect(newState).toEqual([])
})
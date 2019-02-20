import { saveComment } from 'redux-local/actions'
import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux-local/actions/types'

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment()

        expect(action.type).toEqual(SAVE_COMMENT)
    })

    it('has the correct payload', () => {
        const action = saveComment('New Comment')

        expect(action.comment).toEqual('New Comment')
    })
})
import { saveComment } from 'redux/actions'
import { SAVE_COMMENT } from 'redux/actions/types'

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
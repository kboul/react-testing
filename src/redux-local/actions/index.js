import { SAVE_COMMENT } from 'redux-local/actions/types'

export const saveComment = comment => ({
    type: SAVE_COMMENT,
    comment
})
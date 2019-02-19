import { SAVE_COMMENT, FETCH_COMMENT } from 'redux-local/actions/types'
import jsonPlaceholder from 'api/jsonPlaceholder'

export const saveComment = comment => ({
    type: SAVE_COMMENT,
    comment
})

export const fetchComments = () => {
    const response = jsonPlaceholder.get('/comments')

    return {
        type: FETCH_COMMENT,
        response
    }
}
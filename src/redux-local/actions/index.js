import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux-local/actions/types'
import jsonPlaceholder from 'api/jsonPlaceholder'

export const saveComment = comment => ({
    type: SAVE_COMMENT,
    comment
})

export const fetchComments = async () => {
    const comments = await jsonPlaceholder.get('/comments')

    return {
        type: FETCH_COMMENTS,
        comments
    }
}
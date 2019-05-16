import { SAVE_COMMENT, FETCH_COMMENTS } from 'store/actions/types'
import http from 'services/httpService'

export const saveComment = comment => ({
    type: SAVE_COMMENT,
    comment
})

export const fetchComments = async () => {
    const comments = await http.get('/comments')

    return {
        type: FETCH_COMMENTS,
        comments
    }
}
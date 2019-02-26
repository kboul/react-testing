import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux-local/actions/types'
import axios from 'axios'

export const saveComment = comment => ({
    type: SAVE_COMMENT,
    comment
})

export const fetchComments = async () => {
    const comments = await axios.get(`${process.env.REACT_APP_API_URL}/comments`)

    return {
        type: FETCH_COMMENTS,
        comments
    }
}
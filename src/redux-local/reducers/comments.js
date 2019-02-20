import { SAVE_COMMENT, FETCH_COMMENTS } from 'redux-local/actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [action.comment, ...state]
        case FETCH_COMMENTS:
            const comments = action.comments.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state
    }
}
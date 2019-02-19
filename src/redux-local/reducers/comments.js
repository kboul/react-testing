import { SAVE_COMMENT, FETCH_COMMENT } from 'redux-local/actions/types'

export default function (state = [], action) {
    console.log(action, state)
    switch (action.type) {
        case SAVE_COMMENT:
            return [action.comment, ...state]
        case FETCH_COMMENT:
            const comments = action.comments.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state
    }
}
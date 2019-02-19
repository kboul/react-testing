import { combineReducers } from 'redux'
import commentsReducer from 'redux-local/reducers/comments'

export default combineReducers({
    comments: commentsReducer
})
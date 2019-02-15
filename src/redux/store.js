import { createStore } from 'redux'
import rootReducer from 'redux/reducers/index'

const store = (window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
    : createStore)(rootReducer)

export default store

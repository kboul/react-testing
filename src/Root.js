import React from 'react'
import { Provider } from 'react-redux'
import { objectOf, arrayOf, string, element } from 'prop-types'

import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'redux-local/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

const Root = ({ children, initialState }) => {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(reduxPromise))
    )

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}

Root.propTypes = {
    children: element.isRequired,
    initialState: objectOf(arrayOf(string))
}

export default Root
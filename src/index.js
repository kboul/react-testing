import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import App from 'components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
)

serviceWorker.unregister()
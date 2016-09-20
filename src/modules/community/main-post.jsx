/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'


import Routes from './routes/alone.jsx'
import Post from './containers/postContainer.js'

import '../../style/index.less'

require('safe')(React, {
    errorHandler: function () {
        // console.log(errReport);
    }
})

ReactDOM.render(
    <Provider store={store()}>
        <Routes>
            <Post />
        </Routes>
    </Provider>,
    document.getElementById('container')
)

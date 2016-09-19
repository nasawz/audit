/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'


import Container from '../common/container.jsx'
import Home from './containers/homeContainers.js'

import '../../style/index.less'

require('safe')(React, {
    errorHandler: function () {
        // console.log(errReport);
    }
})

ReactDOM.render(
    <Provider store={store()}>
        <Container>
            <Home />
        </Container>
    </Provider>,
    document.getElementById('container')
)

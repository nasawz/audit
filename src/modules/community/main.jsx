/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes/spa.jsx'

const App = React.createFactory(Routes)
import {navigate} from 'react-mini-router'

import '../../style/index.less'

require('safe')(React, {
    errorHandler: function () {
        // console.log(errReport);
    }
})

ReactDOM.render(
    <Provider store={store()}>
        {App({ root:'/community' })}
    </Provider>,
    document.getElementById('container')
)
if (window.location.pathname == '/') {
    navigate('/community/home')
}

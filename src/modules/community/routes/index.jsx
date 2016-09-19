/**
 * create by nasa.wang
 */
import React from 'react'
import {RouterMixin} from 'react-mini-router'

import Container from '../../common/container.jsx'
import Home from '../containers/homeContainers.js'

const Routes = React.createClass({
    mixins: [RouterMixin],
    routes: {
        '/': 'home',
        '/message/:text': 'message'
    },
    render () {
        return (
            <Container>
                { this.renderCurrentRoute() }
            </Container>
        )
    },
    home: function() {
        return <Home />
    },
    message: function(text) {
        return <div>{text}</div>
    },
    notFound: function(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes

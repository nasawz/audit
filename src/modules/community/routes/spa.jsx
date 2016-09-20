/**
 * create by nasa.wang
 */
import React, {PropTypes} from 'react'
import {RouterMixin} from 'react-mini-router'

import Container from '../../common/container.jsx'
import Home from '../containers/homeContainer.js'
import Post from '../containers/postContainer.js'

const Routes = React.createClass({
    mixins: [RouterMixin],
    childContextTypes: {
        runType: PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {
            runType: 'spa'
        }
    },
    routes: {
        '/home': 'home',
        '/post': 'post',
        '/message/:text': 'message'
    },
    render () {
        return (
            <Container>
                { this.renderCurrentRoute() }
            </Container>
        )
    },
    home(params) {
        return <Home params={params} />
    },
    post() {
        return <Post  />
    },
    message(text) {
        return <div>{text}</div>
    },
    notFound(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes

/**
 * create by nasa.wang
 */
import React from 'react'
import {RouterMixin} from 'react-mini-router'

const Routes = React.createClass({
    mixins: [RouterMixin],
    routes: {
        '/': 'home',
        '/message/:text': 'message'
    },
    render () {
        return this.renderCurrentRoute()
    },
    home: function() {
        return <div>Hello World</div>
    },
    message: function(text) {
        return <div>{text}</div>
    },
    notFound: function(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes

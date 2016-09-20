/**
 * create by nasa.wang
 */
import React, {PropTypes} from 'react'
import {RouterMixin} from 'react-mini-router'

import Container from '../../common/container.jsx'

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
    },
    render () {
        return (
            <Container>
                { this.renderCurrentRoute() }
            </Container>
        )
    },
    notFound(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes

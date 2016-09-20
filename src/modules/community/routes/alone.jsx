/**
 * create by nasa.wang
 */
import React, {PropTypes} from 'react'
import Container from '../../common/container.jsx'

import {parse} from '../../common/utils.js'

const Routes = React.createClass({
    childContextTypes: {
        runType: PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {
            runType: 'alone'
        }
    },
    render () {
        let params = parse(window.location.search)
        let {children} = this.props
        return (
            <Container>
                {React.Children.map(children, (element) => {
                    return React.cloneElement(element, { params: params })
                })}
            </Container>
        )
    }
})

export default Routes

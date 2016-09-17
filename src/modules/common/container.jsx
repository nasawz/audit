/**
 * create by nasa.wang
 */
import React from 'react'

const Container = React.createClass({
    render () {
        let {children} = this.props
        return (
            <div>
                { children }
            </div>
        )
    }
})

export default Container

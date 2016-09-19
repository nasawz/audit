/**
 * create by nasa.wang
 */
import React from 'react'

const Container = React.createClass({
    render () {
        let {children} = this.props
        return (
            <div className='cex-Container'>
                { children }
            </div>
        )
    }
})

export default Container

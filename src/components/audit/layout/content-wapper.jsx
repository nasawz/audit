import React from 'react'


/**
 * 主容器
 */
const ContentWapper = React.createClass({
    render () {
        let {children} = this.props
        return (
            <div>{children}</div>
        )
    }
})

export default ContentWapper

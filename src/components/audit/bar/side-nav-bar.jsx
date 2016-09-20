import React from 'react'


/**
 * 左侧导航
 */
const SideNavBar = React.createClass({
    render () {
        let {children} = this.props
        return (
            <div>{children}</div>
        )
    }
})

export default SideNavBar

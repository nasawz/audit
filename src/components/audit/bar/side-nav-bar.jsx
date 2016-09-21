import React from 'react'
import '../../../style/SideNavBar.less'

/**
 * 左侧导航
 */
const SideNavBar = React.createClass({
    render () {
        let {children} = this.props
        return (
            <div className="SideNavBar">
                {children}
            </div>
        )
    }
})

export default SideNavBar

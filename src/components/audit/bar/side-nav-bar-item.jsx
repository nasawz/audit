import React from 'react'


/**
 * 导航按钮
 */
const SideNavBarItem = React.createClass({
    render () {
        return (
            <div className="SideNavBarItem">
                <i className={this.props.icon}></i>
            </div>
        )
    }
})

export default SideNavBarItem

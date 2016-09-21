import React from 'react'


/**
 * 导航按钮
 */
const SideNavBarItem = React.createClass({
    handleClick(e) {
        let path = e.currentTarget.getAttribute('data-path')
        global.appHistory.push(path)
    },
    render () {
        let cls = this.props.selected ? 'SideNavBarItem active' : 'SideNavBarItem'
        return (
            <div className={cls} data-path={this.props.path} onClick={this.handleClick}>
                <i className={this.props.icon}></i>
            </div>
        )
    }
})

export default SideNavBarItem

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
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="home"></i></a>
                </div>
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="overview"></i></a>
                </div>
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="home"></i></a>
                </div>
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="home"></i></a>
                </div>
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="home"></i></a>
                </div>
                <div className="SideNavBarItem">
                    <a href="javascript:void(0)"><i className="home"></i></a>
                </div>
            </div>
        )
    }
})

export default SideNavBar

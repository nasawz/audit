import React from 'react'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

import navConf from '../nav-config.js'


const Privilege = React.createClass({
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                        <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                        <SideNavBarItem icon="overview" path={navConf.leftnav[1]}  />
                        <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                        <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                        <SideNavBarItem icon="clue" path={navConf.leftnav[4]} />
                        <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                        <SideNavBarItem icon="xcreategroup" path={navConf.leftnav[6]} selected />
                    </SideNavBar>
                    <ContentWapper>
                        <div className='privilegeBox'>
                            <h3>配置权限</h3>
                            <table className="table">
                                <th>
                                    <td>11</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </th>
                                
                            </table>
                        </div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Privilege

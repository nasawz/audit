import React from 'react'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

import navConf from '../nav-config.js'

const CreateGroup = React.createClass({
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                        <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                        <SideNavBarItem icon="overview" path={navConf.leftnav[1]}/>
                        <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                        <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                        <SideNavBarItem icon="clue" path={navConf.leftnav[4]} />
                        <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                        <SideNavBarItem icon="creategroup" path={navConf.leftnav[6]}  selected  />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="columns clueBox"></div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default CreateGroup

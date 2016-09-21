import React from 'react'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'
import AlertPrivilege from 'audit/alert/alert-privilege.jsx'

import navConf from '../nav-config.js'


const Privilege = React.createClass({
    showAlert(){
        this.setState({
            show:true,
        })
    },
    closeAlert(data){

    	this.setState({
    		showAlert:false,
    	})
    },
    getInitialState(){
        return{
            showAlert:true
        }
    },
    render () {
        return (
            <div>
                <AlertPrivilege show={this.state.showAlert} close={this.closeAlert} tit="权限设置"/>
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
111
                        </div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Privilege

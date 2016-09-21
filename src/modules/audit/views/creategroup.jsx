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
                        <div className="clueBox creategroup">
                            <h1 className="cardHeader">新建工作组</h1>
                            <div className="columns">
                                <div className="column is-11 is-offset-1">

                                    <div className="container" style={{paddingTop:'80px'}}>
                                        <div className="content">
                                            <h3>组长：李华</h3>
                                        </div>
                                        <div className="control is-horizontal">
                                          <div className="control-label">
                                            <label className="label">选择部门</label>
                                          </div>
                                          <div className="control" style={{flexGrow:14}}>
                                            <p className="control">
                                              <input className="input" type="text" placeholder="Name" />
                                            </p>
                                          </div>
                                        </div>
                                        <div className="control is-horizontal">
                                          <div className="control-label">
                                            <label className="label">添加组员</label>
                                          </div>
                                          <div className="control" style={{flexGrow:14}}>

                                          </div>
                                        </div>
                                        <div className='flex-center'>
                                            <div>
                                                <a className="button is-dark" style={{width:'120px',marginRight:'20px'}}>取消</a>
                                                <a className="button is-info" style={{width:'120px',marginRight:'20px'}}>下一步</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default CreateGroup

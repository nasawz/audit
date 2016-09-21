/* eslint-disable */
import React from 'react'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'
import { Table, Icon } from 'antd'

import navConf from '../nav-config.js'



const Privilege = React.createClass({
    openDelete(){
        console.log('openDelete');
    },
    openPrivilege(){
        console.log('openPrivilege');
    },
    render () {
const columns = [ {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
},{
  title: '真实姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>,
}, {
  title: '部门',
  dataIndex: 'part',
  key: 'part',
}, {
  title: '被分配的审计点',
  dataIndex: 'point',
  key: 'point',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="javascript:;" onClick={this.openPrivilege}>权限分配</a>
      <span className="ant-divider"></span>
      <a href="javascript:;" onClick={this.openDelete}>删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '小明',
  index:1,
  part:'北京移动 > 城区三分公司>政企中心',
  point:'50'
}, {
  key: '2',
  name: '小张',
  index:2,
  part:'北京移动 > 城区三分公司>政企中心',
  point:'50'
}
, {
  key: '3',
  name: '小王',
  index:3,
  part:'北京移动 > 城区三分公司>政企中心',
  point:'50'
}
, {
  key: '4',
  name: '小李',
  index:4,
  part:'北京移动 > 城区三分公司>政企中心',
  point:'50'
}
, {
  key: '5',
  name: '小赵',
  index:5,
  part:'北京移动 > 城区三分公司>政企中心',
  point:'50'
}
];
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
                        <div className="clueBox privilege">
                            <h1 className="cardHeader">配置权限</h1>
                            <div className="columns" style={{
                                    padding:'10px'
                                }}>
                              <div className="column">
                                  <Table pagination={false} bordered columns={columns} dataSource={data} />
                              </div>
                            </div>
                        </div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Privilege

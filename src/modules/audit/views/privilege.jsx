/* eslint-disable */
import React from 'react'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'
import { Table, Icon } from 'antd'
import DeleteAlert from '../../../components/audit/alert/delete-alert.jsx'
import AlertPrivilege from 'audit/alert/alert-privilege.jsx'
import AlertDetail from 'audit/alert/alert-detail.jsx'

import navConf from '../nav-config.js'



const Privilege = React.createClass({
  openDelete() {
    this.setState({
      showAlertDelete: true,
    })
  },
  openPrivilege() {
    console.log('openPrivilege');
    this.setState({
    		showAlert: true,
    })
  },
  openDetail() {
    this.setState({
      showAlertDetail: true,
    })
  },
  closeAlertDeail() {
    this.setState({
    		showAlertDetail: false,
    })
  },
  showAlertDetail() {
    this.setState({
      showAlertDetail: true,
    })
  },
  showAlert() {
    this.setState({
      show: true,
    })
  },
    showAlertDelete() {
    this.setState({
      showAlertDelete: true,
    })
  },
      closeAlertDelete(data) {

    this.setState({
    		showAlertDelete: false,
    })
  },
  closeAlert(data) {

    this.setState({
    		showAlert: false,
    })
  },
  getInitialState() {
    return {
      showAlertDelete: false,
      showAlert: false,
      showAlertDetail: false,
    };
  },
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    }, {
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
      index: 1,
      part: '总部内审部',
      point: '0'
    }, {
        key: '2',
        name: '小张',
        index: 2,
        part: '总部内审部',
        point: '0'
      }
      , {
        key: '3',
        name: '小王',
        index: 3,
        part: '总部内审部',
        point: '0'
      }
      , {
        key: '4',
        name: '小李',
        index: 4,
        part: '总部内审部',
        point: '0'
      }
      , {
        key: '5',
        name: '小赵',
        index: 5,
        part: '总部内审部',
        point: '0'
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
            <SideNavBarItem icon="jieguozhanshi" path={navConf.leftnav[7]}  />
            <SideNavBarItem icon="xcreategroup" path={navConf.leftnav[6]} selected />
          </SideNavBar>
          <ContentWapper>
            <DeleteAlert show={this.state.showAlertDelete} close={this.closeAlertDelete} />
            <AlertPrivilege show={this.state.showAlert} close={this.closeAlert} tit="权限设置"/>
            <AlertDetail show={this.state.showAlertDetail} close={this.closeAlertDeail} tit="审计点分配详情"/>
            <HeaderBar />
            <div className="clueBox privilegeBox">
              <h1 className="cardHeader">配置权限</h1>
              <div className="columns" style={{
                padding: '10px'
              }}>
                <div className="column">
                  <Table pagination={false} bordered columns={columns} dataSource={data} />
                  <div className="link" onClick={this.openDetail}>审计点分配详情</div>

                  <div className='flex-center'>
                    <div style={{ marginTop: '30px' }}>
                      <a href='audit-creategroup.html' className="button is-dark" style={{ width: '120px', marginRight: '20px' }}>上一步</a>
                      <a href='audit-creategroup.html' className="button is-info" style={{ width: '120px', marginRight: '20px' }}>完成</a>
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

export default Privilege

/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'
import ClueTopItem from '../../../components/audit/clue/clue-top-item.jsx'
import Pan from '../../../components/audit/pan/pan.jsx'
import Alert from '../../../components/audit/alert/alert.jsx'
import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

import navConf from '../nav-config.js'

const Clue = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Clue')
    },
    render () {
        return (
            <div>
                <Alert />
                <HeaderBar />
                <div>
                    <SideNavBar>
                            <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                            <SideNavBarItem icon="overview" path={navConf.leftnav[1]}  />
                            <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                            <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                            <SideNavBarItem icon="clue" path={navConf.leftnav[4]} selected />
                            <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="columns clueBox">
                            <div className="column is-4 clueLeft">
                                <div>
                                    <Pan />
                                </div>
                                <div className="clueResult">
                                    <p>综合发现</p>
                                    <div className="clueResultContent">
                                        等待省数据综合分析结果...
                                    </div>
                                </div>
                            </div>
                            <div className="column clueRight">
                                <h3 className="clueRightTit">审计点名称</h3>
                                <div className="columns ">
                                    <ClueTopItem cls="column current" link_href="http://wwww.com" link_href2="http://hhh.com" content="包月不限流量套餐"/>
                                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="终端采购价调整管理"/>
                                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="年度积分回馈率过高"/>
                                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="通过合作业务方式
开展自有业务"/>
                                </div>
                                <div className=" clueRBtm">
                                    <div className="columns bTop">
                                        <div className="column cLeft">
                                            <div className="cItem">
                                                <p className="p1">发现疑似超低流量资费套餐</p>
                                                <p className="p2">
                                                    <span>221</span>个
                                                </p>
                                                <p className="p3">
                                                    问题严重城市：芜湖    淮南    滁州
                                                </p>
                                                <p className="p4">
                                                    <i className="icon">
                                                        <img src={require('../../../img/c2.png')} />
                                                    </i>
                                                    <a href="javascript:;">《流量超过8G的用户清单和收入》</a>
                                                    <a className="look" href="javascript:;">查看</a>
                                                </p>
                                            </div>
                                            <p className="tit">集团数据发现</p>
                                        </div>
                                        <div className="column cRight">
                                            <div className="cItem green">
                                                <p className="p1">发现疑似低流量资费套餐</p>
                                                <p className="p2">
                                                    <span>待分析</span>
                                                </p>
                                                <p className="p3">
                                                    问题严重城市：
                                                </p>
                                                <p className="p4">
                                                    <i className="icon">
                                                        <img src={require('../../../img/c3.png')} />
                                                    </i>
                                                    <a href="javascript:;">上传数据文件</a>
                                                </p>
                                            </div>
                                            <p className="tit">省数据发现</p>
                                        </div>
                                    </div>
                                    <div className=" bBottom">
                                        <img src={require('../../../img/c4.jpg')} />
                                        <img src={require('../../../img/c5.jpg')} />
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

export default Clue

/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

import navConf from '../nav-config.js'

const Overview = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Overview')
    },
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                        <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                        <SideNavBarItem icon="overview" path={navConf.leftnav[1]} selected />
                        <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                        <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                        <SideNavBarItem icon="clue" path={navConf.leftnav[4]} />
                        <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                        <SideNavBarItem icon="xcreategroup" path={navConf.leftnav[6]}  />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="overview">
                            <div className="columns">
                                <div className="column is-three-quarters">
                                    <div className="overviewChart">

                                    </div>
                                </div>
                                <div className="column">
                                    <div className="overviewProgress">

                                    </div>
                                </div>
                            </div>
                            <div className="overviewBlock">
                                <div className="columns">
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="人工成本及劳务费">人工成本及劳务费</a>
                                            <ul>
                                                <li>人工成本</li>
                                                <li>劳务费</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="管理层薪资管理">管理层薪资管理</a>
                                            <ul>
                                                <li>管理层薪资管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="会计信息质量">会计信息质量</a>
                                            <ul>
                                                <li>会计核算</li>
                                                <li>会计基础工作</li>
                                                <li>发票管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="资金管理">资金管理</a>
                                            <ul>
                                                <li>账户管理</li>
                                                <li>付款管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="业务合规性">业务合规性</a>
                                            <ul>
                                                <li>大众市场</li>
                                                <li>终端营销</li>
                                                <li>集团客户</li>
                                                <li>社会渠道</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="工程管理">工程管理</a>
                                            <ul>
                                                <li>工程建设管理</li>
                                                <li>资产管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="合同管理">合同管理</a>
                                            <ul>
                                                <li>合同签订与履约</li>
                                                <li>框架协议+订单管理</li>
                                                <li>合同档案管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="制度体系">制度体系</a>
                                            <ul>
                                                <li>制度建设</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="集体决策">集体决策</a>
                                            <ul>
                                                <li>决策制度</li>
                                                <li>决策权限</li>
                                                <li>决策范围</li>
                                                <li>执行决策结果</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="采购及招投标管理">采购及招投标管理</a>
                                            <ul>
                                                <li>制度设计</li>
                                                <li>采购管理</li>
                                                <li>采购方式选择规范性</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="系统权限">系统权限</a>
                                            <ul>
                                                <li>重要系统权限</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="履职待遇">履职待遇</a>
                                            <ul>
                                                <li>制度建设</li>
                                                <li>公务用车</li>
                                                <li>办公用房</li>
                                                <li>业务招待</li>
                                            </ul>
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

export default Overview

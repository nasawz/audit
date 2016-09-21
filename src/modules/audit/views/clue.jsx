/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'
import ClueTopItem from '../../../components/audit/clue/clue-top-item.jsx'
import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

const Clue = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Clue')
    },
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar></SideNavBar>
                    <ContentWapper>
                        <div className="columns clueBox">
                            <div className="column is-4 clueLeft">
                                <div>转盘</div>
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
                                <div className="columns clueRBtm">
                                    <div className="columns bTop">
                                        <div className="column cLeft">
                                            <div className="cItem">
                                                
                                            </div>
                                        </div>
                                        <div className="column cRight">1</div>
                                    </div>
                                    <div className="bBottom">

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

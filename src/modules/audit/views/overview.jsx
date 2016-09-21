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

import SimpleLineChart from 'audit/charts/simple-line-chart.jsx'
import StackedBarChart from 'audit/charts/stacked-bar-chart.jsx'
import TwoLevelPieChart from 'audit/charts/two-level-pie-chart.jsx'

import navConf from '../nav-config.js'

import AlertChart from '../../../components/audit/alert/alertChart.jsx'

const Overview = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Overview')
    },
    getInitialState() {
        return {
            idx: 1,
            showProgressAlert: false,
            showCapitalAlert: false,
            showMarketAlert: false
        }
    },
    handleClickPrev() {
        if (this.state.idx == 1) return
        this.setState({
            idx: 1
        })
    },
    handleClickNext() {
        if (this.state.idx == 2) return
        this.setState({
            idx: 2
        })
    },
    showAlert(e){
        let type = e.currentTarget.getAttribute('data-type')
        if (type == 'progress') {
            this.setState({
                showProgressAlert:true
            });
        } else if (type == 'capital') {
            this.setState({
                showCapitalAlert:true
            });
        } else {
            this.setState({
                showMarketAlert:true
            });
        }
    },
    closeAlert(){
        this.setState({
            showProgressAlert:false,
            showCapitalAlert:false,
            showMarketAlert:false
        });
    },
    renderProgress() {
        if (this.state.idx == 1) {
            return (
                <div data-type="progress" onClick={this.showAlert}>
                    <div className="overviewProgressBox">
                        <TwoLevelPieChart width={200} height={200} state="s1" />
                    </div>
                    <p>省公司数据准备情况</p>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="overviewProgressBox">
                        <TwoLevelPieChart width={200} height={200} state="s2" />
                    </div>
                    <p>省公司数据准备</p>
                </div>
            )
        }
    },
    render () {
        let prevCls = this.state.idx == 1 ? 'prev disabled' : 'prev';
        let nextCls = this.state.idx == 2 ? 'next disabled' : 'next';
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
                        <SideNavBarItem icon="creategroup" path={navConf.leftnav[6]}  />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="overview">
                            <div className="columns">
                                <div className="column is-three-quarters">
                                    <div className="overviewChart">
                                        <div className="overviewChartHd">
                                            <strong>审计点数据支撑情况汇总</strong>
                                            <span><i></i>不适用大数据分析</span>
                                            <span><i></i>省公司数据运行大数据分析</span>
                                            <span><i></i>总部和省数据运行大数据分析</span>
                                            <span><i></i>总部数据运行大数据分析</span>
                                        </div>
                                        <StackedBarChart height={290} />
                                    </div>
                                </div>
                                <div className="column">
                                    <div ref='overviewProgress' className="overviewProgress">
                                        <h1>数据准备进度</h1>
                                        { this.renderProgress() }
                                        <div className="overviewProgressBtn">
                                            <b className={prevCls} onClick={this.handleClickPrev}></b>
                                            <b className={nextCls} onClick={this.handleClickNext}></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overviewBlock">
                                <div className="overviewBlockTips"><p>打包下载</p></div>
                                <div className="columns">
                                    <div className="column">
                                        <div>
                                            <a href="javascript:void(0)" title="人工成本（劳务费）主要包括：职工工资总额、社会保险费用、职工福利费用、职工教育经费、劳动保护费用、职工住房费用和其他人工成本支出。其中，职工工资总额是人工成本的主要组成部分。平均人工成本=人工成本总额/同期人数。人工成本比重=人工成本总额/同期总成本*100%。劳动分配率=人工成本总额/同期增加值*100%。人工成本亦称“劳动成本”。指企业在生产经营中由投入劳动力要素所发生的一切费用，包括企业支付给职工的工资性报酬和福利性供给，是企业总成本的组成部分。">人工成本及劳务费</a>
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
                                        <div data-type="capital" onClick={this.showAlert}>
                                            <a href="javascript:void(0)" title="资金管理">资金管理</a>
                                            <ul>
                                                <li>账户管理</li>
                                                <li>付款管理</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div data-type="market" onClick={this.showAlert}>
                                            <a href="javascript:void(0)" title="在合规性审计中，审计人员应确定公司是否遵循了现行法律和法规以及专业和行业标准或合同责任的要求，即被审计单位是否遵循了特定的程序、规则或条例。例如，确定会计人员是否遵循了财务主管规定的手续，检查工资率是否符合工资法规定的最低限额，或者审查与银行签订的合同，以确信被审计单位遵守了法定要求。对审计人员来讲，进行合规性审计的第一步是确定管理层是否有一个识别现行政策、程序、标准、法律以及法规的制度；然后，审计人员应评估控制是否得到了恰当的应用或遵循；最后，该审计应得到公司是否合规的结论">业务合规性</a>
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
                        <AlertChart show={this.state.showProgressAlert} close={this.closeAlert} title='省公司数据准备情况' top="1%" >
                        	<img src={require('../../../img/progress-pic.jpg')} />
                        </AlertChart>
                        <AlertChart show={this.state.showCapitalAlert} close={this.closeAlert} title='资金管理' >
                        		<h3>
                        			定期归帐管理
                                    <i className="qizi zise"></i>
                        		</h3>
                                <ul>
                                    <li>审计说明：是否定期对账并对长期或大额未达账项跟踪管理。</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                                <h3>
                                    资金归集是否违规
                                    <i className="qizi zise"></i>
                                </h3>
                                <ul>
                                    <li>审计说明：是否在规定范围内开设银行存款账户，按照总部要求归集相应的资金</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                                <h3>
                                    在非合作银行违规存款
                                    <i className="qizi zise"></i>
                                </h3>
                                <ul>
                                    <li>审计说明：是否在非总部规定的合作银行外保有定期存款及定期存款账户。</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                        </AlertChart>
                        <AlertChart show={this.state.showCapitalAlert} close={this.closeAlert} title='资金管理' >
                        		<h3>
                        			定期归帐管理
                                    <i className="qizi zise"></i>
                        		</h3>
                                <ul>
                                    <li>审计说明：是否定期对账并对长期或大额未达账项跟踪管理。</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                                <h3>
                                    资金归集是否违规
                                    <i className="qizi zise"></i>
                                </h3>
                                <ul>
                                    <li>审计说明：是否在规定范围内开设银行存款账户，按照总部要求归集相应的资金</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                                <h3>
                                    在非合作银行违规存款
                                    <i className="qizi zise"></i>
                                </h3>
                                <ul>
                                    <li>审计说明：是否在非总部规定的合作银行外保有定期存款及定期存款账户。</li>
                                    <li>审计发现：未发现数据异常</li>
                                </ul>
                        </AlertChart>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Overview

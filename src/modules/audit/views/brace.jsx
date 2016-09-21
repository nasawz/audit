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
import Map from 'audit/map/map.jsx'
import SimpleLineChart from 'audit/charts/simple-line-chart.jsx'

const Brace = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    getInitialState() {
        return {
            showState2: false
        }
    },
    componentDidMount() {
        this.props.actions.sayHello('Brace')
    },
    handleClick(e) {
        let idx = e.currentTarget.getAttribute('data-idx')
        this.setState({
            showState2: idx == 1 ? false : true
        });
    },
    renderMap() {
        if (!this.state.showState2) {
            return <Map state="s1" />
        } else {
            return <Map state="s2" />
        }
    },
    renderChart() {
        if (!this.state.showState2) {
            return <SimpleLineChart height={240} state="s1" />
        } else {
            return <SimpleLineChart height={240} state="s2" />
        }
    },
    renderData() {
        if (!this.state.showState2) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th className="tl"></th>
                            <th>合肥市</th>
                            <th>宜城市</th>
                            <th>黄山市</th>
                            <th>池州市</th>
                            <th>铜陵市</th>
                            <th>芜湖市</th>
                            <th>安庆市</th>
                            <th>巢湖市</th>
                            <th>马鞍山市</th>
                            <th>滁州市</th>
                            <th>蚌埠市</th>
                            <th>宿州市</th>
                            <th>淮南市</th>
                            <th>淮北市</th>
                            <th>毫州市</th>
                            <th>阜阳市</th>
                            <th>六安市</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="tl">预警状态</th>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                        </tr>
                        <tr>
                            <th className="tl">违规金额</th>
                            <td>3311</td>
                            <td>3200</td>
                            <td>3311</td>
                            <td>1972</td>
                            <td>5642</td>
                            <td>2832</td>
                            <td>3311</td>
                            <td>4598</td>
                            <td>3011</td>
                            <td>3200</td>
                            <td>2769</td>
                            <td>3200</td>
                            <td>7092</td>
                            <td>8342</td>
                            <td>5678</td>
                            <td>3200</td>
                            <td>2837</td>
                        </tr>
                        <tr>
                            <th className="tl">总补贴金额</th>
                            <td>1000001</td>
                            <td>1000019</td>
                            <td>999997</td>
                            <td>1000003</td>
                            <td>1000006</td>
                            <td>999987</td>
                            <td>1000014</td>
                            <td>1000000</td>
                            <td>999993</td>
                            <td>1000000</td>
                            <td>1000032</td>
                            <td>1000000</td>
                            <td>1000000</td>
                            <td>999992</td>
                            <td>1000005</td>
                            <td>1000008</td>
                            <td>1000000</td>
                        </tr>
                        <tr>
                            <th className="tl">占比</th>
                            <td>0.003311</td>
                            <td>0.0032</td>
                            <td>0.003311</td>
                            <td>0.001972</td>
                            <td>0.005643</td>
                            <td>0.002832</td>
                            <td>0.007092</td>
                            <td>0.004598</td>
                            <td>0.008342</td>
                            <td>0.003011</td>
                            <td>0.002769</td>
                            <td>0.0032</td>
                            <td>0.007092</td>
                            <td>0.008342</td>
                            <td>0.005678</td>
                            <td>0.0032</td>
                            <td>0.002837</td>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th className="tl"></th>
                            <th>合肥市</th>
                            <th>宜城市</th>
                            <th>黄山市</th>
                            <th>池州市</th>
                            <th>铜陵市</th>
                            <th>芜湖市</th>
                            <th>安庆市</th>
                            <th>巢湖市</th>
                            <th>马鞍山市</th>
                            <th>滁州市</th>
                            <th>蚌埠市</th>
                            <th>宿州市</th>
                            <th>淮南市</th>
                            <th>淮北市</th>
                            <th>毫州市</th>
                            <th>阜阳市</th>
                            <th>六安市</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="tl">预警状态</th>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic2.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                            <td><img src={require('../../../img/pic3.jpg')} /></td>
                            <td><img src={require('../../../img/pic1.jpg')} /></td>
                        </tr>
                        <tr>
                            <th className="tl">违规用户数</th>
                            <td>3311</td>
                            <td>5642</td>
                            <td>1279</td>
                            <td>1972</td>
                            <td>2300</td>
                            <td>3200</td>
                            <td>7092</td>
                            <td>4598</td>
                            <td>8342</td>
                            <td>3200</td>
                            <td>4790</td>
                            <td>2832</td>
                            <td>3200</td>
                            <td>1210</td>
                            <td>5678</td>
                            <td>3200</td>
                            <td>2971</td>
                        </tr>
                        <tr>
                            <th className="tl">总用户</th>
                            <td>999997</td>
                            <td>1000012</td>
                            <td>1000000</td>
                            <td>1000002</td>
                            <td>999999</td>
                            <td>987992</td>
                            <td>1000006</td>
                            <td>999956</td>
                            <td>1000015</td>
                            <td>1000009</td>
                            <td>1000031</td>
                            <td>999990</td>
                            <td>999984</td>
                            <td>1000008</td>
                            <td>1000000</td>
                            <td>999923</td>
                            <td>1000000</td>
                        </tr>
                        <tr>
                            <th className="tl">占比</th>
                            <td>0.003311</td>
                            <td>0.005642</td>
                            <td>0.001279</td>
                            <td>0.001972</td>
                            <td>0.0023</td>
                            <td>0.0032</td>
                            <td>0.007092</td>
                            <td>0.004598</td>
                            <td>0.008342</td>
                            <td>0.0032</td>
                            <td>0.00479</td>
                            <td>0.002832</td>
                            <td>0.0032</td>
                            <td>0.00121</td>
                            <td>0.005678</td>
                            <td>0.0032</td>
                            <td>0.002971</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    },
    render () {
        let cls1 = this.state.showState2 ? '' : 'active'
        let cls2 = this.state.showState2 ? 'active' : ''
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                        <SideNavBarItem icon="home" path="" />
                        <SideNavBarItem icon="overview" path="" />
                        <SideNavBarItem icon="circle" path="" />
                        <SideNavBarItem icon="chart" path="" />
                        <SideNavBarItem icon="clue" path="" />
                        <SideNavBarItem icon="brace" path="" selected />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="brace">
                            <div className="braceMenu">
                                <div className="columns">
                                    <div className="column"><div>业务合规性</div></div>
                                    <div className="column"><div>人工成本及劳务费</div></div>
                                    <div className="column"><div>工程管理</div></div>
                                    <div className="column"><div>系统管理</div></div>
                                    <div className="column"><div>履职待遇</div></div>
                                </div>
                            </div>
                            <div className="braceSubMenu">
                                <div className="columns">
                                    <div className="column">终端酬金支付异常管理</div>
                                    <div className="column">吉祥号管理</div>
                                    <div className="column">流量促销标准是否符合集团要求</div>
                                    <div className="column">渠道充值缴费酬金比例超标</div>
                                    <div className="column">年度积分自有业务兑换比例过低</div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="braceProvince">
                                        <h1>安徽</h1>
                                        <div className="braceProvinceMap">
                                            { this.renderMap() }
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="braceDiscovery">
                                        <h1>审计发现</h1>
                                        <div className="braceDiscoveryTab">
                                            <span className={cls1} data-idx="1" onClick={this.handleClick}>发现违规补贴金额共433234.05元</span>
                                            <span className={cls2} data-idx="2" onClick={this.handleClick}>发现3245个违规用户</span>
                                        </div>
                                        <h1>趋势分析</h1>
                                        { this.renderChart() }
                                    </div>
                                </div>
                                <div className="column is-2">
                                    <div className="braceInventory">
                                        <h1>省数据清单</h1>
                                        <div className="braceInventoryBd">
                                            {/*状态一*/}
                                            {/*<p className="state1">待上传</p>*/}
                                            {/*状态二*/}
                                            <div className="state2">
                                                <span>未上传：</span>
                                                <p>综合补贴率计算公式</p>
                                                <span>已上传：</span>
                                                <p>终端类营销案明细信息</p>
                                                <span>模板下载：</span>
                                                <p>终端类营销案明细信息</p>
                                            </div>
                                        </div>
                                        <div className="braceInventoryBtn">
                                            <span>上传</span>
                                            <span>执行</span>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            <div className="braceData">
                                <div className="columns">
                                    <div className="column">
                                        <h1>安徽省数据详情</h1>
                                        { this.renderData() }
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

export default Brace

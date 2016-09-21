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

import AlertChart from '../../../components/audit/alert/alertChart.jsx'

const Chart = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    handleClick(e) {
        let path = e.currentTarget.getAttribute('data-path')
        window.location.href = path;
    },
    renderAlert(){
    	this.setState({
    		showAlert:true,
    	});
    },
    closeAlert(){
    	this.setState({
    		showAlert:false,
    	});
    },
    downPointFun(){
    	this.setState({
    		downPoint:!this.state.downPoint,
    		outerLi:'none',
    	});
    },
    downLiFun(){
    	this.setState({
    		outerLi:this.state.outerLi=='none'?'block':'none',
    	});
    },
    innerLiFun(param){
    	this.setState({
    		showModule:param,
    		downPoint:!this.state.downPoint,
    		outerLi:this.state.outerLi=='none'?'block':'none',
    	});
    },
   	getInitialState(){
   		return{
   			downPoint:true,
   			outerLi:'none',
   			showModule:1,
   			showAlert:false,
   		}
   	},
    componentDidMount() {
        this.props.actions.sayHello('Chart');
    },
    renderListCont(){
    	if(this.state.showModule==1){
    		return(
    			<div className="columns">
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">经营业绩考核指标和重点通报指标是否作假</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')}  onClick={this.renderAlert} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo1.jpg')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：芜湖市  淮南市  淮北市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span data-path='xxxxx' onClick={this.handleClick}>编辑</span>
									</div>
									<div className="rightInfo">
										<span data-path='xxxxx' onClick={this.handleClick}>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">实名制制度落实情况</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo2.jpg')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：黄山市  阜阳市  宿州市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span>编辑</span>
									</div>
									<div className="rightInfo">
										<span>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">有价卡管理</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo3.jpg')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：池州市  明光市  界首市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span>编辑</span>
									</div>
									<div className="rightInfo">
										<span>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">个人客户大额欠费套利</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo4.jpg')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：合肥市  蚌埠市  滁州市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span>编辑</span>
									</div>
									<div className="rightInfo">
										<span>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
    		);
    	}
    	if(this.state.showModule==2){
    		return(
    			<div className="columns">
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">虚假开通集团业务</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo5.jpg')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：巢湖市  安庆市  淮北市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span>编辑</span>
									</div>
									<div className="rightInfo">
										<span>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="column">
						<div className="module">
							<div className="moduleTop">	
								<div className="titLeft">
									<div className="textT">集团欠费</div>
								</div>
								<div className="titRight">
									<img src={require('../../../img/icon-question.png')} />
								</div>

							</div>
							<div className="moduleMiddel">
								<img src={require('../../../img/chartNo6.png')} />
							</div>
							<div className="moduleBottom">
								<div className="botTop">问题严重城市：明光市  池州市  六安市</div>
								<div className="botBot">
									<div className="leftEdit">
										<span>编辑</span>
									</div>
									<div className="rightInfo">
										<span>详情</span>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="column">
						
					</div>
					<div className="column">
						
					</div>
				</div>
    		);
    	}
    },
    render () {
    	let topsideClass='topside ';
    	let topsideActive=this.state.downPoint?'tophide':'';
    	topsideClass=topsideClass+topsideActive;

        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                        <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                        <SideNavBarItem icon="overview" path={navConf.leftnav[1]}  />
                        <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                        <SideNavBarItem icon="chart" path={navConf.leftnav[3]} selected/>
                        <SideNavBarItem icon="clue" path={navConf.leftnav[4]}  />
                        <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                    </SideNavBar>
                    <ContentWapper>
                    	<div className="chartPart">
							<div className={topsideClass}>
								<div className="topList">
									<ul>
										<li className="outerLi"><span>人工成本及劳务费</span></li>
										<li className="outerLi"><span>资金管理</span></li>
										<li className="outerLi active" onClick={this.downLiFun} >
											<span>业务合规性</span>
											<ul style={{display:this.state.outerLi}}>
												<li className="innerLi" onClick={this.innerLiFun.bind(this,1)}>大众市场业务</li>
												<li className="innerLi" onClick={this.innerLiFun.bind(this,2)}>集团客户业务</li>
												<li className="innerLi">流量业务</li>
												<li className="innerLi">终端营销</li>
												<li className="innerLi">社会渠道管理</li>
												<li className="innerLi">积分资源管理</li>
												<li className="innerLi">合作业务</li>
											</ul>
										</li>
										<li className="outerLi"><span>采购及招投标管理</span></li>
									</ul>
								</div>
								<div className="downPoint" onClick={this.downPointFun}>
								</div>
							</div>
							<div className="listCont">
								{this.renderListCont()}
								
							</div>
                    	</div>

                    </ContentWapper>
                </div>
                <AlertChart show={this.state.showAlert} close={this.closeAlert} title='经营业绩考核指标和重点通报指标是否作假' >
                		<h3>
                			审计点说明
                		</h3>
                        <ul>
                            <li>区分经营业绩考核指标和重点通报指标，是否存在指标作假情况，例如养卡养机、伪造业务量、不知情定制等。</li>
                        </ul>
                        <h3>分析思路</h3>
                        <ul>
                            <li>针对《总部数据-养卡清单》，要求被审计单位提供《省公司养卡情况核查反馈》；</li>
                            <li>然后根据反馈的账单收入、酬金、成本补贴、话费补贴、有价卡补贴等详细信息，再具体分析是否存在真实的养卡行为；</li>
                            <li>也可根据被审计单位的经分系统对养卡的监控分析，跟踪是否有处罚即可。</li>
                        </ul>
                        <h3>总部数据提取步骤</h3>
                        <ul>
                            <li>养卡清单</li>
                            <li>终端套利清单</li>
                            <li>有价卡违规清单</li>
                        </ul>
                </AlertChart>
            </div>
        )
    }
})

export default Chart

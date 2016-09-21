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

const Chart = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
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
    		downPoint:!this.state.downPoint,
    		outerLi:this.state.outerLi=='none'?'block':'none',
    	});
    },
   	getInitialState(){
   		return{
   			downPoint:true,
   			outerLi:'none',
   			showModule:2
   		}
   	},
    componentDidMount() {
        this.props.actions.sayHello('Chart')
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
								<div className="columns">
									<div className="column">
										<div style={{background:'red'}}>1</div>
									</div>
									<div className="column">
										<div style={{background:'red'}}>1</div>
									</div>
									<div className="column">3</div>
									<div className="column">4</div>
									<div className="column">5</div>
								</div>
							</div>
                    	</div>

                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Chart

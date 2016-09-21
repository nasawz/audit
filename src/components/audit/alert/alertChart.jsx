import React from 'react'
import '../../../style/Alert.less'

const AlertChart = React.createClass({

    closeAlert(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.close();

    },
    render () {
        let H = window.innerHeight+'px'
        let show = this.props.show?'block':'none';

        return (
            <div className="AlertBox" style={{minHeight:H,display:show}}>
                <div className="box boxChart">
                    <p className="boxTop">经营业绩考核指标和重点通报指标是否作假
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className="alertCont" onClick={this.changeClass}>
                        <h3>审计点说明</h3>
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
                    </div>
                    
                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default AlertChart

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
                    </div>
                    
                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default AlertChart

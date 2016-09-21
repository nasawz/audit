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
                    <p className="boxTop">{this.props.title}
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    }
                    </p>
                    <div className="alertCont" onClick={this.changeClass}>
                        { this.props.children }
                    </div>
                    
                </div>
                <div className='alertBottom' onClick={this.closeAlert}></div>
            </div>
        )
    }
})

export default AlertChart

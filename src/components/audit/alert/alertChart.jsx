import React from 'react'
import '../../../style/Alert.less'

const AlertChart = React.createClass({
    getInitialState(){
        return {
            cls:'content',
            show:this.props.show,
        }
    },
    changeClass(){
        this.setState({
            cls:'content content1'
        })
    },
    goFinish(){

    },
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
                   
                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default AlertChart

import React from 'react'
import '../../../style/Alert.less'

const Alert = React.createClass({
    getInitialState(){
        return {
            cls:'content',
            status:true
        }
    },
    changeClass(){
        this.setState({
            cls:'content content1'
        })
    },
    goFinish(){
        this.setState({
            status:false
        })

        setTimeout(function(){
            // alert('111')
        },1000)
    },
    closeAlert(e){
        if(e.target.getAttribute('data-target') == '1'){
            this.props.showFun(false)

        }

    },
    renderContent(){
        if(this.state.status){
            return(
                <sapn>执行</sapn>
            )
        }else{
            return(<img src={require('../../../img/loading.gif')} />)
        }
    },
    render () {
        let H = window.innerHeight+'px'
        let show = 'block'
        if(this.props.show){
            show= 'block'
        }
        return (
            <div className="AlertBox" style={{minHeight:H,display:show}} data-target="1" onClick={this.closeAlert}>
                <div className="box">
                    <p className="boxTop">省数据管理
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className={this.state.cls} onClick={this.changeClass}></div>
                    <a className="pIs" onClick={this.goFinish}>
                        {this.renderContent() }
                    </a>
                </div>
            </div>
        )
    }
})

export default Alert

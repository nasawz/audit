import React from 'react'
import '../../../style/Alert.less'

const Alert = React.createClass({
    getInitialState(){
        return {
            cls:'content',
            show:true,
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
        console.log(e.target.getAttribute('data-target'),'00000',e)
        if(e.target.getAttribute('data-target') == '1'){
            this.setState({
                show:false
            })
        }

    },
    render () {
        let H = window.innerHeight+'px'
        let show = 'none'
        if(this.state.show){
            show= 'block'
        }
        return (
            <div className="AlertBox" style={{minHeight:H,display:show}} data-target="1" onClick={this.closeAlert}>
                <div className="box">
                    <p className="boxTop">省数据管理
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className={this.state.cls} onClick={this.changeClass}></div>
                    <a className="pIs" onClick={this.goFinish}>执行</a>
                </div>
            </div>
        )
    }
})

export default Alert

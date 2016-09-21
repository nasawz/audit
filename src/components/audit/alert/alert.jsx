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
        let This=this
        this.setState({
            status:false
        })

        setTimeout(function(){
            This.props.closeF()
        },1000)
    },
    closeAlert(e){
        e.stopPropagation()
        e.preventDefault()
        this.props.close()

    },

    renderContent(){
        if(this.state.status){
            return(
                <sapn>执行</sapn>
            )
        }else{
            return(<sapn>执行<img src={require('../../../img/loading.png')}/> </sapn> )
        }
    },
    render () {
        let H = window.innerHeight+'px'
        let show = this.props.show?'block':'none'

        return (
            <div className="AlertBox" style={{minHeight:H,display:show}} data-target="1" >
                <div className="box">
                    <p className="boxTop">省数据管理
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className={this.state.cls} onClick={this.changeClass}></div>
                    <a className="pIs" onClick={this.goFinish}>
                        {this.renderContent() }
                    </a>
                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default Alert

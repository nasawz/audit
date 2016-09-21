import React from 'react'
import '../../../style/Alert.less'

let cc7 = require('../../../img/c7.png')
let cc8 = require('../../../img/c8.png')
let ll = require('../../../img/loading.png')

const Alert2 = React.createClass({
    getInitialState(){
        return {
            scls:true,
            status:true,

        }
    },
    changeClass(){
        this.setState({
            scls:false
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
            return(<sapn>执行<img src={ll}/> </sapn> )
        }
    },
    renderImg(){
        let cc = ''
        if(this.state.scls){
            cc = cc7
        }else{
            cc = cc8
        }
        return <img src={cc} />
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
                    <div onClick={this.changeClass} style={{textAlign:'center', marginTop:'14px',marginBottom:'40px'}}>
                        {this.renderImg() }
                    </div>
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

export default Alert2

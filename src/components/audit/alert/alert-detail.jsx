import React from 'react'
import '../../../style/Alert.less'


const AlertDetail = React.createClass({
    closeAlert(e) {
        e.stopPropagation()
        e.preventDefault()
        this.props.close()

    },
    ChangePic(){
        this.setState({
            status:false,
        })
    },
    ChangePic1(){
        this.setState({
            status:true,
        })
    },
    getInitialState(){
        return{
            status:true,
            sta:true
        }
    },
    tabAlert(){
        this.setState({
            sta:false
        })
    },
    renderBtn(){
        if(this.state.sta){
            return (
                <a className="button is-info" style={{ width: '120px', marginRight: '20px' }} onClick={this.tabAlert}>指定人员</a>
            )
        }else{
            return(
                <a className="button is-info" style={{ width: '120px', marginRight: '20px' }} onClick={this.closeAlert}>确定</a>
            )
        }
    },
    renderImg(){
        let content =  <div />
        let pp2 = require('../../../img/p2.jpg')
        let pp3 = require('../../../img/p3.jpg')
        let pp4 = require('../../../img/p4.jpg')
        let cc = ''
        if(this.state.sta){
            if(this.state.status){
                cc = pp2
            }else{
                cc = pp3
            }
        }else{
            cc = pp4
        }

        return <img src={cc} />;
    },
    render () {
        let H = window.innerHeight + 'px'
        let show = this.props.show ? 'block' : 'none'

        return (
            <div className="AlertBox" style={{ minHeight: H, display: show }} data-target="1" >
                <div className="box">
                    <p className="boxTop">{this.props.tit}
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className='flex-middle flex-center' style={{minHeight:'100px',marginTop:'16px',marginBottom:'20px'}}>
                        {this.renderImg() }
                        <div className="aBox">
                            <div className="l" onClick={this.ChangePic}></div>
                            <div className="r" onClick={this.ChangePic1}></div>
                        </div>
                    </div>
                    <div className='flex-center'>
                        <div>
                            {this.renderBtn()}
                        </div>
                    </div>


                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default AlertDetail

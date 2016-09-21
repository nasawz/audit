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
        if(this.state.sta){
            if(this.state.status){
                content = <img src={require('../../../img/p2.jpg')} />
            }else{
                content =  <img src={require('../../../img/p3.jpg')} />
            }
        }else{
            content =  <img src={require('../../../img/p4.jpg')} />
        }

        return content;
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
                    <div className='flex-middle flex-center' style={{minHeight:'100px', margin:'10px'}}>
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

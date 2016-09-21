import React from 'react'
import '../../../style/Alert.less'

const DeleteAlert = React.createClass({
    getInitialState() {
        return {
            status: true
        }
    },
    closeAlert(e) {
        e.stopPropagation()
        e.preventDefault()
        this.props.close()

    },

    renderContent() {
        return (
            <sapn>执行</sapn>
        )
    },
    render() {
        let H = window.innerHeight + 'px'
        let show = this.props.show ? 'block' : 'none'

        return (
            <div className="AlertBox" style={{ minHeight: H, display: show }} data-target="1" >
                <div className="box">
                    <p className="boxTop">提醒
                        <i className="dele" data-target="1" onClick={this.closeAlert}></i>
                    </p>
                    <div className='flex-middle flex-center' style={{minHeight:'100px'}}>是否新建工作组？</div>
                    <div className='flex-center'>
                        <div>
                            <a className="button is-dark" style={{ width: '120px', marginRight: '20px' }} onClick={this.closeAlert}>忽略</a>
                            <a className="button is-info" style={{ width: '120px', marginRight: '20px' }} onClick={this.closeAlert}>删除</a>
                        </div>
                    </div>


                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default DeleteAlert

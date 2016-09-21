import React from 'react'
import '../../../style/Alert.less'

const AlertPrivilege = React.createClass({
    closeAlert(e) {
        e.stopPropagation()
        e.preventDefault()
        this.props.close()

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
                        <img src={require('../../../img/p1.jpg')} />
                    </div>
                    <div className='flex-center'>
                        <div>
                            <a className="button is-info" style={{ width: '120px', marginRight: '20px' }} onClick={this.closeAlert}>确认</a>
                        </div>
                    </div>


                </div>
                <div className='alertBottom' onClick={this.closeAlert}>

                </div>
            </div>
        )
    }
})

export default AlertPrivilege

import React from 'react'
import classNames from 'classnames'

import '../../../style/pan.less'

const Pan = React.createClass({
    changeState(){
        let s = this.state.state
        let ns = 's1'
        if (s=='s1') {
            ns = 's2'
        }
        this.setState({
            state: ns
        })
        if (this.props.onPanChange) {
            this.props.onPanChange(ns)
        }
    },
    getInitialState: function() {
        return {
            state: 's2'
        }
    },
    render () {
        let arrClasses = {
            'arr': true,
            'flex-container': true,
            'flex-center': true,
            'flex-middle': true,
            'arr-transition-s1': this.state.state === 's1',
            'arr-transition-s2': this.state.state === 's2',
        }
        let bgClasses = {
            'flex-container': true,
            'flex-center': true,
            'flex-middle': true,
            'state1':this.state.state === 's1',
            'state2':this.state.state === 's2',
        }
        let ss1 = require('../../../img/pan-s1.png')
        let ss2 = require('../../../img/pan-s2.png')
        let ss = (this.state.state === 's1')?ss1:ss2
        return (
            <div className='pan flex-container flex-center flex-middle'>
                <div className={classNames(bgClasses)}>
                    <img className="panbg flex-container flex-center flex-middle" src={ss}/>
                    <img onClick={this.changeState} className={classNames(arrClasses)} src={require('../../../img/pan-arr.png')}/>
                    <span onClick={this.changeState} >审计线索</span>
                </div>
            </div>
        )
    }
})

export default Pan

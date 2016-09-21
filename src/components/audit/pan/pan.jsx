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
        return (
            <div className='pan flex-container flex-center flex-middle'>
                <div className={classNames(bgClasses)}>
                    <div className={classNames(arrClasses)} onClick={this.changeState}>
                    </div>
                    <span>审计线索</span>
                </div>
            </div>
        )
    }
})

export default Pan

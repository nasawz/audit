import React from 'react'
import '../../../style/map.less'

const Map = React.createClass({
    render () {
        let s1 = require('../../../img/map1.png')
        let s2 = require('../../../img/map2.png')
        let s3 = require('../../../img/map3.png')
        if (this.props.state=='s1') {
            return (
                <div className='map'>
                    <img src={s1} />
                </div>
            )
        }else if (this.props.state=='s2') {
            return (
                <div className='map'>
                    <img src={s2} />
                </div>
            )
        }else{
            return (
                <div className='map'>
                    <img src={s3} />
                </div>
            )
        }
    }
})

export default Map

import React from 'react'
import '../../../style/map.less'

const Map = React.createClass({
    render () {
        let s1 = require('../../../img/map1.png')
        let s2 = require('../../../img/map2.png')
        if (this.props.state=='s1') {
            return (
                <div className='map'>
                    <img src={s1} />
                </div>
            )
        }else{
            return (
                <div className='map'>
                    <img src={s2} />
                </div>
            )
        }
    }
})

export default Map

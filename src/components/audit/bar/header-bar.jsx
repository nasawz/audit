import React from 'react'
import '../../../style/HeaderBar.less'

/**
 * 头部header
 */
const HeaderBar = React.createClass({
    render () {
        return (
            <div className="HeaderBar">
                <div className="logo">
                    <img src="" />
                </div>
                <h1>2016.07.21~08.06 安徽  xxx  离任审计 数据区间： 2015.10~2016.08</h1>
            </div>
        )
    }
})

export default HeaderBar

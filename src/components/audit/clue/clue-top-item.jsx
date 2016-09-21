import React from 'react'
import '../../../style/ClueTopItem.less'

/**
 * 头部header
 */
const ClueTopItem = React.createClass({
    render () {
        let cls = this.props.cls + ' ClueTopItem'
        return (
            <div className={cls}>
                <div className="item">
                    <i className="btnIcon">
                        <img src={require('../../../img/c9.png')} />
                    </i>
                    <p>{this.props.content}</p>
                    <div className="btm">
                        <a href={this.props.link_href}>编辑</a>
                        <a href={this.props.link_href2}>详情</a>
                    </div>
                </div>

            </div>
        )
    }
})

export default ClueTopItem

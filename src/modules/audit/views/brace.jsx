/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'
import SimpleLineChart from 'audit/charts/simple-line-chart.jsx'

import navConf from '../nav-config.js'

const Brace = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Brace')
    },
    render () {
        return (
            <SimpleLineChart status='two'/>
        )
    }
})

export default Brace

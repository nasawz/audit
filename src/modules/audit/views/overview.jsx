/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'

import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'
import StackedBarChart from 'audit/charts/stacked-bar-chart.jsx'

const Overview = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Overview')
    },
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar></SideNavBar>
                    <ContentWapper>
                        <StackedBarChart />
                       
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Overview

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

import navConf from '../nav-config.js'

const Clue = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Clue')
    },
    render () {
        return (
            <div>
                <HeaderBar />
                <div>
                    <SideNavBar>
                            <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                            <SideNavBarItem icon="overview" path={navConf.leftnav[1]}  />
                            <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                            <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                            <SideNavBarItem icon="clue" path={navConf.leftnav[4]} selected />
                            <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                    </SideNavBar>
                    <ContentWapper>
                        {this.props.name} say hello
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Clue

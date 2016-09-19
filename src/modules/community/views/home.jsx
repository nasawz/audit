/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

// import {navigate} from 'react-mini-router'

const Home = React.createClass({
    mixins:[PureRenderDecoratorMixin],
    componentDidMount() {
        this.props.actions.sayHello('home')
    },
    render () {
        return (
            <div>hello {this.props.name}</div>
        )
    }
})

export default Home

/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'

const Home = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    goPost(){
        this.navReplace(['community','home'],{a:'b'})
    },
    componentDidMount() {
        // console.log(this.props.params);
        // console.log(this.props.params);
        this.props.actions.sayHello('Home')
        // let self = this
        // setTimeout(function () {
        //     self.goPost()
        // }, 1000)
    },
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // },
    render () {
        return (
            <div>{this.props.name} say hello</div>
        )
    }
})

export default Home

/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'
import NavigateMixin from '../../common/navigate-mixin.js'

const Post = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    componentDidMount() {
        this.props.actions.sayHello('Post')
    },
    render () {
        return (
            <div>{this.props.name} say hello</div>
        )
    }
})

export default Post

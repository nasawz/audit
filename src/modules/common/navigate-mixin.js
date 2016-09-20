/**
 * create by nasa.wang
 */

import {PropTypes} from 'react'
import {navigate,replaceNavigate} from 'react-mini-router'

import join from 'lodash/join'
import {stringify} from './utils.js'

module.exports = {
    contextTypes: {
        runType: PropTypes.string.isRequired
    },
    generatePath(params,querys){
        if (this.context.runType == 'spa') {
            return '/'+join(params,'/')+'?'+stringify(querys)
        }else{
            return join(params,'-')+'.html?'+stringify(querys)
        }
    },
    navTo(params,querys){
        let path = this.generatePath(params,querys)
        if (this.context.runType == 'spa') {
            navigate(path)
        }else{
            window.location.href = path
        }
    },
    navReplace(params,querys){
        let path = this.generatePath(params,querys)
        if (this.context.runType == 'spa') {
            replaceNavigate(path)
        }else{
            window.location.href = path
        }
    },
}

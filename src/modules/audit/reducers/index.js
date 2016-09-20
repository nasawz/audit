/**
 * create by nasa.wang
 */

import { combineReducers } from 'redux'

// import COMMON from './../modules/common/reducers/common.js'
// import LOGIN from './../modules/login/reducers/login.js'
import AUDIT from './audit.js'



export default function createReducer(asyncReducers) {
    return combineReducers({
        AUDIT,
        ...asyncReducers
    })
}

/**
 * create by nasa.wang
 */

import ActionTypes from '../constants/actionTypes.js'

// import keyBy from 'lodash/keyBy'
// import values from 'lodash/values'
import merge from 'lodash/merge'

const initialState = {
    name: '',
}

export default function AUDIT(state = initialState, action = null) {
    switch (action.type) {
    case ActionTypes.AUDIT_SAY_HELLO:
        return merge({ },state,action)
    default:
        return state
    }
}

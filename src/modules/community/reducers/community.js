/**
 * create by nasa.wang
 */

import ActionTypes from '../constants/actionTypes.js'

// import keyBy from 'lodash/keyBy'
// import values from 'lodash/values'
import merge from 'lodash/merge'

const initialState = {
    rollers: {},
    topics: {
        hasMore: true,
        data:{},
        page: 1
    },
}

export default function COMMUNITY(state = initialState, action = null) {
    switch (action.type) {
    case ActionTypes.COMMUNITY_SAY_HELLO:
        return merge(state, action)
    default :
        return state
    }
}

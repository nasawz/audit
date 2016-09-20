import ActionTypes from '../constants/actionTypes.js'
import request from 'superagent'

export function sayHello(name) {
    return(dispatch=>{
        dispatch({type:ActionTypes.AUDIT_SAY_HELLO, name:name})
        request.get('./')
    })
}

export function sayHello2(name) {
    return(dispatch=>{
        dispatch({type:ActionTypes.AUDIT_SAY_HELLO, name2:name})
        request.get('./')
    })
}

import { camelizeKeys } from 'humps'
import fetch from 'isomorphic-fetch'

export default (baseActionType, url, { method, body } = {}) => (dispatch, getState) => {
    method = method || 'GET'

    dispatch({
        type: `${baseActionType}_START`
    })

    fetch(url, {
        method,
        body
    }).then(res => res.json()).then(res => {
        dispatch({
            type: `${baseActionType}_SUCCESS`,
            payload: camelizeKeys(res)
        })
    })
}

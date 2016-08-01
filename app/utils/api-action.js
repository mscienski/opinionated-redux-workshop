import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'

export function createActionsFromBaseAction(baseActionType) {
    return {
        successAction: `${baseActionType}_SUCCESS`,
        startAction: `${baseActionType}_START`,
        errorAction: `${baseActionType}_ERROR`,
    };
}

export default (baseActionType) => {
    const { successAction, startAction, errorAction } = createActionsFromBaseAction(baseActionType);

    return url => {
        return dispatch => {
            dispatch({
                type: startAction,
            });

            fetch(url)
                .then(res => res.json())
                .then(json => {
                    dispatch({
                        type: successAction,
                        payload: camelizeKeys(json),
                    });
                }, (error) => {
                    dispatch({
                        type: errorAction,
                        error,
                    });
                });
        }
    }
}

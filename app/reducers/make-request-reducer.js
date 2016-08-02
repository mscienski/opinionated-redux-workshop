const initialState = { pending: false, error: false, lastUpdated: null }

const _requestReducer = (state = initialState, action) => {
    if (action.type.endsWith('_START')) {
        return {
            ...state,
            pending: true,
            lastUpdated: Date.now()
        }
    }
    if (action.type.endsWith('_SUCCESS')) {
        return {
            ...state,
            pending: false,
            error: false,
            lastUpdated: Date.now()
        }
    }
    if (action.type.endsWith('_ERROR')) {
        return {
            ...state,
            pending: false,
            error: true,
            lastUpdated: Date.now()
        }
    }
    return state
}

export const makeRequestReducer = (baseActionType) => (state = initialState, action) =>
    action.type.split('_').slice(0, -1).join('_') === baseActionType ?
        _requestReducer(state, action) :
        state

export const makeMultiRequestReducer = (baseActionType) => {
    const requestReducer = makeRequestReducer()

    return (state = {}, action) =>
        action.type.startsWith(baseActionType) ?
            {
                ...state,
                [action.type]: requestReducer(state[action.type], action)
            } :
            state
}

export default (baseActionType, initialState = {}) =>
    (state = initialState, action) => {
        if (!(action.type === `${baseActionType}_SUCCESS`)) return state
        if (Array.isArray(action.payload.data)) {
            return action.payload.data.map(r => ({
                type: r.type,
                id: r.id
            }))
        }
        return {
            type: action.payload.data.type,
            id: action.payload.data.id
        }
    }


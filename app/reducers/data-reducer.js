
const extendModelsCb = (state) => (memo, resource) => {
    const { type, id, relationships } = resource
    memo[type] = memo[type] || { ...state[type] }
    const oldModel = memo[type][id]
    const oldRelationships = oldModel ?
        oldModel.relationships :
        null

    memo[type][id] = {
        ...oldModel,
        ...resource,
        relationships: {
            ...oldRelationships,
            ...relationships
        }
    }
    return memo
}

export default (state = {}, action) => {
    if (!action.type.endsWith('_SUCCESS')) return state
    let { data, included } = action.payload
    let resources = Array.isArray(data) ? data : [data]
    if (included) resources = resources.concat(included)

    const newState = {
        ...state,
        _fetchedAt: Date.now()
    }
    resources.reduce(extendModelsCb(state), newState)

    return newState
}

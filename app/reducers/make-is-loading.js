

export default (baseActionType) => {
    //const errorActionType = actionType + '_ERROR';
    //const successActionType = actionType + '_SUCCESS';
    const startActionType = actionType + '_START';

    return (state = false, action) => {
        if (!action.type.startsWith(baseActionType)) {
            return state;
        }

        if (action.type === startActionType) {
            return true;
        }

        return false
    }

}

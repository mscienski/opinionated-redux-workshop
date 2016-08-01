import { createActionsFromBaseAction } from 'utils/api-action';

export default (baseActionType) => {
    const { successAction, startAction, errorAction }
            = createActionsFromBaseAction(baseActionType);

    return (state = false, action) => {
        if (!action.type.startsWith(baseActionType)) {
            return state;
        }

        switch (action.type) {
            case startAction:
                return true;
            case successAction:
            case errorAction:
                return false;

            default:
                return state;
        }
    }

}

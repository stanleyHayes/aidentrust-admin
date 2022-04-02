import UI_ACTION_TYPES from "./ui-action-types";

const INITIAL_STATE = {
    variant: 'dark',
    path: '/',
    drawerOpen: false
}
const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UI_ACTION_TYPES.CHANGE_URL:
        return {
            ...state,
            path: action.payload
        }
        case UI_ACTION_TYPES.OPEN_DRAWER:
            return {
                ...state,
                drawerOpen: true
            }

        case UI_ACTION_TYPES.CLOSE_DRAWER:
            return {
                ...state,
                drawerOpen: false
            }
        default:
            return state;
    }
}

export const selectUI = state => state.ui;

export default uiReducer;

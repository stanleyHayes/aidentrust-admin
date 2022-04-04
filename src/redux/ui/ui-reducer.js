import UI_ACTION_TYPES from "./ui-action-types";
import {CONSTANTS} from "../../constants/constants";

const themeVariant = localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_THEME_VARIANT_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_THEME_VARIANT_KEY)) : 'dark';

const INITIAL_STATE = {
    themeVariant,
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

        case UI_ACTION_TYPES.TOGGLE_THEME:
            localStorage.setItem(
                CONSTANTS.AIDEN_TRUST_ADMIN_THEME_VARIANT_KEY,
                JSON.stringify(state.themeVariant === 'dark' ? 'light' : 'dark'))
            return {
                ...state,
                themeVariant: state.themeVariant === 'dark' ? 'light' : 'dark'
            }
        default:
            return state;
    }
}

export const selectUI = state => state.ui;

export default uiReducer;

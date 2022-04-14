import {ADMINS_ACTION_TYPES} from "./admin-action-types";

const INITIAL_STATE = {
    admins: [],
    adminDetail: {},
    adminLoading: false,
    adminError: false,
    totalAdmins: 0
}
const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADMINS_ACTION_TYPES.GET_ADMINS_REQUEST:
            return {
                ...state,
                adminError: null,
                adminLoading: true
            }

        case ADMINS_ACTION_TYPES.GET_ADMINS_SUCCESS:
            return {
                ...state,
                adminError: null,
                adminLoading: false,
                admins: action.payload.data,
                totalAdmins: action.payload.count
            }

        case ADMINS_ACTION_TYPES.GET_ADMINS_FAIL:
            return {
                ...state,
                adminError: action.payload,
                adminLoading: false
            }

        default:
            return state;
    }
}

export const selectAdmin = state => state.admin;

export default adminReducer;

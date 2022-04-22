import {USERS_ACTION_TYPES} from "./users-action-types";

const INITIAL_STATE = {
    users: [],
    userLoading: false,
    userError: null,
    totalUsers: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case USERS_ACTION_TYPES.GET_USERS_REQUEST:
            return {
                ...state,
                userError: null,
                userLoading: true
            }

        case USERS_ACTION_TYPES.GET_USERS_SUCCESS:
            return {
                ...state,
                userError: null,
                userLoading: false,
                users: action.payload.data,
                totalUsers: action.payload.count
            }

        case USERS_ACTION_TYPES.GET_USERS_FAIL:
            return {
                ...state,
                userError: action.payload,
                userLoading: false
            }

        default:
            return state;
    }
}

export const selectUser = state => state.user;

export default userReducer;

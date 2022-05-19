import {USERS_ACTION_TYPES} from "./users-action-types";

const INITIAL_STATE = {
    users: [],
    userLoading: false,
    userError: null,
    totalUsers: 0,
    userDetail: null,
    bankAccount: null,
    transactions: [],
    request: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

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


        case USERS_ACTION_TYPES.GET_USER_REQUEST:
            return {
                ...state,
                userError: null,
                userLoading: true
            }

        case USERS_ACTION_TYPES.GET_USER_SUCCESS:
            return {
                ...state,
                userError: null,
                userLoading: false,
                userDetail: action.payload.data,
                bankAccount: action.payload.bankAccount,
                transactions: action.payload.transactions,
                request: action.payload.request
            }

        case USERS_ACTION_TYPES.GET_USER_FAIL:
            return {
                ...state,
                userError: action.payload,
                userLoading: false
            }


        case USERS_ACTION_TYPES.UPDATE_USER_REQUEST:
            return {
                ...state,
                userError: null,
                userLoading: true
            }

        case USERS_ACTION_TYPES.UPDATE_USER_SUCCESS:
            return {
                ...state,
                userError: null,
                userLoading: false,
                users: [...state.users.map(user => {
                    if(user._id === action.payload._id) return action.payload;
                    return user;
                })]
            }

        case USERS_ACTION_TYPES.UPDATE_USER_FAIL:
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

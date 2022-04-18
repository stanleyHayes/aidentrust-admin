import {AUTH_ACTION_TYPES} from "./authentication-action-types";

const INITIAL_STATE = {
    authData: {},
    authLoading: false,
    authError: null,
    token: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ACTION_TYPES.SIGN_IN_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.SIGN_IN_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }



        case AUTH_ACTION_TYPES.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.LOGOUT_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.LOGOUT_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.LOGOUT_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.GET_PROFILE_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.GET_PROFILE_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.GET_PROFILE_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }

        default:
            return state;
    }
}

export const selectAuth = state => state.auth

export default authReducer;

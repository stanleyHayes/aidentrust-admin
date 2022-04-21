import {AUTH_ACTION_TYPES} from "./authentication-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const signInRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_REQUEST
    }
}

const signInSuccess = (data, token, message) => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: {data, token, message}
    }
}

const signInFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const signIn = (user, navigate) => {
    return async dispatch => {
        try {
            dispatch(signInRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/login`,
                data: user
            });
            const {data, token, message} = response.data;
            dispatch(signInSuccess(data, token, message));
            navigate('/');
            localStorage.setItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_TOKEN_KEY, token);
            localStorage.setItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_DATA_KEY, JSON.stringify(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(signInFail(message));
        }
    }
}


const forgotPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_REQUEST
    }
}

const forgotPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const forgotPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_FAIL,
        payload: message
    }
}

const forgotPassword = user => {
    return async dispatch => {
        try {
            dispatch(forgotPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/forgot-password`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(forgotPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(forgotPasswordFail(message));
        }
    }
}


const resetPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST
    }
}

const resetPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const resetPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_FAIL,
        payload: message
    }
}

const resetPassword = user => {
    return async dispatch => {
        try {
            dispatch(resetPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/reset-password`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(resetPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(resetPasswordFail(message));
        }
    }
}


const changePasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_REQUEST
    }
}

const changePasswordSuccess = (data, message) => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_SUCCESS,
        payload: {data, message}
    }
}

const changePasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_FAIL,
        payload: message
    }
}

const changePassword = (user, token) => {
    return async dispatch => {
        try {
            dispatch(changePasswordRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/password/change`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, message} = response.data;
            dispatch(changePasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(changePasswordFail(message));
        }
    }
}


const updateProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_REQUEST
    }
}

const updateProfileSuccess = (data) => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
        payload: data
    }
}

const updateProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_FAIL,
        payload: message
    }
}

const updateProfile = (user, token, navigate) => {
    return async dispatch => {
        try {
            dispatch(updateProfileRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateProfileSuccess(data));
            navigate('/profile');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateProfileFail(message));
        }
    }
}


const logoutRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_FAIL
    }
}

const logoutSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_SUCCESS,
        payload: {data, token}
    }
}

const logoutFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const logout = user => {
    return async dispatch => {
        try {
            dispatch(logoutRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/logout`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(logoutSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(logoutFail(message));
        }
    }
}


const getProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_REQUEST
    }
}

const getProfileSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_SUCCESS,
        payload: {data, token}
    }
}

const getProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const getProfile = (token) => {
    return async dispatch => {
        try {
            dispatch(getProfileRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getProfileSuccess(data, token));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getProfileFail(message));
        }
    }
}


const verifyAccountRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST
    }
}

const verifyAccountSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS,
        payload: {data, token}
    }
}

const verifyAccountFail = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAIL,
        payload: message
    }
}

const verifyAccount = (user, token, navigate) => {
    return async dispatch => {
        try {
            dispatch(verifyAccountRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile/verify/${token}`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(verifyAccountSuccess(data, message));
            navigate('/auth/verify/acknowledgment/success');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(verifyAccountFail(message));
        }
    }
}


const logoutAllRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_REQUEST
    }
}

const logoutAllSuccess = message => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_SUCCESS,
        payload: message
    }
}

const logoutAllFail = message => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_FAIL,
        payload: message
    }
}

const logoutAll = navigate => {
    return async dispatch => {
        try {
            dispatch(logoutAllRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/auth/logoutAll`
            });
            const {message} = response.data;
            dispatch(logoutAllSuccess(message));
            navigate('/auth/login');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(logoutAllFail(message));
        }
    }
}


export const AUTH_ACTION_CREATORS = {
    logout,
    getProfile,
    verifyAccount,
    signIn,
    changePassword,
    updateProfile,
    resetPassword,
    forgotPassword,
    logoutAll
};

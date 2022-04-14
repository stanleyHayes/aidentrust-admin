import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {USERS_ACTION_TYPES} from "./users-action-types";

const createUserRequest = () => {
    return {
        type: USERS_ACTION_TYPES.CREATE_USER_REQUEST
    }
}

const createUserSuccess = (data) => {
    return {
        type: USERS_ACTION_TYPES.CREATE_USER_SUCCESS,
        payload: data
    }
}

const createUserFailure = message => {
    return {
        type: USERS_ACTION_TYPES.CREATE_USER_FAIL,
        payload: message
    }
}

const createUser = (user, token) => {
    return async dispatch => {
        try {
            dispatch(createUserRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/users`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createUserSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createUserFailure(message));
        }
    }
}


const getUserRequest = () => {
    return {
        type: USERS_ACTION_TYPES.GET_USER_REQUEST
    }
}

const getUserSuccess = (data) => {
    return {
        type: USERS_ACTION_TYPES.GET_USER_SUCCESS,
        payload: data
    }
}

const getUserFailure = message => {
    return {
        type: USERS_ACTION_TYPES.GET_USER_FAIL,
        payload: message
    }
}

const getUser = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getUserRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/users/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getUserSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getUserFailure(message));
        }
    }
}


const getUsersRequest = () => {
    return {
        type: USERS_ACTION_TYPES.GET_USERS_REQUEST
    }
}

const getUsersSuccess = (data, count) => {
    return {
        type: USERS_ACTION_TYPES.GET_USERS_SUCCESS,
        payload: {data, count}
    }
}

const getUsersFailure = message => {
    return {
        type: USERS_ACTION_TYPES.GET_USERS_FAIL,
        payload: message
    }
}

const getUsers = token => {
    return async dispatch => {
        try {
            dispatch(getUsersRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/users`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getUsersSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getUsersFailure(message));
        }
    }
}


const updateUserRequest = () => {
    return {
        type: USERS_ACTION_TYPES.UPDATE_USER_REQUEST
    }
}

const updateUserSuccess = (data) => {
    return {
        type: USERS_ACTION_TYPES.UPDATE_USER_SUCCESS,
        payload: data
    }
}

const updateUserFailure = message => {
    return {
        type: USERS_ACTION_TYPES.UPDATE_USER_FAIL,
        payload: message
    }
}

const updateUser = (user, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateUserRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/users/${ID}`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateUserSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateUserFailure(message));
        }
    }
}


const deleteUserRequest = () => {
    return {
        type: USERS_ACTION_TYPES.DELETE_USER_REQUEST
    }
}

const deleteUserSuccess = (data) => {
    return {
        type: USERS_ACTION_TYPES.DELETE_USER_SUCCESS,
        payload: data
    }
}

const deleteUserFailure = message => {
    return {
        type: USERS_ACTION_TYPES.DELETE_USER_FAIL,
        payload: message
    }
}

const deleteUser = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteUserRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/users/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteUserSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteUserFailure(message));
        }
    }
}


export const USER_ACTION_CREATORS = {createUser, deleteUser, updateUser, getUsers, getUser};

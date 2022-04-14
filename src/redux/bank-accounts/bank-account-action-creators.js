import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {ADMINS_ACTION_TYPES} from "./admin-action-types";

const createAdminRequest = () => {
    return {
        type: ADMINS_ACTION_TYPES.CREATE_ADMIN_REQUEST
    }
}

const createAdminSuccess = (data) => {
    return {
        type: ADMINS_ACTION_TYPES.CREATE_ADMIN_SUCCESS,
        payload: data
    }
}

const createAdminFailure = message => {
    return {
        type: ADMINS_ACTION_TYPES.CREATE_ADMIN_FAIL,
        payload: message
    }
}

const createAdmin = (admin, token) => {
    return async dispatch => {
        try {
            dispatch(createAdminRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins`,
                data: admin,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createAdminFailure(message));
        }
    }
}


const getAdminRequest = () => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMIN_REQUEST
    }
}

const getAdminSuccess = (data) => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMIN_SUCCESS,
        payload: data
    }
}

const getAdminFailure = message => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMIN_FAIL,
        payload: message
    }
}

const getAdmin = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getAdminRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getAdminFailure(message));
        }
    }
}


const getAdminsRequest = () => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMINS_REQUEST
    }
}

const getAdminsSuccess = (data, count) => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMINS_SUCCESS,
        payload: {data, count}
    }
}

const getAdminsFailure = admins => {
    return {
        type: ADMINS_ACTION_TYPES.GET_ADMINS_FAIL,
        payload: admins
    }
}

const getAdmins = token => {
    return async dispatch => {
        try {
            dispatch(getAdminsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getAdminsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getAdminsFailure(message));
        }
    }
}


const updateAdminRequest = () => {
    return {
        type: ADMINS_ACTION_TYPES.UPDATE_ADMIN_REQUEST
    }
}

const updateAdminSuccess = (data) => {
    return {
        type: ADMINS_ACTION_TYPES.UPDATE_ADMIN_SUCCESS,
        payload: data
    }
}

const updateAdminFailure = message => {
    return {
        type: ADMINS_ACTION_TYPES.UPDATE_ADMIN_FAIL,
        payload: message
    }
}

const updateAdmin = (admin, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateAdminRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${ID}`,
                data: admin,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateAdminFailure(message));
        }
    }
}


const deleteAdminRequest = () => {
    return {
        type: ADMINS_ACTION_TYPES.DELETE_ADMIN_REQUEST
    }
}

const deleteAdminSuccess = (data) => {
    return {
        type: ADMINS_ACTION_TYPES.DELETE_ADMIN_SUCCESS,
        payload: data
    }
}

const deleteAdminFailure = message => {
    return {
        type: ADMINS_ACTION_TYPES.DELETE_ADMIN_FAIL,
        payload: message
    }
}

const deleteAdmin = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteAdminRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteAdminFailure(message));
        }
    }
}


export const ADMIN_ACTION_CREATORS = {createAdmin, deleteAdmin, updateAdmin, getAdmins, getAdmin};

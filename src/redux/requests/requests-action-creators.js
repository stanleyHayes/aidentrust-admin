import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {REQUESTS_ACTION_TYPES} from "./requests-action-types";

const createRequestRequest = () => {
    return {
        type: REQUESTS_ACTION_TYPES.CREATE_REQUEST_REQUEST
    }
}

const createRequestSuccess = (data) => {
    return {
        type: REQUESTS_ACTION_TYPES.CREATE_REQUEST_SUCCESS,
        payload: data
    }
}

const createRequestFailure = message => {
    return {
        type: REQUESTS_ACTION_TYPES.CREATE_REQUEST_FAIL,
        payload: message
    }
}

const createRequest = (request, token) => {
    return async dispatch => {
        try {
            dispatch(createRequestRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests`,
                data: request,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createRequestSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createRequestFailure(message));
        }
    }
}


const getRequestRequest = () => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUEST_REQUEST
    }
}

const getRequestSuccess = (data) => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUEST_SUCCESS,
        payload: data
    }
}

const getRequestFailure = message => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUEST_FAIL,
        payload: message
    }
}

const getRequest = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getRequestRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getRequestSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getRequestFailure(message));
        }
    }
}


const getRequestsRequest = () => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUESTS_REQUEST
    }
}

const getRequestsSuccess = (data, count) => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUESTS_SUCCESS,
        payload: {data, count}
    }
}

const getRequestsFailure = requests => {
    return {
        type: REQUESTS_ACTION_TYPES.GET_REQUESTS_FAIL,
        payload: requests
    }
}

const getRequests = token => {
    return async dispatch => {
        try {
            dispatch(getRequestsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getRequestsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getRequestsFailure(message));
        }
    }
}


const updateRequestRequest = () => {
    return {
        type: REQUESTS_ACTION_TYPES.UPDATE_REQUEST_REQUEST
    }
}

const updateRequestSuccess = (data) => {
    return {
        type: REQUESTS_ACTION_TYPES.UPDATE_REQUEST_SUCCESS,
        payload: data
    }
}

const updateRequestFailure = message => {
    return {
        type: REQUESTS_ACTION_TYPES.UPDATE_REQUEST_FAIL,
        payload: message
    }
}

const updateRequest = (request, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateRequestRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/${ID}`,
                data: request,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateRequestSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateRequestFailure(message));
        }
    }
}


const deleteRequestRequest = () => {
    return {
        type: REQUESTS_ACTION_TYPES.DELETE_REQUEST_REQUEST
    }
}

const deleteRequestSuccess = (data) => {
    return {
        type: REQUESTS_ACTION_TYPES.DELETE_REQUEST_SUCCESS,
        payload: data
    }
}

const deleteRequestFailure = message => {
    return {
        type: REQUESTS_ACTION_TYPES.DELETE_REQUEST_FAIL,
        payload: message
    }
}

const deleteRequest = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteRequestRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteRequestSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteRequestFailure(message));
        }
    }
}


export const REQUEST_ACTION_CREATORS = {createRequest, deleteRequest, updateRequest, getRequests, getRequest};

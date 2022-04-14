import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {INFORMATION_ACTION_TYPES} from "./information-action-types";


const getInformationRequest = () => {
    return {
        type: INFORMATION_ACTION_TYPES.GET_INFORMATION_REQUEST
    }
}

const getInformationSuccess = (data) => {
    return {
        type: INFORMATION_ACTION_TYPES.GET_INFORMATION_SUCCESS,
        payload: data
    }
}

const getInformationFailure = message => {
    return {
        type: INFORMATION_ACTION_TYPES.GET_INFORMATION_FAIL,
        payload: message
    }
}

const getInformation = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getInformationRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/information`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getInformationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getInformationFailure(message));
        }
    }
}


const updateInformationRequest = () => {
    return {
        type: INFORMATION_ACTION_TYPES.UPDATE_INFORMATION_REQUEST
    }
}

const updateInformationSuccess = (data) => {
    return {
        type: INFORMATION_ACTION_TYPES.UPDATE_INFORMATION_SUCCESS,
        payload: data
    }
}

const updateInformationFailure = message => {
    return {
        type: INFORMATION_ACTION_TYPES.UPDATE_INFORMATION_FAIL,
        payload: message
    }
}

const updateInformation = (information, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateInformationRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/information`,
                data: information,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateInformationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateInformationFailure(message));
        }
    }
}


export const INFORMATION_ACTION_CREATORS = {updateInformation, getInformation};

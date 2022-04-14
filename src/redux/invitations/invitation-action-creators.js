import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {INVITATIONS_ACTION_TYPES} from "./invitation-action-types";

const createInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_REQUEST
    }
}

const createInvitationSuccess = (data) => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_SUCCESS,
        payload: data
    }
}

const createInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_FAIL,
        payload: message
    }
}

const createInvitation = (invitation, token) => {
    return async dispatch => {
        try {
            dispatch(createInvitationRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/invitations`,
                data: invitation,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createInvitationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createInvitationFailure(message));
        }
    }
}


const getInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_REQUEST
    }
}

const getInvitationSuccess = (data) => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_SUCCESS,
        payload: data
    }
}

const getInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_FAIL,
        payload: message
    }
}

const getInvitation = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getInvitationRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/invitations/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getInvitationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getInvitationFailure(message));
        }
    }
}


const getInvitationsRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_REQUEST
    }
}

const getInvitationsSuccess = (data, count) => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_SUCCESS,
        payload: {data, count}
    }
}

const getInvitationsFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_FAIL,
        payload: message
    }
}

const getInvitations = token => {
    return async dispatch => {
        try {
            dispatch(getInvitationsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/invitations`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getInvitationsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getInvitationsFailure(message));
        }
    }
}


const updateInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_REQUEST
    }
}

const updateInvitationSuccess = (data) => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_SUCCESS,
        payload: data
    }
}

const updateInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_FAIL,
        payload: message
    }
}

const updateInvitation = (invitation, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateInvitationRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/invitations/${ID}`,
                data: invitation,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateInvitationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateInvitationFailure(message));
        }
    }
}


const deleteInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_REQUEST
    }
}

const deleteInvitationSuccess = (data) => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_SUCCESS,
        payload: data
    }
}

const deleteInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_FAIL,
        payload: message
    }
}

const deleteInvitation = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteInvitationRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/invitations/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteInvitationSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteInvitationFailure(message));
        }
    }
}


export const INVITATION_ACTION_CREATORS = {createInvitation, deleteInvitation, updateInvitation, getInvitations, getInvitation};

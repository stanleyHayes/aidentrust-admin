import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {FUNDS_ACTION_TYPES} from "./funds-action-types";

const createFundRequest = () => {
    return {
        type: FUNDS_ACTION_TYPES.CREATE_FUND_REQUEST
    }
}

const createFundSuccess = (data) => {
    return {
        type: FUNDS_ACTION_TYPES.CREATE_FUND_SUCCESS,
        payload: data
    }
}

const createFundFailure = message => {
    return {
        type: FUNDS_ACTION_TYPES.CREATE_FUND_FAIL,
        payload: message
    }
}

const createFund = (fund, token) => {
    return async dispatch => {
        try {
            dispatch(createFundRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/funds`,
                data: fund,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createFundSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createFundFailure(message));
        }
    }
}


const getFundRequest = () => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUND_REQUEST
    }
}

const getFundSuccess = (data) => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUND_SUCCESS,
        payload: data
    }
}

const getFundFailure = message => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUND_FAIL,
        payload: message
    }
}

const getFund = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getFundRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/funds/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getFundSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getFundFailure(message));
        }
    }
}


const getFundsRequest = () => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUNDS_REQUEST
    }
}

const getFundsSuccess = (data, count) => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUNDS_SUCCESS,
        payload: {data, count}
    }
}

const getFundsFailure = funds => {
    return {
        type: FUNDS_ACTION_TYPES.GET_FUNDS_FAIL,
        payload: funds
    }
}

const getFunds = token => {
    return async dispatch => {
        try {
            dispatch(getFundsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/funds`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getFundsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getFundsFailure(message));
        }
    }
}


const updateFundRequest = () => {
    return {
        type: FUNDS_ACTION_TYPES.UPDATE_FUND_REQUEST
    }
}

const updateFundSuccess = (data) => {
    return {
        type: FUNDS_ACTION_TYPES.UPDATE_FUND_SUCCESS,
        payload: data
    }
}

const updateFundFailure = message => {
    return {
        type: FUNDS_ACTION_TYPES.UPDATE_FUND_FAIL,
        payload: message
    }
}

const updateFund = (fund, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateFundRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/funds/${ID}`,
                data: fund,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateFundSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateFundFailure(message));
        }
    }
}


const deleteFundRequest = () => {
    return {
        type: FUNDS_ACTION_TYPES.DELETE_FUND_REQUEST
    }
}

const deleteFundSuccess = (data) => {
    return {
        type: FUNDS_ACTION_TYPES.DELETE_FUND_SUCCESS,
        payload: data
    }
}

const deleteFundFailure = message => {
    return {
        type: FUNDS_ACTION_TYPES.DELETE_FUND_FAIL,
        payload: message
    }
}

const deleteFund = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteFundRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/funds/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteFundSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteFundFailure(message));
        }
    }
}


export const FUND_ACTION_CREATORS = {createFund, deleteFund, updateFund, getFunds, getFund};

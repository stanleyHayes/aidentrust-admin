import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {TRANSACTIONS_ACTION_TYPES} from "./transaction-action-types";

const createTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_REQUEST
    }
}

const createTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const createTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_FAIL,
        payload: message
    }
}

const createTransaction = (transaction, token) => {
    return async dispatch => {
        try {
            dispatch(createTransactionRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions`,
                data: transaction,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createTransactionFailure(message));
        }
    }
}


const getTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_REQUEST
    }
}

const getTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_SUCCESS,
        payload: data
    }
}

const getTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_FAIL,
        payload: message
    }
}

const getTransaction = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getTransactionRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTransactionFailure(message));
        }
    }
}


const getTransactionsRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_REQUEST
    }
}

const getTransactionsSuccess = (data, count) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_SUCCESS,
        payload: {data, count}
    }
}

const getTransactionsFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_FAIL,
        payload: message
    }
}

const getTransactions = token => {
    return async dispatch => {
        try {
            dispatch(getTransactionsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getTransactionsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTransactionsFailure(message));
        }
    }
}


const updateTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_REQUEST
    }
}

const updateTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const updateTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_FAIL,
        payload: message
    }
}

const updateTransaction = (transaction, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateTransactionRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions/${ID}`,
                data: transaction,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateTransactionFailure(message));
        }
    }
}


const deleteTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_REQUEST
    }
}

const deleteTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const deleteTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_FAIL,
        payload: message
    }
}

const deleteTransaction = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteTransactionRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteTransactionFailure(message));
        }
    }
}


const sendMoneyRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.SEND_MONEY_REQUEST
    }
}

const sendMoneySuccess = (data) => {
    console.log(data)
    return {
        type: TRANSACTIONS_ACTION_TYPES.SEND_MONEY_SUCCESS,
        payload: data
    }
}

const sendMoneyFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.SEND_MONEY_FAIL,
        payload: message
    }
}

const sendMoney = (transaction, token, handleClose, resetFields) => {
    return async dispatch => {
        try {
            dispatch(sendMoneyRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions/transfer`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: transaction
            });
            const {data} = response.data;
            dispatch(sendMoneySuccess(data));
            handleClose();
            resetFields();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(sendMoneyFailure(message));
            handleClose();
        }
    }
}


export const TRANSACTION_ACTION_CREATORS = {
    createTransaction,
    deleteTransaction,
    updateTransaction,
    getTransactions,
    getTransaction,
    sendMoney
};

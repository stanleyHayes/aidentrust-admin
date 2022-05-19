import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {BANK_ACCOUNTS_ACTION_TYPES} from "./bank-account-action-types";

const createBankAccountRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.CREATE_BANK_ACCOUNT_REQUEST
    }
}

const createBankAccountSuccess = (data) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.CREATE_BANK_ACCOUNT_SUCCESS,
        payload: data
    }
}

const createBankAccountFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.CREATE_BANK_ACCOUNT_FAIL,
        payload: message
    }
}

const createBankAccount = (bankAccount, token) => {
    return async dispatch => {
        try {
            dispatch(createBankAccountRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts`,
                data: bankAccount,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createBankAccountSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createBankAccountFailure(message));
        }
    }
}


const getBankAccountRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNT_REQUEST
    }
}

const getBankAccountSuccess = (data) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNT_SUCCESS,
        payload: data
    }
}

const getBankAccountFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNT_FAIL,
        payload: message
    }
}

const getBankAccount = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getBankAccountRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getBankAccountSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getBankAccountFailure(message));
        }
    }
}


const getBankAccountsRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_REQUEST
    }
}

const getBankAccountsSuccess = (data, count) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_SUCCESS,
        payload: {data, count}
    }
}

const getBankAccountsFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_FAIL,
        payload: message
    }
}

const getBankAccounts = token => {
    return async dispatch => {
        try {
            dispatch(getBankAccountsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getBankAccountsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getBankAccountsFailure(message));
        }
    }
}


const updateBankAccountRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.UPDATE_BANK_ACCOUNT_REQUEST
    }
}

const updateBankAccountSuccess = (data) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.UPDATE_BANK_ACCOUNT_SUCCESS,
        payload: data
    }
}

const updateBankAccountFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.UPDATE_BANK_ACCOUNT_FAIL,
        payload: message
    }
}

const updateBankAccount = (bankAccount, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateBankAccountRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts/${ID}`,
                data: bankAccount,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateBankAccountSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateBankAccountFailure(message));
        }
    }
}


const deleteBankAccountRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DELETE_BANK_ACCOUNT_REQUEST
    }
}

const deleteBankAccountSuccess = (data) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DELETE_BANK_ACCOUNT_SUCCESS,
        payload: data
    }
}

const deleteBankAccountFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DELETE_BANK_ACCOUNT_FAIL,
        payload: message
    }
}

const deleteBankAccount = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteBankAccountRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteBankAccountSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteBankAccountFailure(message));
        }
    }
}


const depositMoneyBankAccountRequest = () => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DEPOSIT_MONEY_BANK_ACCOUNT_REQUEST
    }
}

const depositMoneyBankAccountSuccess = (data) => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DEPOSIT_MONEY_BANK_ACCOUNT_SUCCESS,
        payload: data
    }
}

const depositMoneyBankAccountFailure = message => {
    return {
        type: BANK_ACCOUNTS_ACTION_TYPES.DEPOSIT_MONEY_BANK_ACCOUNT_FAIL,
        payload: message
    }
}

const depositMoneyBankAccount = (information, ID, token) => {
    return async dispatch => {
        try {
            dispatch(depositMoneyBankAccountRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/bank-accounts/${ID}/deposit`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: information
            });
            const {data} = response.data;
            dispatch(depositMoneyBankAccountSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(depositMoneyBankAccountFailure(message));
        }
    }
}


export const BANK_ACCOUNT_ACTION_CREATORS = {
    depositMoneyBankAccount,
    createBankAccount,
    deleteBankAccount,
    updateBankAccount,
    getBankAccounts,
    getBankAccount
};

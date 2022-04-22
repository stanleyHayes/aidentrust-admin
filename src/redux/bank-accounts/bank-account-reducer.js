import {BANK_ACCOUNTS_ACTION_TYPES} from "./bank-account-action-types";

const INITIAL_STATE = {
    bankAccounts: [],
    bankAccountDetail:  null,
    bankAccountError: null,
    bankAccountLoading: true,
    totalBankAccounts: 0
}

const bankAccountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_REQUEST:
            return {
                ...state,
                bankAccountError: null,
                bankAccountLoading: true
            }

        case BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_SUCCESS:
            return {
                ...state,
                bankAccountError: null,
                bankAccountLoading: false,
                bankAccounts: action.payload.data,
                totalBankAccounts: action.payload.count
            }

        case BANK_ACCOUNTS_ACTION_TYPES.GET_BANK_ACCOUNTS_FAIL:
            return {
                ...state,
                bankAccountError: action.payload,
                bankAccountLoading: false
            }

        default:
            return state;
    }
}

export const selectBankAccount = state => state.bankAccount;

export default bankAccountReducer;

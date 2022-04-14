import {transactions} from "./information-data";
import {BANK_ACCOUNTS_ACTION_TYPES} from "../bank-accounts/bank-account-action-types";

const INITIAL_STATE = {
    information: [...transactions],
    transactionDetail: {},
    transactionLoading: false,
    transactionError: false,
    totalTransactions: transactions.length
}
const informationReducer = (state = INITIAL_STATE, action) => {
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

export const selectTransaction = state => state.transaction;

export default informationReducer;

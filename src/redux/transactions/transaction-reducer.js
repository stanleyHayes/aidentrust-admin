import {TRANSACTIONS_ACTION_TYPES} from "./transaction-action-types";

const INITIAL_STATE = {
    transactions: [],
    transactionDetail: {},
    transactionLoading: false,
    transactionError: false,
    totalTransactions: 0
}
const transactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_REQUEST:
            return {
                ...state,
                transactionError: null,
                transactionLoading: true
            }

        case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactionError: null,
                transactionLoading: false,
                transactions: action.payload.data,
                totalTransactions: action.payload.count
            }

        case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_FAIL:
            return {
                ...state,
                transactionError: action.payload,
                transactionLoading: false
            }

        default:
            return state;
    }
}

export const selectTransaction = state => state.transaction;

export default transactionReducer;

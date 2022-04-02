import {transactions} from "./invitation-data";

const INITIAL_STATE = {
    transactions: [...transactions],
    transactionDetail: {},
    transactionLoading: false,
    transactionError: false,
    totalTransactions: transactions.length
}
const invitationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectTransaction = state => state.transaction;

export default invitationReducer;

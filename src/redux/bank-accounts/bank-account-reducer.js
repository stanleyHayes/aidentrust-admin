import {bankAccounts} from "./bank-account-data";

const INITIAL_STATE = {
    bankAccounts: [...bankAccounts],
    bankAccountDetail: {},
    bankAccountLoading: false,
    bankAccountError: false,
    totalBankAccounts: bankAccounts.length
}
const bankAccountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectBankAccount = state => state.bankAccount;

export default bankAccountReducer;

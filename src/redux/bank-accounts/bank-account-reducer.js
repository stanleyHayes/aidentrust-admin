import {bankAccounts} from "./bank-account-data";

const INITIAL_STATE = {
    bankAccounts: [...bankAccounts],
    bankAccountDetail:  {
        user: {
            firstName: 'Stanley',
            lastName: 'Hayford',
            image: '',
            email: 'hayfordstanley@gmail.com.com',
            phoneNumber: '+233270048319'
        },
        number: '2222222222',
        balance: 120000,
        type: 'Checkings',
        status: 'Pending',
        updatedAt: new Date(2020, 8, 29)
    },
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

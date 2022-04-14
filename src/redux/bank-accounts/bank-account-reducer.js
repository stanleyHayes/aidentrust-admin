import {BANK_ACCOUNTS_ACTION_TYPES} from "./bank-account-action-types";

const INITIAL_STATE = {
    bankAccounts: [],
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
    bankAccountError: null,
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

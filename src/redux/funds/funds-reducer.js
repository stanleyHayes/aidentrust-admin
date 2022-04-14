import {FUNDS_ACTION_TYPES} from "./funds-action-types";

const INITIAL_STATE = {
    funds: [],
    fundDetail: {},
    fundLoading: false,
   fundError: false,
    totalFunds: 0
}
const fundsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FUNDS_ACTION_TYPES.GET_FUNDS_REQUEST:
            return {
                ...state,
                fundError: null,
                fundLoading: true
            }

        case FUNDS_ACTION_TYPES.GET_FUNDS_SUCCESS:
            return {
                ...state,
                fundError: null,
                fundLoading: false,
                funds: action.payload.data,
                totalBankAccounts: action.payload.count
            }

        case FUNDS_ACTION_TYPES.GET_FUNDS_FAIL:
            return {
                ...state,
                fundError: action.payload,
                fundLoading: false
            }


        default:
            return state;
    }
}

export const selectFund = state => state.fund;

export default fundsReducer;

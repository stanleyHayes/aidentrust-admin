import {funds} from "./funds-data";

const INITIAL_STATE = {
    funds: [...funds],
    fundDetail: {},
    fundLoading: false,
   fundError: false,
    totalFunds: funds.length
}
const fundsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectFund = state => state.fund;

export default fundsReducer;

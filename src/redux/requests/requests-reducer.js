import {requests} from "./requests-data";

const INITIAL_STATE = {
    requests: [...requests],
    requestDetail: {},
    requestLoading: false,
    requestError: false,
    totalRequests: requests.length
}
const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;

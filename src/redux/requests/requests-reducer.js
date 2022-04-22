import {REQUESTS_ACTION_TYPES} from "./requests-action-types";

const INITIAL_STATE = {
    requests: [],
    requestDetail: {},
    requestLoading: false,
    requestError: false,
    totalRequests: 0
}
const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUESTS_ACTION_TYPES.GET_REQUESTS_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUESTS_ACTION_TYPES.GET_REQUESTS_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requests: action.payload.data,
                totalRequests: action.payload.count
            }

        case REQUESTS_ACTION_TYPES.GET_REQUESTS_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false
            }

        case REQUESTS_ACTION_TYPES.CREATE_REQUEST_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUESTS_ACTION_TYPES.CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requests: [...state.requests, action.payload],
                totalRequests: state.totalRequests + 1
            }

        case REQUESTS_ACTION_TYPES.CREATE_REQUEST_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false
            }


        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;

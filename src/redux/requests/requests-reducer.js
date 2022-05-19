import {REQUESTS_ACTION_TYPES} from "./requests-action-types";

const INITIAL_STATE = {
    requests: [],
    requestDetail: {},
    requestLoading: false,
    requestError: null,
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

        case REQUESTS_ACTION_TYPES.APPROVE_REQUEST_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUESTS_ACTION_TYPES.APPROVE_REQUEST_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requests: [...state.requests.map(request => {
                    if(request._id === action.payload._id) return action.payload;
                    return request
                })],
                requestDetail: state.requests.find(request => request._id === action.payload._id)
            }

        case REQUESTS_ACTION_TYPES.APPROVE_REQUEST_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false
            }


        case REQUESTS_ACTION_TYPES.REVOKE_REQUEST_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUESTS_ACTION_TYPES.REVOKE_REQUEST_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requests: [...state.requests.map(request => {
                    if(request._id === action.payload._id) return action.payload;
                    return request
                })],
                requestDetail: state.requests.find(request => request._id === action.payload._id)
            }

        case REQUESTS_ACTION_TYPES.REVOKE_REQUEST_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false
            }


        case REQUESTS_ACTION_TYPES.GET_REQUEST_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUESTS_ACTION_TYPES.GET_REQUEST_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requestDetail: action.payload
            }

        case REQUESTS_ACTION_TYPES.GET_REQUEST_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false,
                requestDetail: null
            }
        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;

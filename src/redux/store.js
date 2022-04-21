import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import {CONSTANTS} from "../constants/constants";

const token = localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_TOKEN_KEY) ?
    localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_TOKEN_KEY) : null;

const authData = localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_DATA_KEY) ?
    JSON.parse(localStorage.getItem(CONSTANTS.AIDEN_TRUST_ADMIN_AUTH_DATA_KEY)) : null;
const INITIAL_STATE = {
    auth: {
        token,
        authData
    }
};

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    applyMiddleware(thunk));

export default store;

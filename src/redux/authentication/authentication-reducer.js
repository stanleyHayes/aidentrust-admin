import {authData} from "./authentication-data";

const INITIAL_STATE = {
    authData: {...authData},
    token: null,
    authLoading: false,
   authError: false,
}
const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectAuth = state => state.auth;

export default authenticationReducer;

import {USERS_ACTION_TYPES} from "./users-action-types";

const INITIAL_STATE = {
    users: [],
    userLoading: false,
    userError: null,
    totalUsers: 0,
    userDetail: {
        _id: 1,
        firstName: 'Stanley',
        lastName: 'Hayford',
        email: 'hayfordstanley@gmail.com',
        image: '',
        username: 'sahayford',
        gender: 'Male',
        phoneNumber: '+233555180048',
        emergencyPhoneNumber: '+233270048319',
        accountStatus: {
            status: 'Active'
        },
        dateOfBirth: new Date(1993, 7 , 29),

    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case USERS_ACTION_TYPES.GET_USERS_REQUEST:
            return {
                ...state,
                userError: null,
                userLoading: true
            }

        case USERS_ACTION_TYPES.GET_USERS_SUCCESS:
            return {
                ...state,
                userError: null,
                userLoading: false,
                users: action.payload.data,
                totalUsers: action.payload.count
            }

        case USERS_ACTION_TYPES.GET_USERS_FAIL:
            return {
                ...state,
                userError: action.payload,
                userLoading: false
            }

        default:
            return state;
    }
}

export const selectUser = state => state.user;

export default userReducer;

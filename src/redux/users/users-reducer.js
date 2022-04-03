import {users} from "./user-data";

const INITIAL_STATE = {
    users: [...users],
    userLoading: false,
    userError: null,
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
        default:
            return state;
    }
}

export const selectUser = state => state.user;

export default userReducer;

import {admins} from "./admin-data";

const INITIAL_STATE = {
    admins: [...admins],
    adminDetail: {},
    adminLoading: false,
    adminError: false,
    totalAdmins: admins.length
}
const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectAdmin = state => state.admin;

export default adminReducer;

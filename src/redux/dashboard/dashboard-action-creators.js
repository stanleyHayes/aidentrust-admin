import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {DASHBOARDS_ACTION_TYPES} from "./dashboard-action-types";


const getAdminRequest = () => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_REQUEST
    }
}

const getAdminSuccess = (data) => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_SUCCESS,
        payload: data
    }
}

const getAdminFailure = message => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_FAIL,
        payload: message
    }
}

const getAdmin = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getAdminRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getAdminFailure(message));
        }
    }
}




export const DASHBOARD_ACTION_CREATORS = {getAdmin};

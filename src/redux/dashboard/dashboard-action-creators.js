import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {DASHBOARDS_ACTION_TYPES} from "./dashboard-action-types";


const getDashboardRequest = () => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_REQUEST
    }
}

const getDashboardSuccess = (data) => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_SUCCESS,
        payload: data
    }
}

const getDashboardFailure = message => {
    return {
        type: DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_FAIL,
        payload: message
    }
}

const getDashboard = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getDashboardRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/dashboard`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getDashboardSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getDashboardFailure(message));
        }
    }
}




export const DASHBOARD_ACTION_CREATORS = {getDashboard};

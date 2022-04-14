import {dashboard} from "./dashboard-data";
import {DASHBOARDS_ACTION_TYPES} from "./dashboard-action-types";

const INITIAL_STATE = {
    dashboard: {...dashboard},
    dashboardLoading: false,
    dashboardError: false,
}
const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_REQUEST:
            return {
                ...state,
                dashboardError: null,
                dashboardLoading: true
            }

        case DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                dashboardError: null,
                dashboardLoading: false,
                bankAccounts: action.payload.data,
            }

        case DASHBOARDS_ACTION_TYPES.GET_DASHBOARD_FAIL:
            return {
                ...state,
                dashboardError: action.payload,
                dashboardLoading: false
            }


        default:
            return state;
    }
}

export const selectDashboard = state => state.dashboard;

export default dashboardReducer;

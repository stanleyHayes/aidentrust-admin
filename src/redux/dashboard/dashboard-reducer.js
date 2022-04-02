import {dashboard} from "./dashboard-data";

const INITIAL_STATE = {
    dashboard: {...dashboard},
    dashboardLoading: false,
    dashboardError: false,
}
const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectDashboard = state => state.dashboard;

export default dashboardReducer;

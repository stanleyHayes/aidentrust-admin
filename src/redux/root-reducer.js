import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import userReducer from "./users/users-reducer";
import transactionReducer from "./transactions/transaction-reducer";
import adminReducer from "./admins/admin-reducer";
import fundsReducer from "./funds/funds-reducer";
import bankAccountReducer from "./bank-accounts/bank-account-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";
import authenticationReducer from "./authentication/authentication-reducer";
import invitationReducer from "./invitations/invitation-reducer";
import requestReducer from "./requests/requests-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    user: userReducer,
    transaction: transactionReducer,
    admin: adminReducer,
    fund: fundsReducer,
    bankAccount: bankAccountReducer,
    dashboard: dashboardReducer,
    auth: authenticationReducer,
    invitation: invitationReducer,
    request: requestReducer
});

export default rootReducer;

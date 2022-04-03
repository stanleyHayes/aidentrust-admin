import {Route, Routes} from "react-router-dom";
import {useLocation} from "react-router";
import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
import {CONSTANTS} from "./constants/constants";
import {THEMES} from "./utils/themes";
import {ThemeProvider} from "@mui/styles";
import TransactionsPage from "./pages/transactions/transactions-page";
import InvitationsPage from "./pages/invitations/invitations-page";
import BankAccountsPage from "./pages/bank-accounts/bank-accounts-page";
import UsersPage from "./pages/users/users-page";
import AdminsPage from "./pages/admins/admins-page";
import FundsPage from "./pages/funds/funds-page";
import SettingsPage from "./pages/account/settings-page";
import ProfilePage from "./pages/account/profile-page";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "./redux/ui/ui-action-creators";
import LoginPage from "./pages/authentication/login-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import RequestPage from "./pages/funds/request-page";
import CreateUserPage from "./pages/users/create-user-page";
import CreateAdminPage from "./pages/admins/create-admin-page";

function App() {

    const variant = localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY)) : 'dark';

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname)
            dispatch(UI_ACTION_CREATORS.changeURL(pathname))
    }, [dispatch, pathname]);

    return (
        <ThemeProvider theme={variant === 'light' ? THEMES.darkTheme : THEMES.lightTheme}>
            <Routes>
                <Route element={<DashboardPage/>} path="/"/>

                <Route element={<TransactionsPage/>} path="/transactions"/>

                <Route element={<InvitationsPage/>} path="/invitations"/>

                <Route element={<BankAccountsPage/>} path="/bank-accounts"/>

                <Route element={<UsersPage/>} path="/users"/>

                <Route element={<AdminsPage/>} path="/admins"/>

                <Route element={<FundsPage/>} path="/funds"/>

                <Route element={<SettingsPage/>} path="/settings"/>

                <Route element={<ProfilePage/>} path="/profile"/>

                <Route element={<RequestPage/>} path="/requests"/>

                <Route element={<LoginPage/>} path="/auth/login"/>

                <Route element={<CreateUserPage/>} path="/new/user"/>

                <Route element={<CreateAdminPage/>} path="/new/admin"/>

                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>

                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>

                <Route element={<ChangePasswordPage/>} path="/change-password"/>

                <Route element={<ChangePasswordPage/>} path="/auth/invitation"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;

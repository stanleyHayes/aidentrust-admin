import {Route, Routes} from "react-router-dom";
import {useLocation} from "react-router";
import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
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
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "./redux/ui/ui-action-creators";
import LoginPage from "./pages/authentication/login-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ChangePasswordPage from "./pages/account/change-password-page";
import RequestPage from "./pages/funds/requests-page";
import CreateUserPage from "./pages/users/create-user-page";
import CreateAdminPage from "./pages/admins/create-admin-page";
import UpdateAdminPage from "./pages/admins/update-admin-page";
import UpdateUserPage from "./pages/users/update-user-page";
import UserDetailPage from "./pages/users/user-detail-page";
import AdminDetailPage from "./pages/admins/admin-detail-page";
import {CssBaseline} from "@mui/material";
import ResetSuccessAcknowledgmentPage from "./components/shared/acknowledgment";
import RegistrationAcknowledgmentPage from "./pages/authentication/registration-acknowledgment-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import RequireAuth from "./components/shared/require-auth";

function App() {

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname)
            dispatch(UI_ACTION_CREATORS.changeURL(pathname))
    }, [dispatch, pathname]);

    return (
        <ThemeProvider theme={THEMES.lightTheme}>
            <CssBaseline/>
            <Routes>
                <Route element={<RequireAuth><DashboardPage/></RequireAuth>} path="/"/>

                <Route element={<RequireAuth><TransactionsPage/></RequireAuth>} path="/transactions"/>

                <Route element={<RequireAuth><InvitationsPage/></RequireAuth>} path="/invitations"/>

                <Route element={<RequireAuth><BankAccountsPage/></RequireAuth>} path="/bank-accounts"/>

                <Route element={<ResetSuccessAcknowledgmentPage/>} path="/reset-password/acknowledgment/success"/>

                <Route element={<RegistrationAcknowledgmentPage/>} path="/auth/verify/acknowledgment/success"/>

                <Route element={<RequireAuth><UsersPage/></RequireAuth>} path="/users"/>

                <Route element={<VerifyAccountPage/>} path="/auth/verify/:token/:code"/>

                <Route element={<RequireAuth><AdminsPage/></RequireAuth>} path="/admins"/>

                <Route element={<RequireAuth><FundsPage/></RequireAuth>} path="/funds"/>

                <Route element={<RequireAuth><SettingsPage/></RequireAuth>} path="/update-profile"/>

                <Route element={<RequireAuth><ProfilePage/></RequireAuth>} path="/profile"/>

                <Route element={<RequireAuth><RequestPage/></RequireAuth>} path="/requests"/>

                <Route element={<LoginPage/>} path="/auth/login"/>

                <Route element={<RequireAuth><CreateUserPage/></RequireAuth>} path="/new/user"/>

                <Route element={<RequireAuth><UpdateUserPage/></RequireAuth>} path="/users/:userID/update"/>

                <Route element={<RequireAuth><UserDetailPage/></RequireAuth>} path="/users/:userID/detail"/>

                <Route element={<RequireAuth><CreateAdminPage/></RequireAuth>} path="/new/admin"/>

                <Route element={<RequireAuth><UpdateAdminPage/></RequireAuth>} path="/admins/:adminID/update"/>

                <Route element={<RequireAuth><AdminDetailPage/></RequireAuth>} path="/admins/:adminID/detail"/>

                <Route element={<RequireAuth><ForgotPasswordPage/></RequireAuth>} path="/auth/forgot-password"/>

                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>

                <Route element={<RequireAuth><ChangePasswordPage/></RequireAuth>} path="/change-password"/>

                <Route element={<ChangePasswordPage/>} path="/auth/invitation"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;

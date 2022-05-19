import React, {useEffect} from "react";
import {Navigate, useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/authentication-action-creators";
import Splash from "./splash";

const RequireAuth = ({children}) => {

    const {token, splashLoading} = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(AUTH_ACTION_CREATORS.getProfile(token, navigate))
    }, []);

    if (splashLoading) {
        return <Splash/>;
    }

    if (!splashLoading && !token) {
        return <Navigate to="/auth/login" state={{path: location.pathname}}/>
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default RequireAuth;

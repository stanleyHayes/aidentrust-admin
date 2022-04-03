import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CONSTANTS} from "./constants/constants";
import {THEMES} from "./utils/themes";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from "@mui/lab";


const variant = localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.THEME_VARIANT_KEY)) : 'dark';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={variant === 'light' ? THEMES.darkTheme : THEMES.lightTheme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <App/>
                    </LocalizationProvider>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

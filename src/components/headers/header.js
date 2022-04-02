import React from "react";
import {AppBar, Hidden} from "@mui/material";
import MobileHeader from "./mobile-header";

const Header = () => {

    return (
        <React.Fragment>
            <AppBar variant="elevation" elevation={0} color="primary">
                <Hidden mdUp={true}>
                    <MobileHeader/>
                </Hidden>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;

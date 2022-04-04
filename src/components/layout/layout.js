import {Box, SwipeableDrawer} from "@mui/material";
import DesktopDrawer from "../drawers/desktop-drawer";
import MobileDrawer from "../drawers/mobile-drawer";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import Header from "../headers/header";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box>
            <Box sx={{display: 'flex', minHeight: '100vh', maxWidth: '100vw'}}>
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        flexBasis: {
                            xs: '0%',
                            sm: '0%',
                            md: '25%',
                            lg: '15%'
                        },
                        borderRadius: 2,
                        mx: 4,
                        backgroundColor: 'background.paper',
                        maxHeight: '100vh',
                        display: {xs: "none", md: "block"}
                    }}>
                    <DesktopDrawer/>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "background.default",
                        maxWidth: '100%'
                }}>
                    <Header />
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openDrawer())}>
                <MobileDrawer/>
            </SwipeableDrawer>
        </Box>


    )
}

export default Layout;

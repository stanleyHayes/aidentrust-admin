import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    AccountBalance,
    AccountBalanceOutlined,
    CompareArrows,
    CompareArrowsOutlined,
    Dashboard,
    DashboardOutlined,
    Face,
    FaceOutlined,
    InsertInvitation,
    InsertInvitationOutlined,
    Logout,
    MonetizationOn,
    MonetizationOnOutlined,
    Send,
    SendOutlined,
    Settings,
    SettingsOutlined,
    VerifiedUser,
    VerifiedUserOutlined
} from "@mui/icons-material";
import {grey, purple} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";

const DesktopDrawer = () => {

    const {pathname} = useLocation();

    const useStyles = makeStyles(theme => {
        return {
            inactive: {
                color: 'text.secondary',
                backgroundColor: grey[200],
                padding: 0.5,
                borderRadius: 4
            },
            active: {
                color: 'text.link',
                backgroundColor: purple[100],
                padding: 0.5,
                borderRadius: 4
            }
        }
    });

    const classes = useStyles();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                pt: 2
            }}>
            <Box sx={{flex: 1}}>
                <Stack mb={2} direction="column">
                    <Typography
                        sx={{
                            color: 'text.link',
                            pl: 4,
                            fontWeight: 400,
                            fontFamily: 'Chakra Petch'
                        }} variant="h4">
                        Aiden Trust
                    </Typography>
                </Stack>
                <Divider orientation="horizontal" light={true} variant="middle"/>
                <Stack
                    divider={<Divider orientation="horizontal" light={true} variant="fullWidth"/>}
                    mt={2} direction="column">
                    <SidebarLink
                        icon={
                            pathname === '/' ?
                                <Dashboard className={classes.active}/> :
                                <DashboardOutlined className={classes.inactive}/>
                        }
                        path="/"
                        label="Dashboard"
                        active={pathname === '/'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/transactions' ?
                                <CompareArrows className={classes.active}/> :
                                <CompareArrowsOutlined className={classes.inactive}/>
                        }
                        path="/transactions"
                        label="Transactions"
                        active={pathname === '/transactions'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/bank-accounts' ?
                                <AccountBalance fontSize="large" className={classes.active}/> :
                                <AccountBalanceOutlined fontSize="large" className={classes.inactive}/>
                        }
                        path="/bank-accounts"
                        label="Bank Accounts"
                        active={pathname === '/bank-accounts'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/funds' ?
                                <MonetizationOn className={classes.active}/> :
                                <MonetizationOnOutlined className={classes.inactive}/>
                        }
                        path="/funds"
                        label="Funds"
                        active={pathname === '/funds'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/requests' ?
                                <Send className={classes.active}/> :
                                <SendOutlined className={classes.inactive}/>
                        }
                        path="/requests"
                        label="Requests"
                        active={pathname === '/requests'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/invitations' ?
                                <InsertInvitation className={classes.active}/> :
                                <InsertInvitationOutlined className={classes.inactive}/>
                        }
                        path="/invitations"
                        label="Invitations"
                        active={pathname === '/invitations'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/users' ?
                                <Face className={classes.active}/> :
                                <FaceOutlined className={classes.inactive}/>
                        }
                        path="/users"
                        label="Users"
                        active={pathname === '/users'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/admins' ?
                                <VerifiedUser className={classes.active}/> :
                                <VerifiedUserOutlined className={classes.inactive}/>
                        }
                        path="/admins"
                        label="Admins"
                        active={pathname === '/admins'}
                    />

                </Stack>
            </Box>

            <Box sx={{pb: 4}}>
                <Stack
                    divider={<Divider orientation="horizontal" light={true} variant="middle"/>}
                    mt={2} direction="column">
                    <SidebarLink
                        icon={
                            pathname === '/settings' ?
                                <Settings className={classes.active}/> :
                                <SettingsOutlined className={classes.inactive}/>
                        }
                        path="/settings"
                        label="Settings"
                        active={pathname === '/settings'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/profile' ?
                                <VerifiedUser className={classes.active}/> :
                                <VerifiedUserOutlined className={classes.inactive}/>
                        }
                        path="/profile"
                        label="Profile"
                        active={pathname === '/profile'}
                    />

                    <Button
                        startIcon={
                            <Logout className={classes.active}/>}
                        sx={{
                            fontWeight: 'bold',
                            borderRadius: 0,
                            justifyContent: 'flex-start',
                            textTransform: 'capitalize',
                            fontSize: 14,
                            paddingLeft: 4,
                            py: 1
                        }}
                        color="primary"
                        size="medium"
                        variant="text"
                        fullWidth={true}>
                        Logout
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default DesktopDrawer;

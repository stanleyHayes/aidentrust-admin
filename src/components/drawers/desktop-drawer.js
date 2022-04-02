import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    Dashboard,
    DashboardOutlined,
    Logout,
    Settings,
    SettingsOutlined,
    VerifiedUser,
    VerifiedUserOutlined
} from "@mui/icons-material";

const DesktopDrawer = () => {

    const {pathname} = useLocation();

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
                    <Typography sx={{color: 'text.link', pl: 4, fontWeight: 'bold'}} variant="h4">
                        Aiden Trust
                    </Typography>
                </Stack>
                <Divider orientation="horizontal" light={true} variant="middle"/>
                <Stack
                    divider={<Divider orientation="horizontal" light={true} variant="middle"/>}
                    mt={2} direction="column">
                    <SidebarLink
                        icon={
                            pathname === '/' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/"
                        label="Dashboard"
                        active={pathname === '/'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/transactions' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/transactions"
                        label="Transactions"
                        active={pathname === '/transactions'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/bank-accounts' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/bank-accounts"
                        label="Bank Accounts"
                        active={pathname === '/bank-accounts'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/funds' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/funds"
                        label="Funds"
                        active={pathname === '/funds'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/requests' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/requests"
                        label="Requests"
                        active={pathname === '/requests'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/invitations' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/invitations"
                        label="Invitations"
                        active={pathname === '/invitations'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/users' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/users"
                        label="Users"
                        active={pathname === '/users'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/admins' ?
                                <Dashboard sx={{color: 'text.link'}}/> :
                                <DashboardOutlined sx={{color: 'text.secondary'}}/>
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
                                <Settings sx={{color: 'text.link'}}/> :
                                <SettingsOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/settings"
                        label="Settings"
                        active={pathname === '/settings'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/profile' ?
                                <VerifiedUser sx={{color: 'text.link'}}/> :
                                <VerifiedUserOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/profile"
                        label="Profile"
                        active={pathname === '/profile'}
                    />
                    <Button
                        startIcon={<Logout/>}
                        sx={{
                            fontWeight: 'bold',
                            borderRadius: 0,
                            justifyContent: 'flex-start',
                            textTransform: 'capitalize',
                            fontSize: 14,
                            paddingLeft: 4
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

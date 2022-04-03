import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    AccountBalance, AccountBalanceOutlined,
    CompareArrows, CompareArrowsOutlined,
    Dashboard,
    DashboardOutlined, Face, FaceOutlined, InsertInvitation, InsertInvitationOutlined,
    Logout, MonetizationOn, MonetizationOnOutlined, Send, SendOutlined,
    Settings,
    SettingsOutlined,
    VerifiedUser,
    VerifiedUserOutlined
} from "@mui/icons-material";

const MobileDrawer = () => {

    const {pathname} = useLocation();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                pt: 2,
                minWidth: '90vw'
            }}>
            <Box sx={{flex: 1}}>
                <Stack mb={2} direction="column">
                    <Typography
                        sx={{color: 'text.link', pl: 4, fontWeight: 'bold'}} variant="h4">
                        Aiden Trust
                    </Typography>
                </Stack>
                <Divider orientation="horizontal" light={true} variant="middle"/>
                <Stack
                    divider={<Divider orientation="horizontal" light={true} variant="middle"/>}
                    mt={2}
                    direction="column"
                    spacing={1.5}>
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
                                <CompareArrows sx={{color: 'text.link'}}/> :
                                <CompareArrowsOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/transactions"
                        label="Transactions"
                        active={pathname === '/transactions'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/bank-accounts' ?
                                <AccountBalance sx={{color: 'text.link'}}/> :
                                <AccountBalanceOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/bank-accounts"
                        label="Bank Accounts"
                        active={pathname === '/bank-accounts'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/funds' ?
                                <MonetizationOn sx={{color: 'text.link'}}/> :
                                <MonetizationOnOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/funds"
                        label="Funds"
                        active={pathname === '/funds'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/requests' ?
                                <Send sx={{color: 'text.link'}}/> :
                                <SendOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/requests"
                        label="Requests"
                        active={pathname === '/requests'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/invitations' ?
                                <InsertInvitation sx={{color: 'text.link'}}/> :
                                <InsertInvitationOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/invitations"
                        label="Invitations"
                        active={pathname === '/invitations'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/users' ?
                                <Face sx={{color: 'text.link'}}/> :
                                <FaceOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/users"
                        label="Users"
                        active={pathname === '/users'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/admins' ?
                                <VerifiedUser sx={{color: 'text.link'}}/> :
                                <VerifiedUserOutlined sx={{color: 'text.secondary'}}/>
                        }
                        path="/admins"
                        label="Admins"
                        active={pathname === '/admins'}
                    />
                </Stack>
            </Box>

            <Stack
                spacing={0.5}
                divider={<Divider orientation="horizontal" light={true} variant="middle"/>}
                mt={2}
                direction="column"
                sx={{pb: 4}}>
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
    )
}

export default MobileDrawer;

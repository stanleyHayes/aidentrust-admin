import Layout from "../../components/layout/layout";
import {Box, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import {useSelector} from "react-redux";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import Stat from "../../components/shared/stat";
import {Cancel, CheckCircle, Close, HourglassBottom} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import Feint from "../../components/shared/feint";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingBottom: 32
            },
            title: {
                color: theme.palette.text.primary
            },
            subtitle: {
                color: theme.palette.text.secondary
            }
        }
    });

    const classes = useStyles();
    const {dashboardLoading, dashboardError, dashboard} = useSelector(selectDashboard);
    return (
        <Layout>
            {dashboardLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    dashboardError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {dashboardError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}
                    alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <Typography className={classes.title} variant="h4">
                            Dashboard
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Bank Accounts ({dashboard && dashboard.bankAccount.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2} justifyContent="center">
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.bankAccount.active}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.bankAccount.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Suspended"
                                    value={dashboard.bankAccount.suspended}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Transactions ({dashboard.transaction.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.transaction.success}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.transaction.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Failed"
                                    value={dashboard.transaction.failed}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Requests ({dashboard && dashboard.request.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Confirmed"
                                    value={dashboard.request.confirmed}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.request.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="rejected"
                                    value={dashboard.request.rejected}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Users ({dashboard && dashboard.user.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.user.active}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.user.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Suspended"
                                    value={dashboard.user.suspended}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Admins ({dashboard && dashboard.admin.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Active"
                                    value={dashboard.admin.active}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.admin.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Suspended"
                                    value={dashboard.admin.suspended}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Funds ({dashboard && dashboard.fund.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Confirmed"
                                    value={dashboard.fund.confirmed}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.fund.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Rejected"
                                    value={dashboard.fund.rejected}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography className={classes.subtitle} variant="h5">
                        Invitations ({dashboard && dashboard.invitation.total})
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                        light={true}
                        sx={{my: 2}}
                    />
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="green"
                                    title="Accepted"
                                    value={dashboard.invitation.accepted}
                                    icon={
                                        <Feint
                                            color="green"
                                            children={
                                                <CheckCircle
                                                    sx={{color: green[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="grey"
                                    title="Pending"
                                    value={dashboard.invitation.pending}
                                    icon={
                                        <Feint
                                            color="grey"
                                            children={
                                                <HourglassBottom
                                                    sx={{color: grey[500]}}
                                                    fontSize="large"
                                                />
                                            }/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="red"
                                    title="Expired"
                                    value={dashboard.invitation.expired}
                                    icon={
                                        <Feint
                                            color="red"
                                            children={
                                                <Cancel
                                                    sx={{color: red[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    color="purple"
                                    title="Revoked"
                                    value={dashboard.invitation.revoked}
                                    icon={
                                        <Feint
                                            color="purple"
                                            children={
                                                <Close
                                                    sx={{color: purple[500]}}
                                                    fontSize="large"
                                                />
                                            }/>
                                    }
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}

export default DashboardPage;

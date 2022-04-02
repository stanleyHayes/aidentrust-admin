import Layout from "../../components/layout/layout";
import {Box, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import {useSelector} from "react-redux";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import Stat from "../../components/shared/stat";
import {Cancel, CheckCircle, Close, HourglassBottom} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingBottom: 32
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
                        <Typography variant="h4">
                            Dashboard
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">
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
                                    title="Active"
                                    value={dashboard.bankAccount.active}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.bankAccount.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Suspended"
                                    value={dashboard.bankAccount.suspended}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">Transactions ({dashboard.transaction.total})</Typography>
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
                                    title="Active"
                                    value={dashboard.transaction.success}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.transaction.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Failed"
                                    value={dashboard.transaction.failed}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">Requests ({dashboard && dashboard.request.total})</Typography>
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
                                    title="Confirmed"
                                    value={dashboard.request.confirmed}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.request.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="rejected"
                                    value={dashboard.request.rejected}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">Users ({dashboard && dashboard.user.total})</Typography>
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
                                    title="Active"
                                    value={dashboard.user.active}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.user.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Suspended"
                                    value={dashboard.user.suspended}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">Admins ({dashboard && dashboard.admin.total})</Typography>
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
                                    title="Active"
                                    value={dashboard.admin.active}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.admin.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Suspended"
                                    value={dashboard.admin.suspended}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>

                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">Funds ({dashboard && dashboard.fund.total})</Typography>
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
                                    title="Confirmed"
                                    value={dashboard.fund.confirmed}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.fund.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {dashboard && (
                                <Stat
                                    title="Rejected"
                                    value={dashboard.fund.rejected}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>


                <Box my={4} spacing={2} direction="column">
                    <Typography variant="h5">
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
                                    title="Accepted"
                                    value={dashboard.invitation.accepted}
                                    icon={<CheckCircle sx={{color: green[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    title="Pending"
                                    value={dashboard.invitation.pending}
                                    icon={<HourglassBottom sx={{color: grey[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    title="Expired"
                                    value={dashboard.invitation.expired}
                                    icon={<Cancel sx={{color: red[600]}} fontSize="large"/>}
                                />
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            {dashboard && (
                                <Stat
                                    title="Revoked"
                                    value={dashboard.invitation.revoked}
                                    icon={<Close sx={{color: purple[600]}} fontSize="large"/>}
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

import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {selectRequest} from "../../redux/requests/requests-reducer";
import User from "../../components/shared/user";
import UserInvitationDialog from "../../components/dialogs/new/user-invitation-dialog";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/requests-action-creators";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {Link} from "react-router-dom";

const RequestsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const [status, setStatus] = useState("All");

    const {requests, requestError, requestLoading} = useSelector(selectRequest);
    const classes = useStyles();

    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
    const {token} = useSelector(selectAuth);

    const renderStatus = status => {
        switch (status) {
            case 'Pending':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[600], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                )
            case 'Approved':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[600], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'Rejected':
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[600], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
            default:
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(REQUEST_ACTION_CREATORS.getRequests(token));
    }, [dispatch, token]);


    return (
        <Layout>
            {requestLoading && <LinearProgress color="primary" variant="query"/>}
            <Container className={classes.container}>
                {
                    requestError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>{requestError}</AlertTitle>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Requests ({requests && requests.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Grid container={true} spacing={2} alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Select
                                    margin="dense"
                                    name="status"
                                    label="Status"
                                    onChange={event => setStatus(event.target.value)}
                                    fullWidth={true}
                                    variant="outlined"
                                    size="small"
                                    value={status}>
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Confirmed">Confirmed</MenuItem>
                                    <MenuItem value="Rejected">Rejected</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    onClick={() => setInviteDialogOpen(true)}
                                    disableElevation={true}
                                    size="large"
                                    fullWidth={true}
                                    sx={{
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    variant="contained">
                                    Invite
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {requests && requests.length > 0 && (
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="requests table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Inviter</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    requests && requests.map((request, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>
                                                    <User
                                                        lastName={request.inviter.lastName}
                                                        image={request.inviter.image}
                                                        firstName={request.inviter.firstName}/>
                                                </TableCell>
                                                <TableCell>{request.email}</TableCell>
                                                <TableCell>{request.code}</TableCell>
                                                <TableCell>{renderStatus(request.status)}</TableCell>
                                                <TableCell>
                                                    {moment(request.updatedAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-start"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Tooltip title="View request detail">
                                                                <Link
                                                                    style={{textDecoration: 'none'}}
                                                                    to={`/requests/${request._id}`}>
                                                                    <Visibility
                                                                        sx={{
                                                                            cursor: 'pointer',
                                                                            backgroundColor: purple[100],
                                                                            padding: 0.5,
                                                                            borderRadius: 0.5,
                                                                            fontSize: 28
                                                                        }}
                                                                        color="primary"
                                                                    />
                                                                </Link>
                                                            </Tooltip>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                {
                    requests && requests.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="small" aria-label="requests table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Inviter</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Code</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body1" align="center">
                                    No requests available
                                </Typography>
                            </Box>
                        </Box>
                    )
                }

                {
                    inviteDialogOpen && (
                        <UserInvitationDialog
                            open={inviteDialogOpen}
                            handleClose={() => setInviteDialogOpen(false)}
                        />
                    )
                }
            </Container>
        </Layout>
    )
}

export default RequestsPage;

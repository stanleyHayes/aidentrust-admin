import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField, Tooltip,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import User from "../../components/shared/user";
import {selectUser} from "../../redux/users/users-reducer";
import {useNavigate} from "react-router";
import UserInvitationDialog from "../../components/dialogs/new/user-invitation-dialog";
import {USER_ACTION_CREATORS} from "../../redux/users/users-action-creators";
import {selectAuth} from "../../redux/authentication/authentication-reducer";

const UsersPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {users, userError, userLoading} = useSelector(selectUser);
    const classes = useStyles();

    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    const renderStatus = status => {
        switch (status) {
            case 'Pending':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                )
            case 'Active':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'Suspended':
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[400], color: 'white', textTransform: 'capitalize'}}
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

    useEffect(() => {
        dispatch(USER_ACTION_CREATORS.getUsers(token));
    }, [dispatch, token]);

    return (
        <Layout>
            {userLoading && <LinearProgress color="primary" variant="query"/>}
            <Container className={classes.container}>
                {
                    userError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {userError}
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
                    <Grid item={true} xs={12} md={3}>
                        <Typography variant="h4">
                            Users ({users && users.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Grid
                            container={true}
                            spacing={2}
                            alignItems="center"
                            justifyContent="flex-start">
                            <Grid item={true} xs={12} md={10}>
                                <TextField
                                    label="Search"
                                    fullWidth={true}
                                    name="email"
                                    required={true}
                                    variant="outlined"
                                    value={query}
                                    type="email"
                                    placeholder="Enter first name, last name, email, username"
                                    size="small"
                                    onChange={event => setQuery(event.target.value)}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={2}>
                                <Button
                                    disableElevation={true}
                                    size="medium"
                                    color="secondary"
                                    fullWidth={true}
                                    sx={{
                                        color: 'black',
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    variant="contained">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    onClick={() => setInviteDialogOpen(true)}
                                    disableElevation={true}
                                    size="medium"
                                    color="primary"
                                    fullWidth={true}
                                    sx={{
                                        color: 'primary.main',
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    variant="outlined">
                                    Invite
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    onClick={() => navigate('/new/user')}
                                    disableElevation={true}
                                    size="medium"
                                    color="primary"
                                    fullWidth={true}
                                    sx={{
                                        color: 'white',
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    variant="contained">
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {users && users.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">User</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Username</TableCell>
                                    <TableCell align="center">Phone</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Date Joined</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users && users.length > 0 && users.map((user, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <User
                                                        lastName={user.lastName}
                                                        firstName={user.firstName}
                                                        image={user.image}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">{user.email}</TableCell>
                                                <TableCell align="center">{user.username}</TableCell>
                                                <TableCell align="center">{user.phoneNumber}</TableCell>
                                                <TableCell
                                                    align="center">{renderStatus(user.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(user.createdAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Tooltip title={`View details of ${user.firstName}`}>
                                                                <Visibility
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        backgroundColor: purple[100],
                                                                        padding: 0.5,
                                                                        borderRadius: 0.5,
                                                                        fontSize: 28
                                                                    }}
                                                                    onClick={() => navigate(`/users/${user._id}/detail`)}
                                                                    fontSize="small"
                                                                    color="primary"
                                                                />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item={true}>
                                                            <Tooltip title={`Edit details of ${user.firstName}`}>
                                                                <Edit
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        backgroundColor: purple[100],
                                                                        padding: 0.5,
                                                                        borderRadius: 0.5,
                                                                        fontSize: 28
                                                                    }}
                                                                    onClick={() => navigate(`/users/${user._id}/update`)}
                                                                    fontSize="small"
                                                                    color="primary"
                                                                />
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
                }

                {
                    users && users.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="medium" sx={{minWidth: 650}} aria-label="transactions table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">User</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Username</TableCell>
                                            <TableCell align="center">Phone</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Date Joined</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body1" align="center">
                                    No users available
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

export default UsersPage;

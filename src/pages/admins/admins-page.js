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
    TextField,
    Typography,
    Alert,
    AlertTitle, Tooltip
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {selectAdmin} from "../../redux/admins/admin-reducer";
import User from "../../components/shared/user";
import {useNavigate} from "react-router";
import InviteAdminDialog from "../../components/dialogs/new/admin-invitation-dialog";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {
    ADMIN_ACTION_CREATORS
} from "../../redux/admins/admin-action-creators";

const AdminsPage = () => {

    const {admins, adminError, adminLoading} = useSelector(selectAdmin);
    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

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

    const {token} = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ADMIN_ACTION_CREATORS.getAdmins(token));
    }, [dispatch, token]);

    return (
        <Layout>
            {adminLoading && <LinearProgress color="primary" variant="query"/>}

            <Container sx={{my: 8}}>
                {
                    adminError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>{adminError}</AlertTitle>
                        </Alert>
                    )
                }

                <Grid sx={{my: 2}} container={true} justifyContent="space-between" spacing={2}
                      alignItems="center">
                    <Grid item={true} xs={12} md={3}>
                        <Typography variant="h4">
                            Admins ({admins && admins.length})
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
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize'
                                    }}
                                    variant="contained">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} md={6} xs={12}>
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
                            <Grid item={true} md={6} xs={12}>
                                <Button
                                    onClick={() => navigate('/new/admin')}
                                    disableElevation={true}
                                    size="medium"
                                    color="primary"
                                    fullWidth={true}
                                    sx={{color: 'white', textTransform: 'capitalize'}}
                                    variant="contained">
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>
                {
                    admins && admins.length > 0 &&
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
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    admins && admins.length > 0 && admins.map((admin, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <User
                                                        lastName={admin.lastName}
                                                        firstName={admin.firstName}
                                                        image={admin.image}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">{admin.email}</TableCell>
                                                <TableCell align="center">{admin.username}</TableCell>
                                                <TableCell align="center">{admin.phoneNumber}</TableCell>
                                                <TableCell
                                                    align="center">{renderStatus(admin.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(admin.createdAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Tooltip title={`View details of ${admin.firstName}`}>
                                                                <Visibility
                                                                    onClick={() => navigate(`/admins/${admin._id}/detail`)}
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        backgroundColor: purple[100],
                                                                        padding: 0.5,
                                                                        borderRadius: 0.5,
                                                                        fontSize: 28
                                                                    }}
                                                                    fontSize="small"
                                                                    color="primary"
                                                                />
                                                            </Tooltip>

                                                        </Grid>
                                                        <Grid item={true}>
                                                            <Tooltip title={`Update details of ${admin.firstName}`}>
                                                                <Edit
                                                                    onClick={() => navigate(`/admins/${admin._id}/update`)}
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        backgroundColor: purple[100],
                                                                        padding: 0.5,
                                                                        borderRadius: 0.5,
                                                                        fontSize: 28
                                                                    }}
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
                    admins && admins.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="medium" sx={{minWidth: 650}} aria-label="admins table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">User</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Username</TableCell>
                                            <TableCell align="center">Phone</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body1" align="center">
                                    No admins available
                                </Typography>
                            </Box>
                        </Box>
                    )
                }

                {
                    inviteDialogOpen && (
                        <InviteAdminDialog
                            open={inviteDialogOpen}
                            handleClose={() => setInviteDialogOpen(false)}
                        />
                    )
                }
            </Container>
        </Layout>
    )
}

export default AdminsPage;

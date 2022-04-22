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
    AlertTitle
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import User from "../../components/shared/user";
import {selectInvitation} from "../../redux/invitations/invitation-reducer";
import InviteAdminDialog from "../../components/dialogs/new/admin-invitation-dialog";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {INVITATION_ACTION_CREATORS} from "../../redux/invitations/invitation-action-creators";

const InvitationsPage = () => {

    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

    const {invitations, invitationError, invitationLoading} = useSelector(selectInvitation);

    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    useEffect(() => {
        dispatch(INVITATION_ACTION_CREATORS.getInvitations(token));
    }, [dispatch, token]);

    const renderStatus = status => {
        switch (status) {
            case 'Pending':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>)
            case 'Accepted':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>);
            case 'Revoked':
                return (<Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: purple[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>);

            case 'Expired':
                return (<Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>);
            default:
                return (<Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>);
        }
    }
    return (<Layout>
            {invitationLoading && <LinearProgress color="primary" variant="query"/>}
            <Container sx={{my: 4, mt: {xs: 8, md: 4}}}>
                {invitationError && (<Alert severity="error" variant="standard">
                        <AlertTitle>{invitationError}</AlertTitle>
                    </Alert>)}

                <Grid sx={{my: 4}} container={true} justifyContent="space-between" spacing={2}
                      alignItems="center">
                    <Grid item={true} xs={12} md={3}>
                        <Typography variant="h4">
                            Invitations ({invitations && invitations.length})
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
                                    type="text"
                                    size="small"
                                    onChange={event => setQuery(event.target.value)}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={2}>
                                <Button
                                    disableElevation={true}
                                    size="medium"
                                    color="primary"
                                    fullWidth={true}
                                    sx={{
                                        color: 'white', fontWeight: 'bold', textTransform: 'capitalize'
                                    }}
                                    variant="contained">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Button
                            onClick={() => setInviteDialogOpen(true)}
                            disableElevation={true}
                            size="medium"
                            color="secondary"
                            fullWidth={true}
                            sx={{
                                color: 'black', textTransform: 'capitalize', fontWeight: 'bold',
                            }}
                            variant="contained">
                            Invite
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>
                {invitations && invitations.length > 0 && <TableContainer component={Paper} elevation={0}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="transactions table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Inviter</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invitations && invitations.length > 0 && invitations.map((invitation, index) => {
                                return (<TableRow
                                        hover={true}
                                        key={index}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">
                                            <User
                                                lastName={invitation.inviter.lastName}
                                                firstName={invitation.inviter.firstName}
                                                image={invitation.inviter.image}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{invitation.email}</TableCell>
                                        <TableCell
                                            align="center">{renderStatus(invitation.status)}</TableCell>
                                        <TableCell align="center">
                                            {moment(invitation.updatedAt).fromNow()}
                                        </TableCell>
                                        <TableCell>
                                            <Grid
                                                container={true}
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                spacing={1}>
                                                <Grid item={true}>
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
                                                </Grid>
                                                <Grid item={true}>
                                                    <Edit
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
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>}

                {invitations && invitations.length === 0 && (<Box my={4}>
                        <TableContainer component={Paper} elevation={0}>
                            <Table size="small" sx={{minWidth: 650}} aria-label="admins table">
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
                                No invitations available
                            </Typography>
                        </Box>
                    </Box>)}

                {inviteDialogOpen && (<InviteAdminDialog
                        open={inviteDialogOpen}
                        handleClose={() => setInviteDialogOpen(false)}
                    />)}
            </Container>
        </Layout>)
}

export default InvitationsPage;

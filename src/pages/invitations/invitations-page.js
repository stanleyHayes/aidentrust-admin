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
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import User from "../../components/shared/user";
import {selectInvitation} from "../../redux/invitations/invitation-reducer";

const InvitationsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {invitations, invitationError, invitationLoading} = useSelector(selectInvitation);
    const classes = useStyles();

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
            case 'Accepted':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'Revoked':
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: purple[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );

            case 'Expired':
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
    return (
        <Layout>
            {invitationLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    invitationError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {invitationError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{my: 4, mt: 8}} container={true} justifyContent="space-between" spacing={2}
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
                                    type="email"
                                    size="small"
                                    defaultValue=""
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
                                        color: 'white',
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
                        <Button
                            disableElevation={true}
                            size="medium"
                            color="secondary"
                            fullWidth={true}
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                        }}
                            variant="contained">
                            Invite
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>
                {
                    invitations && invitations.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
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
                                {
                                    invitations && invitations.length > 0 && invitations.map((invitation, index) => {
                                        return (
                                            <TableRow
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
                                                                fontSize="small"
                                                                color="primary"
                                                            />
                                                        </Grid>
                                                        <Grid item={true}>
                                                            <Edit
                                                                fontSize="small"
                                                                color="primary"
                                                            />
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
                    invitations && invitations.length === 0 &&
                    (
                        <Box my={4}>
                            <Typography variant="h6" align="center">
                                No Admins available
                            </Typography>
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
                        </Box>
                    )
                }
            </Container>
        </Layout>
    )
}

export default InvitationsPage;

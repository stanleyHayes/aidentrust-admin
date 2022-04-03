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
import {green, grey, red} from "@mui/material/colors";
import {selectAdmin} from "../../redux/admins/admin-reducer";
import User from "../../components/shared/user";
import {useNavigate} from "react-router";
import InviteAdminDialog from "../../components/dialogs/new/admin-invitation-dialog";

const AdminsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {admins, adminError, adminLoading} = useSelector(selectAdmin);
    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
    const classes = useStyles();
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
    return (
        <Layout>
            {adminLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    adminError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {adminError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{my: 4, mt: {xs: 8, md: 4}}} container={true} justifyContent="space-between" spacing={2}
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
                                    defaultValue=""
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
                                                    align="center">{renderStatus(admin.accountStatus.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(admin.updatedAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Visibility
                                                                onClick={() => navigate(`/admins/${admin._id}/detail`)}
                                                                sx={{pointer: 'cursor'}}
                                                                fontSize="small"
                                                                color="primary"
                                                            />
                                                        </Grid>
                                                        <Grid item={true}>
                                                            <Edit
                                                                onClick={() => navigate(`/admins/${admin._id}/update`)}
                                                                sx={{pointer: 'cursor'}}
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
                    admins && admins.length === 0 &&
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

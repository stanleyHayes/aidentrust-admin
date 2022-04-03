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
    TableRow,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import {Edit, Visibility} from "@mui/icons-material";
import {green, grey, red} from "@mui/material/colors";
import {selectRequest} from "../../redux/requests/requests-reducer";
import User from "../../components/shared/user";

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
            case 'Confirmed':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'Rejected':
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
            {requestLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    requestError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {requestError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{my: 4, mt: {xs: 8, md: 4}}} container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Requests ({requests && requests.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={2}>
                        <Select
                            margin="dense"
                            name="status"
                            label="Age"
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
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <TableContainer component={Paper} elevation={0}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="requests table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">User</TableCell>
                                <TableCell align="center">Balance</TableCell>
                                <TableCell align="center">Number</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                requests && requests.map((request, index) => {
                                    return (
                                        <TableRow
                                            hover={true}
                                            key={index}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell align="center">
                                                <User
                                                    lastName={request.lastName}
                                                    image={request.image}
                                                    firstName={request.firstName}/>
                                            </TableCell>
                                            <TableCell align="center">${request.balance}</TableCell>
                                            <TableCell align="center">{request.accountNumber}</TableCell>
                                            <TableCell align="center">{request.email}</TableCell>
                                            <TableCell align="center">{request.transactionID}</TableCell>
                                            <TableCell align="center">{renderStatus(request.status)}</TableCell>
                                            <TableCell align="center">
                                                {moment(request.updatedAt).fromNow()}
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
                {
                    requests && requests.length === 0 &&
                    (
                        <Box my={4}>
                            <Typography variant="h6" align="center">
                                No Transactions available
                            </Typography>
                            <TableContainer component={Paper} elevation={1}>
                                <Table aria-label="requests table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">User</TableCell>
                                            <TableCell align="center">Balance</TableCell>
                                            <TableCell align="center">Number</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">ID</TableCell>
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

export default RequestsPage;

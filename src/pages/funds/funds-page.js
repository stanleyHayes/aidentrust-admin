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
import {green, grey, purple, red} from "@mui/material/colors";
import {selectFund} from "../../redux/funds/funds-reducer";

const FundsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const [status, setStatus] = useState("All");

    const {funds, fundError, fundLoading} = useSelector(selectFund);
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
            {fundLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    fundError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {fundError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{my: 4,  mt: {xs: 8, md: 4}}} container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Funds ({funds && funds.length})
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
                            <MenuItem value="Success">Success</MenuItem>
                            <MenuItem value="Failed">Failed</MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {funds && funds.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{minWidth: 650}} size="medium" aria-label="transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">User</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    funds && funds.map((fund, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{fund.emailOrUsername}</TableCell>
                                                <TableCell align="center">${fund.amount}</TableCell>
                                                <TableCell align="center">{fund.transactionID}</TableCell>
                                                <TableCell align="center">{renderStatus(fund.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(fund.updatedAt).fromNow()}
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
                    funds && funds.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={1}>
                                <Table size="medium" sx={{minWidth: 650}} aria-label="transactions table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">#</TableCell>
                                            <TableCell align="right">Sender Account</TableCell>
                                            <TableCell align="right">Recipient Account</TableCell>
                                            <TableCell align="right">Type</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Status</TableCell>
                                            <TableCell align="right">Date</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body2" align="center">
                                    No funds available
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
            </Container>
        </Layout>
    )
}

export default FundsPage;

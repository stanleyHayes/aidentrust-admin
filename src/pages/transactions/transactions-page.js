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
    Tooltip,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import {SendSharp, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import User from "../../components/shared/user";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const TransactionsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const [status, setStatus] = useState("All");

    const {transactions, transactionError, transactionLoading} = useSelector(selectTransaction);
    const {token} = useSelector(selectAuth);
    const classes = useStyles();
    const dispatch = useDispatch();

    const renderStatus = status => {
        switch (status) {
            case 'Pending':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[800], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                )
            case 'Success':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[800], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'Failed':
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[800], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
            default:
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: grey[800], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
        }
    }

    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATORS.getTransactions(token));
    }, []);

    const navigate = useNavigate();

    return (
        <Layout>
            {transactionLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    transactionError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {transactionError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Transactions ({transactions && transactions.length})
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
                    <Grid item={true} xs={12} md="auto">
                        <Link to="/transaction/send-money" style={{textDecoration: 'none'}}>
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                    color: purple[600],
                                    backgroundColor: 'white',
                                    borderWidth: 2,
                                    '&:hover': {
                                        borderWidth: 2,
                                    }
                                }}
                                startIcon={<SendSharp fontSize="small" sx={{color: purple[600]}}/>}
                                variant="outlined"
                                fullWidth={true}
                                disableElevation={true}
                                size="large">
                                Transfer Money
                            </Button>
                        </Link>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {
                    transactions && transactions.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
                        <Table size="medium" aria-label="transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">User</TableCell>
                                    <TableCell align="center">Bank Account</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    transactions && transactions.map((transaction, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{
                                                    <User
                                                        lastName={transaction.user.lastName}
                                                        firstName={transaction.user.firstName}
                                                        image={transaction.user.image}
                                                    />
                                                }</TableCell>
                                                <TableCell align="center">{transaction.bankAccount.number}</TableCell>
                                                <TableCell align="center">{transaction.type}</TableCell>
                                                <TableCell
                                                    align="center"
                                                    sx={{
                                                        color: transaction.type === 'deposit' ? green[800] : red[800]
                                                    }}>${transaction.amount}</TableCell>
                                                <TableCell align="center">{renderStatus(transaction.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(transaction.updatedAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-start"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Tooltip title={`View transaction detail`}>
                                                                <Visibility
                                                                    onClick={() => navigate(`/transactions/${transaction._id}`)}
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
                    transactions && transactions.length === 0 &&
                    (
                        <Box>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="medium" sx={{minWidth: 650}} aria-label="transactions table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">Sender Account</TableCell>
                                            <TableCell align="center">Recipient Account</TableCell>
                                            <TableCell align="center">Type</TableCell>
                                            <TableCell align="center">Amount</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body1" align="center">
                                    No transactions available
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
            </Container>
        </Layout>
    )
}

export default TransactionsPage;

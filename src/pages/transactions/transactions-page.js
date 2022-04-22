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
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import { Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";

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
    const classes = useStyles();

    const renderStatus = status => {
        switch (status) {
            case 'pending':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                )
            case 'success':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'failed':
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
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {
                    transactions && transactions.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
                        <Table size="medium" aria-label="transactions table">
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
                            <TableBody>
                                {
                                    transactions && transactions.map((transaction, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{transaction.senderAccount}</TableCell>
                                                <TableCell align="center">{transaction.recipientAccount}</TableCell>
                                                <TableCell align="center">{transaction.type}</TableCell>
                                                <TableCell align="center">${transaction.amount}</TableCell>
                                                <TableCell align="center">{renderStatus(transaction.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(transaction.modifiedAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Tooltip title={`View transaction detail`}>
                                                                <Visibility
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

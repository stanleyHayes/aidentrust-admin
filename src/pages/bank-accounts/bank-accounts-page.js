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
import {selectBankAccount} from "../../redux/bank-accounts/bank-account-reducer";
import AddBankDialog from "../../components/dialogs/new/add-bank-dialog";
import ViewBankAccountDetailDialog from "../../components/dialogs/view/view-bank-account-detail-dialog";

const BankAccountsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {bankAccounts, bankAccountError, bankAccountLoading} = useSelector(selectBankAccount);
    const classes = useStyles();

    const [query, setQuery] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedBankAccount, setSelectedBankAccount] = useState(false);
    const [viewBankAccountDialogOpen, setViewBankAccountDialogOpen] = useState(false);

    const handleSelectedBankAccount = bankAccount => {
        setSelectedBankAccount(bankAccount);
        setViewBankAccountDialogOpen(true)
    }
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
            {bankAccountLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    bankAccountError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {bankAccountError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{my: 4,  mt: {xs: 8, md: 4}}} container={true} justifyContent="space-between" spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <Typography variant="h5">
                            Bank Accounts ({bankAccounts && bankAccounts.length})
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
                                        textTransform: 'capitalize'
                                    }}
                                    variant="contained">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={2}>
                        <Button
                            onClick={() => setDialogOpen(true)}
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

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>
                {
                    bankAccounts && bankAccounts.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">User</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">Number</TableCell>
                                    <TableCell align="center">Balance</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    bankAccounts && bankAccounts.length > 0 && bankAccounts.map((bankAccount, index) => {
                                        return (
                                            <TableRow
                                                hover={true}
                                                key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <User
                                                        lastName={bankAccount.user.lastName}
                                                        firstName={bankAccount.user.firstName}
                                                        image={bankAccount.user.image}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">{bankAccount.type}</TableCell>
                                                <TableCell align="center">{bankAccount.number}</TableCell>
                                                <TableCell align="center">${bankAccount.balance}</TableCell>
                                                <TableCell
                                                    align="center">{renderStatus(bankAccount.status)}</TableCell>
                                                <TableCell align="center">
                                                    {moment(bankAccount.updatedAt).fromNow()}
                                                </TableCell>
                                                <TableCell>
                                                    <Grid
                                                        container={true}
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                        spacing={1}>
                                                        <Grid item={true}>
                                                            <Visibility
                                                                sx={{cursor: 'pointer'}}
                                                                onClick={() => handleSelectedBankAccount(bankAccount)}
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
                    bankAccounts && bankAccounts.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="medium" sx={{minWidth: 650}} aria-label="admins table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">User</TableCell>
                                            <TableCell align="center">Type</TableCell>
                                            <TableCell align="center">Number</TableCell>
                                            <TableCell align="center">Balance</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box sx={{backgroundColor: purple[50]}} py={5}>
                                <Typography sx={{color: purple[500]}} variant="body2" align="center">
                                    No bank accounts available
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
                {dialogOpen && (
                    <AddBankDialog
                        handleClose={() => setDialogOpen(false)}
                        open={dialogOpen}
                    />
                )}

                {viewBankAccountDialogOpen && selectedBankAccount && (
                    <ViewBankAccountDetailDialog
                        bankAccount={selectedBankAccount}
                        handleClose={() => {
                            setSelectedBankAccount(null);
                            setViewBankAccountDialogOpen(false);
                        }}
                        open={viewBankAccountDialogOpen}
                    />
                )}
            </Container>
        </Layout>
    )
}

export default BankAccountsPage;

import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {SendSharp, Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import {purple} from "@mui/material/colors";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import ConfirmDialog from "../../components/dialogs/confirm/confirm-dialog";

const SendMoneyPage = () => {

    const [transaction, setTransfer] = useState({type: 'credit'});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});

    const {token} = useSelector(selectAuth);

    const {
        number,
        amount,
        pin,
        from,
        reason
    } = transaction;

    const handleChange = event => {
        setTransfer({...transaction, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();


    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

    const handleTransferConfirmation = () => {
        if (!from) {
            setError({error, from: 'Field required'});
            return;
        } else {
            setError({error, from: null});
        }

        if (!reason) {
            setError({error, reason: 'Field required'});
            return;
        } else {
            setError({error, reason: null});
        }

        if (!number) {
            setError({error, number: 'Field required'});
            return;
        } else {
            setError({error, number: null});
        }
        if (!pin) {
            setError({error, pin: 'Field required'});
            return;
        } else {
            setError({error, pin: null});
        }

        dispatch(TRANSACTION_ACTION_CREATORS.sendMoney(
            transaction,
            token,
            () => setConfirmDialogOpen(false),
            () => setTransfer({
                ...transaction,
                number: "",
                from: "",
                amount: "",
                pin: "",
                reason: ""
            })
        ));
    }

    const {transactionLoading, transactionError, transactionMessage} = useSelector(selectTransaction);

    return (
        <Layout>
            <Box sx={{py: {md: 0, xs: 7}}}>
                {transactionLoading && <LinearProgress color="primary" variant="query"/>}
                <Container sx={{my: {md: 2}}}>
                    {transactionError && (
                        <Alert severity="error"><AlertTitle>{transactionError}</AlertTitle></Alert>)}

                    {transactionMessage && (
                        <Alert severity="success"><AlertTitle>{transactionMessage}</AlertTitle></Alert>)}

                    <Grid
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        container={true}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4">Transfer Money</Typography>
                        </Grid>
                    </Grid>

                    <Divider light={true} sx={{my: 4}}/>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack spacing={2} direction="column">
                                        <TextField
                                            label="From"
                                            fullWidth={true}
                                            name="from"
                                            required={true}
                                            variant="outlined"
                                            value={from}
                                            error={Boolean(error.from)}
                                            helperText={error.from}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter from"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Reason"
                                            fullWidth={true}
                                            name="reason"
                                            required={true}
                                            variant="outlined"
                                            value={reason}
                                            error={Boolean(error.reason)}
                                            helperText={error.reason}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter reason"
                                            size="medium"
                                            multiline={true}
                                            minRows={2}
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Account Number"
                                            fullWidth={true}
                                            name="number"
                                            required={true}
                                            variant="outlined"
                                            value={number}
                                            error={Boolean(error.number)}
                                            helperText={error.number}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter number"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Amount"
                                            fullWidth={true}
                                            name="amount"
                                            required={true}
                                            variant="outlined"
                                            value={amount}
                                            error={Boolean(error.amount)}
                                            helperText={error.amount}
                                            type="number"
                                            color="primary"
                                            placeholder="Enter amount"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="pin">Pin</InputLabel>
                                            <OutlinedInput
                                                id="pin"
                                                label="Pin"
                                                fullWidth={true}
                                                name="pin"
                                                required={true}
                                                color="primary"
                                                placeholder="Enter pin"
                                                variant="outlined"
                                                error={Boolean(error.pin)}
                                                type={visiblePassword ? 'text' : 'password'}
                                                value={pin}
                                                onChange={handleChange}
                                                endAdornment={<InputAdornment position="end">
                                                    <IconButton
                                                        sx={{color: 'primary.main'}}
                                                        aria-label="toggle pin visibility"
                                                        onClick={() => setVisiblePassword(!visiblePassword)}
                                                        onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                                        edge="end"
                                                    >
                                                        {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>}
                                            />
                                        </FormControl>

                                        <Button
                                            onClick={() => setConfirmDialogOpen(true)}
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
                                            Transfer
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                {confirmDialogOpen && (
                    <ConfirmDialog
                        message="Are you sure you want to proceed with the payment?"
                        handleClose={() => setConfirmDialogOpen(false)}
                        open={confirmDialogOpen}
                        handleProceed={handleTransferConfirmation}
                    />
                )}
            </Box>
        </Layout>)
}

export default SendMoneyPage;

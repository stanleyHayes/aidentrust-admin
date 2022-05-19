import Layout from "../../components/layout/layout";
import {Box, Button, Card, CardContent, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {Alert, AlertTitle} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {useEffect} from "react";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {useParams} from "react-router";
import {purple} from "@mui/material/colors";
import {ChevronLeft} from "@mui/icons-material";

const TransactionDetailPage = () => {

    const {transactionDetail, transactionError, transactionLoading} = useSelector(selectTransaction);
    const dispatch = useDispatch();
    const {transactionID} = useParams();

    const {token} = useSelector(selectAuth);
    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATORS.getTransaction(transactionID, token));
    }, []);

    return (
        <Layout>
            <Box>
                {transactionLoading && <LinearProgress color="primary" variant="query"/>}
                <Container sx={{py: 8}}>
                    {transactionError && (<Alert severity="error" variant="standard">
                        <AlertTitle>Error</AlertTitle>
                        <Typography variant="h6" align="center">
                            {transactionError}
                        </Typography>
                    </Alert>)
                    }
                    <Grid
                        mb={2}
                        spacing={2}
                        container={true}
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4">Transaction Detail</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                fullWidth={true}
                                variant="text"
                                size="medium"
                                startIcon={<ChevronLeft color="primary"/>}>
                                Back
                            </Button>
                        </Grid>
                    </Grid>


                    <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                    {transactionDetail && transactionDetail.type === 'international' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">
                                                User Information
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Account Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'local' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">
                                                User Information
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Account Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'payment' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">
                                                User Information
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Account Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'deposit' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">
                                                User Information
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h5">Account Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <Box sx={{backgroundColor: purple[50]}} py={5}>
                            <Typography sx={{color: purple[600]}} variant="body1" align="center">
                                Unknown transaction
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>
        </Layout>
    )
}

export default TransactionDetailPage;

import {
    Alert,
    AlertTitle,
    Avatar,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    Call, Mail, Male, Map, Person
} from "@mui/icons-material";
import {green, grey, red} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/requests-action-creators";
import {selectRequest} from "../../redux/requests/requests-reducer";
import RejectDialog from "../../components/dialogs/reject-dialog";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import Info from "../../components/shared/info";
import Layout from "../../components/layout/layout";
import AcceptDialog from "../../components/dialogs/accept-dialog";

const RequestDetailPage = () => {

    const {requestID} = useParams();

    const {requestDetail, requestError, requestLoading} = useSelector(selectRequest);
    const {token} = useSelector(selectAuth);

    const dispatch = useDispatch();

    const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
    const [approveDialogOpen, setApproveDialogOpen] = useState(false);

    useEffect(() => {
        dispatch(REQUEST_ACTION_CREATORS.getRequest(requestID, token));
    }, [dispatch, requestID, token]);

    const handleRevokeClick = () => {
        dispatch(REQUEST_ACTION_CREATORS.revokeRequest(requestID, token));
        setRevokeDialogOpen(false);
    }


    const handleApproveClick = () => {
        dispatch(REQUEST_ACTION_CREATORS.approveRequest(requestID, token));
        setApproveDialogOpen(false)
    }

    return (
        <Layout>
            <Container sx={{my: {xs: 10, mb: 4}}}>
                <Card sx={{mb: 2}} elevation={0} variant="elevation">
                    {requestLoading && <LinearProgress variant="query" color="primary"/>}
                    <CardContent>
                        {requestError && (
                            <Alert
                                severity="error"
                                sx={{my: 2}}>
                                <AlertTitle>{requestError}</AlertTitle>
                            </Alert>)}

                        <Grid container={true} spacing={2} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md={4}>
                                <Typography variant="h5" align="center">
                                    Request Detail
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                md="auto"
                                spacing={2}
                                item={true}
                                alignItems="center"
                                container={true}>

                                <Grid item={true} xs={12} md="auto">
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            color: 'white',
                                            backgroundColor: green[800],
                                        }}
                                        disabled={(requestDetail && requestDetail.status === 'Approved') || (requestDetail && requestDetail.status === 'Revoked')}
                                        fullWidth={true}
                                        size="large"
                                        disableElevation={true}
                                        onClick={() => setApproveDialogOpen(true)}
                                        variant="contained">
                                        Approve
                                    </Button>
                                </Grid>
                                <Grid item={true} xs={12} md="auto">
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: red[600],
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: red[800], color: 'secondary.main'
                                            },
                                            '&:focus': {
                                                backgroundColor: red[800], color: 'secondary.main'
                                            },
                                            '&:active': {
                                                backgroundColor: red[800], color: 'secondary.main'
                                            },
                                        }}
                                        disabled={(requestDetail && requestDetail.status === 'Approved') || (requestDetail && requestDetail.status === 'Revoked')}
                                        fullWidth={true}
                                        size="large"
                                        disableElevation={true}
                                        onClick={() => setRevokeDialogOpen(true)}
                                        variant="contained">Revoke</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} sx={{mb: 2}}>
                            <CardContent>
                                <Stack mb={2} direction="row" justifyContent="center">
                                    <Avatar
                                        sx={{width: 100, height: 100}}
                                        src={requestDetail?.userDetails?.image}
                                    />
                                </Stack>
                                <Typography
                                    mb={2}
                                    variant="body1"
                                    align="center">
                                    {`${requestDetail?.userDetails?.firstName} ${requestDetail?.userDetails?.lastName}`}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center">
                                    {requestDetail?.status}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Button variant="text" size="small" startIcon={<Person/>}>
                                        Bank Account Details
                                    </Button>
                                </Stack>

                                <Divider light={true} sx={{my: 1}} variant="middle"/>

                                <Stack
                                    divider={<Divider light={true} variant="middle"/>}
                                    direction="column">
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account holding name"
                                        value={`${requestDetail?.userDetails?.firstName} ${requestDetail?.userDetails?.lastName}`}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Number"
                                        value={requestDetail?.bankAccountDetails?.number}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Usage"
                                        value={requestDetail?.bankAccountDetails?.usage}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Type"
                                        value={requestDetail?.bankAccountDetails?.type}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Balance"
                                        value={`$${requestDetail?.bankAccountDetails?.balance}`}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Currency"
                                        value={requestDetail?.bankAccountDetails?.currency}
                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={8}>
                        <Grid spacing={2} container={true}>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Person/>}>
                                                Personal Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Mail sx={{color: grey[600]}}/>}
                                                    title="Email"
                                                    value={requestDetail?.userDetails?.email}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Phone"
                                                    value={requestDetail?.userDetails?.phoneNumber}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Male sx={{color: grey[600]}}/>}
                                                    title="Gender"
                                                    value={requestDetail?.userDetails?.gender}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Emergency Phone"
                                                    value={requestDetail?.userDetails?.emergencyPhoneNumber}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="DOB"
                                                    value={new Date(requestDetail?.userDetails?.dateOfBirth).toLocaleDateString()}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Username"
                                                    value={requestDetail?.userDetails?.username}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Map/>}>
                                                Address Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Country"
                                                    value={requestDetail?.addressDetails?.country}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="State"
                                                    value={requestDetail?.addressDetails?.state}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="City"
                                                    value={requestDetail?.addressDetails?.city}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Address Line 1"
                                                    value={requestDetail?.addressDetails?.addressLine1}
                                                />
                                            </Grid>
                                            {requestDetail?.addressDetails?.addressLine2 && (
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Person sx={{color: grey[600]}}/>}
                                                        title="Address Line 2"
                                                        value={requestDetail?.addressDetails?.addressLine2}
                                                    />
                                                </Grid>)}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Map/>}>
                                                Payment Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Amount"
                                                    value={`${requestDetail?.paymentDetails?.amount} GHS`}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Transaction ID"
                                                    value={requestDetail?.paymentDetails?.transactionID}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Provider"
                                                    value={requestDetail?.paymentDetails?.provider}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Phone"
                                                    value={requestDetail?.paymentDetails?.paymentPhoneNumber}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {revokeDialogOpen && (
                    <RejectDialog
                        open={revokeDialogOpen}
                        handleClose={() => setRevokeDialogOpen(false)}
                        handleDelete={handleRevokeClick}
                        message="Are you sure you want to revoke this invitation?"/>)}

                {approveDialogOpen && (
                    <AcceptDialog
                        open={approveDialogOpen}
                        handleClose={() => setApproveDialogOpen(false)}
                        handleAccept={handleApproveClick}
                        message="Are you sure you want to approve this invitation?"/>)}

            </Container>
        </Layout>)
}

export default RequestDetailPage;

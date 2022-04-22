import Layout from "../../components/layout/layout";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from "@mui/material";
import {CalendarToday, Call, Edit, Male, Map, Person, Visibility} from "@mui/icons-material";
import Info from "../../components/shared/info";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {UTILS} from "../../utils/utils";
import {green, grey, purple, red} from "@mui/material/colors";
import {selectUser} from "../../redux/users/users-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import {useEffect} from "react";
import {USER_ACTION_CREATORS} from "../../redux/users/users-action-creators";
import {useParams} from "react-router";
import {selectAuth} from "../../redux/authentication/authentication-reducer";

const UserDetailPage = () => {

    const {userDetail, userLoading, userError, bankAccount, transactions, request} = useSelector(selectUser);
    const dispatch = useDispatch();

    const {token} = useSelector(selectAuth);

    const {userID} = useParams();

    useEffect(() => {
        dispatch(USER_ACTION_CREATORS.getUser(userID, token));
    }, [dispatch, token, userID]);


    const renderStatus = status => {
        switch (status) {
            case 'pending':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>)
            case 'success':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>);
            case 'failed':
                return (<Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>);
            default:
                return (<Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>);
        }
    }

    return (<Layout>
            {userLoading && <LinearProgress color="primary" variant="query"/>}
            <Container sx={{my: 4, mt: {xs: 8, mt: 4}}}>
                {userError && (<Alert severity="error" variant="standard">
                        <AlertTitle>{userError}</AlertTitle>
                    </Alert>)}
                <Grid
                    sx={{mt: {xs: 8, md: 0}}}
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    container={true}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">User Detail</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: "white",
                                backgroundColor: "primary.main",
                                '&:hover': {
                                    color: "primary.main",
                                }
                            }}
                            startIcon={<Edit fontSize="small" sx={{color: "white"}}/>}
                            variant="outlined"
                            fullWidth={true}
                            disableElevation={true}
                            size="large">
                            Update User
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} sx={{mb: 2}}>
                            <CardContent>
                                <Stack mb={2} direction="row" justifyContent="center">
                                    {userDetail && userDetail.image ? (<Avatar
                                            src={userDetail.image}
                                            sx={{height: 150, width: 150, objectFit: 'cover', objectPosition: 'center'}}
                                        />) : (<Avatar
                                            sx={{
                                                width: 110, height: 110, backgroundColor: purple[50]
                                            }}>
                                            <Typography
                                                sx={{color: purple[600]}}
                                                variant="h4"
                                                align="center">
                                                {userDetail && UTILS.getInitials(`${userDetail.firstName} ${userDetail.lastName}`)}
                                            </Typography>
                                        </Avatar>)}
                                </Stack>
                                <Typography
                                    mb={2}
                                    sx={{color: grey[600]}}
                                    variant="h6"
                                    align="center">
                                    {userDetail && `${userDetail.firstName} ${userDetail.lastName}`}
                                </Typography>
                                <Typography
                                    mb={2}
                                    variant="body2"
                                    align="center">
                                    {userDetail && userDetail.email}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center">
                                    {userDetail && userDetail.status}
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
                                        value={`${userDetail && userDetail.firstName} ${userDetail && userDetail.lastName}`}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Number"
                                        value={bankAccount && bankAccount.number}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Usage"
                                        value={bankAccount && bankAccount.usage}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Type"
                                        value={bankAccount && bankAccount.type}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Balance"
                                        value={`$${bankAccount && bankAccount.balance}`}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Currency"
                                        value={bankAccount && bankAccount.currency}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Status"
                                        value={bankAccount && bankAccount.status}
                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid item={true} xs={12}>
                            <Card sx={{mb: 2}} elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            color="primary"
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Person/>}>
                                            Contact Details
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1.5}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Call sx={{color: "primary.main"}}/>}
                                                title="Emergency Phone"
                                                value={userDetail && userDetail.emergencyPhoneNumber}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Call sx={{color: "primary.main"}}/>}
                                                title="Phone"
                                                value={userDetail && userDetail.phoneNumber}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<CalendarToday sx={{color: "primary.main"}}/>}
                                                title="Joined"
                                                value={userDetail && moment(userDetail.createdAt).fromNow()}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Person sx={{color: "primary.main"}}/>}
                                                title="Username"
                                                value={userDetail && userDetail.username}
                                            />
                                        </Grid>

                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<CalendarToday sx={{color: "primary.main"}}/>}
                                                title="Date of Birth"
                                                value={userDetail && new Date(userDetail.dateOfBirth).toDateString()}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Male sx={{color: "primary.main"}}/>}
                                                title="Gender"
                                                value={userDetail && userDetail.gender}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card sx={{mb: 2}} elevation={0}>
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
                                                value={userDetail?.address?.country}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="State"
                                                value={userDetail?.address?.state}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="City"
                                                value={userDetail?.address?.city}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Address Line 1"
                                                value={userDetail?.address?.addressLine1}
                                            />
                                        </Grid>
                                        {userDetail?.address?.addressLine2 && (<Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Address Line 2"
                                                value={userDetail.address.addressLine2}
                                            />
                                        </Grid>)}
                                    </Grid>
                                </CardContent>
                            </Card>
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
                                                title="Amount (GHS)"
                                                value={request?.paymentDetails?.amount}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Transaction ID"
                                                value={request?.paymentDetails?.transactionID}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Network Provider"
                                                value={request?.paymentDetails?.provider}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Date"
                                                value={moment(request?.createdAt).fromNow()}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            User Transactions ({transactions && transactions.length})
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{mb: 2}}/>

                {transactions && transactions.length > 0 && <TableContainer component={Paper} elevation={0}>
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
                            {transactions && transactions.map((transaction, index) => {
                                return (<TableRow
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
                                    </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>}

                {transactions && transactions.length === 0 && (<Box>
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
                    </Box>)}
            </Container>
        </Layout>)
}

export default UserDetailPage;

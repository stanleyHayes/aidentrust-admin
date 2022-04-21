import Layout from "../../components/layout/layout";
import {
    Alert, AlertTitle,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    Grid, LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {LoadingButton} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import validator from "validator";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/authentication-action-creators";
import {useNavigate} from "react-router";

const SettingsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16, paddingBottom: 16
            }
        }
    });

    const classes = useStyles();

    const {authLoading, token, authData, authError} = useSelector(selectAuth);

    useEffect(() => {
        if (authData) setUser(authData);
    }, [authData]);


    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const {
        firstName, lastName, email, username, phoneNumber, emergencyPhoneNumber
    } = user;


    const handleUserChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (!firstName) {
            setError({error, firstName: 'Field required'});
            return;
        } else {
            setError({error, firstName: null});
        }

        if (!lastName) {
            setError({error, lastName: 'Field required'});
            return;
        } else {
            setError({error, lastName: null});
        }

        if (!email) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }
        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!phoneNumber) {
            setError({error, phoneNumber: 'Field required'});
            return;
        } else {
            setError({error, phoneNumber: null});
        }

        if (!validator.isMobilePhone(phoneNumber)) {
            setError({error, phoneNumber: 'Invalid phone'});
            return;
        } else {
            setError({error, phoneNumber: null});
        }


        if (!emergencyPhoneNumber) {
            setError({error, emergencyPhoneNumber: 'Field required'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }
        if (!validator.isMobilePhone(emergencyPhoneNumber)) {
            setError({error, emergencyPhoneNumber: 'Invalid phone'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }
        dispatch(AUTH_ACTION_CREATORS.updateProfile(
            { firstName, lastName, email, username, phoneNumber, emergencyPhoneNumber},
            token, navigate));
    }


    return (
        <Layout>
            {authLoading && <LinearProgress variant="query" color="primary"/>}
            <Container className={classes.container}>
                <Grid
                    sx={{my: 4}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Update Profile
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid
                    spacing={2}
                    container={true}
                    justifyContent="space-between">
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            {authLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                {
                                    authError && (
                                        <Alert sx={{mb: 2}} severity="error">
                                            <AlertTitle>{authError}</AlertTitle>
                                        </Alert>
                                    )
                                }
                                <Stack spacing={2} direction="column">
                                    <TextField
                                        label="First Name"
                                        fullWidth={true}
                                        name="firstName"
                                        required={true}
                                        variant="outlined"
                                        value={authData && firstName}
                                        error={Boolean(error.firstName)}
                                        helperText={error.firstName}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter first name"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Last Name"
                                        fullWidth={true}
                                        name="lastName"
                                        required={true}
                                        variant="outlined"
                                        value={lastName}
                                        error={Boolean(error.lastName)}
                                        helperText={error.lastName}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter last name"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Email"
                                        fullWidth={true}
                                        name="email"
                                        required={true}
                                        variant="outlined"
                                        value={email}
                                        error={Boolean(error.email)}
                                        helperText={error.email}
                                        type="email"
                                        size="medium"
                                        placeholder="Enter email"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Username"
                                        fullWidth={true}
                                        name="username"
                                        required={true}
                                        variant="outlined"
                                        value={username}
                                        error={Boolean(error.username)}
                                        helperText={error.username}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter username"
                                        onChange={handleUserChange}
                                    />


                                    <TextField
                                        label="Phone"
                                        fullWidth={true}
                                        name="phoneNumber"
                                        required={true}
                                        variant="outlined"
                                        value={phoneNumber}
                                        error={Boolean(error.phoneNumber)}
                                        helperText={error.phoneNumber}
                                        type="tel"
                                        size="medium"
                                        placeholder="Enter phone number"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Emergency Phone"
                                        fullWidth={true}
                                        name="emergencyPhone"
                                        required={true}
                                        variant="outlined"
                                        value={emergencyPhoneNumber}
                                        error={Boolean(error.emergencyPhoneNumber)}
                                        helperText={error.emergencyPhoneNumber}
                                        type="tel"
                                        size="medium"
                                        onChange={handleUserChange}
                                    />

                                    <LoadingButton
                                        loading={authLoading}
                                        loadingIndicator={<CircularProgress size="small" color="secondary"/>}
                                        onClick={handleSubmit}
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            py: 1.5,
                                        }}
                                        size="large"
                                        fullWidth={true}
                                        disableElevation={true}
                                        variant="contained">
                                        Update Profile
                                    </LoadingButton>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>)
}

export default SettingsPage;

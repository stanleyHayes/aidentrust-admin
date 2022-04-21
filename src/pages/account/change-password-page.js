import {
    Alert, AlertTitle,
    Card,
    CardContent, CircularProgress,
    Container, Divider,
    FormControl,
    Grid, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {LoadingButton} from "@mui/lab";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/authentication-action-creators";

const ChangePasswordPage = () => {

    const [passwords, setPasswords] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [confirmVisiblePassword, setConfirmVisiblePassword] = useState(false);
    const [currentVisiblePassword, setCurrentVisiblePassword] = useState(false);
    const {confirmPassword, password, currentPassword} = passwords;
    const [error, setError] = useState({});

    const handleChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const {authError, authLoading, token, message} = useSelector(selectAuth);

    const dispatch = useDispatch();


    const handleSubmit = event => {
        if (!currentPassword) {
            setError({error, currentPassword: 'Current password field required'});
            return;
        } else {
            setError({error, currentPassword: null});
        }


        if (!password) {
            setError({error, password: 'New password field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!validator.isStrongPassword(password)) {
            setError({error, password: 'Enter strong password'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!confirmPassword) {
            setError({error, confirmPassword: 'Confirm password field required'});
            return;
        } else {
            setError({error, confirmPassword: null});
        }

        if (password !== confirmPassword) {
            setError({error, confirmPassword: 'Password mismatch', password: 'Password mismatch'});
            return;
        } else {
            setError({error, confirmPassword: null, password: null});
        }

        dispatch(AUTH_ACTION_CREATORS.changePassword({currentPassword, password}, token));
        setPasswords({password: '', currentPassword: '', confirmPassword: ''});
    }


    return (
        <Layout>
            <Container>
                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    alignItems="center"
                    justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography gutterBottom={true} align="center" variant="h4">
                            Change Password
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true}>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={0}>
                            {authLoading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                {
                                    authError && (
                                        <Alert severity="error">
                                            <AlertTitle>{authError}</AlertTitle>
                                        </Alert>
                                    )
                                }
                                {
                                    message && (
                                        <Alert severity="success">
                                            <AlertTitle>{message}</AlertTitle>
                                        </Alert>
                                    )
                                }

                                {
                                    error.currentPassword && (
                                        <Alert severity="error">
                                            <AlertTitle>{error.currentPassword}</AlertTitle>
                                        </Alert>
                                    )
                                }

                                {
                                    error.password && (
                                        <Alert severity="error">
                                            <AlertTitle>{error.password}</AlertTitle>
                                        </Alert>
                                    )
                                }

                                {
                                    error.confirmPassword && (
                                        <Alert severity="error">
                                            <AlertTitle>{error.confirmPassword}</AlertTitle>
                                        </Alert>
                                    )
                                }
                                <Stack my={3} spacing={2} direction="column">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
                                        <OutlinedInput
                                            id="currentPassword"
                                            label="Current Password"
                                            fullWidth={true}
                                            name="currentPassword"
                                            required={true}
                                            variant="outlined"
                                            size="medium"
                                            placeholder="Enter current password"
                                            error={Boolean(error.currentPassword)}
                                            type={currentVisiblePassword ? 'text' : 'password'}
                                            value={currentPassword}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                        onMouseDown={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                        edge="end">
                                                        {currentVisiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="password">New Password</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            label="Enter Password"
                                            fullWidth={true}
                                            name="password"
                                            required={true}
                                            size="medium"
                                            placeholder="Enter a password"
                                            variant="outlined"
                                            error={Boolean(error.password)}
                                            type={visiblePassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setVisiblePassword(!visiblePassword)}
                                                        onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                                        edge="end">
                                                        {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            fullWidth={true}
                                            name="confirmPassword"
                                            required={true}
                                            placeholder="Confirm password"
                                            variant="outlined"
                                            size="medium"
                                            error={Boolean(error.confirmPassword)}
                                            type={confirmVisiblePassword ? 'text' : 'password'}
                                            value={confirmPassword}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setConfirmVisiblePassword(!confirmVisiblePassword)}
                                                        onMouseDown={() => setConfirmVisiblePassword(!confirmVisiblePassword)}
                                                        edge="end"
                                                    >
                                                        {confirmVisiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Stack>

                                <LoadingButton
                                    onClick={handleSubmit}
                                    loading={authLoading}
                                    loadingIndicator={<CircularProgress color="secondary" size={20} />}
                                    startIcon={authLoading && <CircularProgress color="secondary" size={20} />}
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize',
                                        py: 1.5
                                    }}
                                    disableElevation={true}
                                    size="large"
                                    fullWidth={true}
                                    variant="contained">
                                    Change Password
                                </LoadingButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ChangePasswordPage;

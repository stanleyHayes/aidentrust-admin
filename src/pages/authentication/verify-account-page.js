import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {LoadingButton} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/authentication-action-creators";
import {useState} from "react";

const VerifyAccountPage = () => {

    const {token, code} = useParams();
    const dispatch = useDispatch();

    const [error, setError] = useState("");
    const [otp, setOTP] = useState(code);

    const {authLoading, authError} = useSelector(selectAuth);
    const navigate = useNavigate();

    const handleVerifyClick = event => {
        event.preventDefault();
        if (!otp) {
            setError("Field required");
            return;
        } else {
            setError(null);
        }

        dispatch(AUTH_ACTION_CREATORS.verifyAccount({otp}, token, navigate));
    }


    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '100vw',
                minHeight: '100vh',
                alignItems: "center",
                backgroundColor: 'background.default'
            }}>
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} md={4} lg={3}>
                    <Container>
                        <Card elevation={0} variant="elevation">
                            {authLoading && <LinearProgress variant="query" color="secondary"/>}
                            <CardContent>
                                {authError && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                                    <AlertTitle>{authError}</AlertTitle>
                                </Alert>)}
                                <Typography
                                    sx={{
                                        color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase'
                                    }}
                                    gutterBottom={true}
                                    align="center"
                                    variant="h4">
                                    Aiden Trust Admin
                                </Typography>

                                <Typography mb={1} variant="h6" align="center">Verify Account</Typography>


                                <Box mb={4}>
                                    <TextField
                                        label="OTP"
                                        fullWidth={true}
                                        name="otp"
                                        required={true}
                                        variant="outlined"
                                        value={otp}
                                        error={Boolean(error)}
                                        helperText={error}
                                        type="password"
                                        color="secondary"
                                        placeholder="Enter otp"
                                        size="medium"
                                        onChange={event => setOTP(event.target.value)}
                                    />

                                </Box>

                                <LoadingButton
                                    onClick={handleVerifyClick}
                                    loading={authLoading}
                                    loadingIndicator={<CircularProgress size="small" color="secondary"/>}
                                    loadingPosition="start"
                                    startIcon={authLoading &&
                                        <CircularProgress size="small" color="secondary"/>}
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        '&:hover': {
                                            color: 'secondary.main'
                                        },
                                        '&:focus': {
                                            color: 'secondary.main'
                                        },
                                        '&:active': {
                                            color: 'secondary.main'
                                        },
                                    }}
                                    size="large"
                                    variant="contained"
                                    disableElevation={true}
                                    fullWidth={true}>
                                    Verify Account
                                </LoadingButton>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default VerifyAccountPage;

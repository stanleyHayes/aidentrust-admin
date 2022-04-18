import {
    Box,
    Button,
    Container, FormControl,
    IconButton, InputAdornment, InputLabel, LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import {grey} from "@mui/material/colors";

const LoginPage = () => {
    const [user, setUser] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {email, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none'
            },
            auth: {
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%'
            }
        }
    });
    const {authLoading, authError} = useSelector(selectAuth);

    const classes = useStyles();

    const handleSubmit = () => {
        if (!email) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!password) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }

        console.log(email, password);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '100%',
                minHeight: '100vh',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                }
            }}>
            <Box
                sx={{
                    minHeight: '100%',
                    flex: 1,
                    backgroundColor: 'background.paper',
                    order: {
                        xs: 1,
                        md: 0
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Container maxWidth="sm" sx={{my: 3}}>
                    {authLoading && <LinearProgress variant="query" color="primary"/>}
                    {
                        authError && (
                            <Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                                <AlertTitle> {authError}</AlertTitle>
                            </Alert>
                        )
                    }
                    <Typography
                        sx={{color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase'}}
                        gutterBottom={true}
                        align="center"
                        variant="h3">
                        Aiden Trust
                    </Typography>
                    <Typography gutterBottom={true} align="center" variant="h6">Login</Typography>
                    <Typography gutterBottom={true} align="center" variant="body2">Welcome back</Typography>

                    <Stack my={3} spacing={2} direction="column">
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
                            placeholder="Enter email"
                            size="medium"
                            onChange={handleChange}
                        />
                        <Box my={2}>
                            <Link className={classes.link} to="/auth/forgot-password">
                                <Button
                                    sx={{
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        color: grey[600]
                                    }}
                                    variant="text" size="large">
                                    Forgot Password
                                </Button>
                            </Link>

                        </Box>

                        <FormControl variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                label="Password"
                                fullWidth={true}
                                name="password"
                                required={true}
                                placeholder="Enter password"
                                variant="outlined"
                                error={Boolean(error.password)}
                                helperText={error.password}
                                type={visiblePassword ? 'text' : 'password'}
                                value={password}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setVisiblePassword(!visiblePassword)}
                                            onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                            edge="end"
                                        >
                                            {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Stack>

                    <Button
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                                color: 'primary.main'
                            },
                            '&:focus': {
                                color: 'primary.main'
                            },
                            '&:active': {
                                color: 'primary.main'
                            }
                        }}
                        onClick={handleSubmit}
                        size="large"
                        disabled={authLoading}
                        fullWidth={true}
                        variant="outlined">
                        Login
                    </Button>

                </Container>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    order: {
                        xs: 0,
                        md: 1
                    }
                }}>
                <img className={classes.auth} src="/assets/images/auth.png" alt=""/>
            </Box>
        </Box>
    )
}

export default LoginPage;

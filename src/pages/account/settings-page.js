import Layout from "../../components/layout/layout";
import {
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
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {DatePicker} from "@mui/lab";
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/users/users-reducer";

const SettingsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16
            }
        }
    });

    const classes = useStyles();

    const {userDetail, userLoading, userError} = useSelector(selectUser);

    useEffect(() => {
        if (userDetail) setUser(userDetail);
    }, [userDetail]);

    const [passwords, setPasswords] = useState({});
    const [user, setUser] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [confirmVisiblePassword, setConfirmVisiblePassword] = useState(false);
    const [currentVisiblePassword, setCurrentVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {confirmPassword, password, currentPassword} = passwords;
    const {
        firstName,
        lastName,
        email,
        username,
        phoneNumber,
        emergencyPhoneNumber,
        gender,
        dateOfBirth
    } = user;

    const handlePasswordChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const handleUserChange = event => {
        setPasswords({...user, [event.target.name]: event.target.value});
    }

    return (
        <Layout>
            <Container className={classes.container}>

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Settings
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid
                    spacing={2}
                    container={true}
                    justifyContent="space-between">
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1}>
                            <CardContent>
                                <Typography
                                    mb={4}
                                    variant="h5"
                                    align="center">
                                    Update Profile
                                </Typography>
                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="First Name"
                                        fullWidth={true}
                                        name="firstName"
                                        required={true}
                                        variant="outlined"
                                        value={userDetail && firstName}
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

                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="gender-label">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label"
                                            label="Gender"
                                            name="gender"
                                            id="gender"
                                            onChange={handleUserChange}
                                            fullWidth={true}
                                            value={gender}>
                                            <MenuItem value="">Select Gender</MenuItem>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                        </Select>
                                    </FormControl>


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

                                    <Box>
                                        <DatePicker
                                            rawValue={dateOfBirth}
                                            label="Date of birth"
                                            value={dateOfBirth}
                                            onChange={(date) => {
                                                setUser({...user, 'dateOfBirth': date})
                                            }}
                                            renderInput={
                                                (params) =>
                                                    <TextField
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        placeholder="Date of birth"
                                                        margin="normal"
                                                        label="Start Date" {...params} />}
                                            date={dateOfBirth}
                                        />
                                    </Box>
                                </Stack>

                                <Button
                                    sx={{backgroundColor: 'primary.main', color: 'white'}}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Update Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1}>
                            <CardContent>
                                <Typography
                                    align="center"
                                    mb={4}
                                    variant="h5">Change Password</Typography>
                                <Stack my={3} spacing={2} direction="column">
                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
                                        <OutlinedInput
                                            id="currentPassword"
                                            label="Current Password"
                                            fullWidth={true}
                                            name="confirmPassword"
                                            required={true}
                                            variant="outlined"
                                            placeholder="Enter current password"
                                            error={Boolean(error.currentPassword)}
                                            helperText={error.currentPassword}
                                            type={visiblePassword ? 'text' : 'password'}
                                            value={currentPassword}
                                            onChange={handlePasswordChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                        onMouseDown={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                        edge="end"
                                                    >
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
                                            placeholder="Enter a password"
                                            variant="outlined"
                                            error={Boolean(error.password)}
                                            helperText={error.password}
                                            type={visiblePassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={handlePasswordChange}
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
                                            error={Boolean(error.confirmPassword)}
                                            helperText={error.confirmPassword}
                                            type={confirmVisiblePassword ? 'text' : 'password'}
                                            value={confirmPassword}
                                            onChange={handlePasswordChange}
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

                                <Button
                                    sx={{backgroundColor: 'primary.main', color: 'white'}}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Change Password
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default SettingsPage;

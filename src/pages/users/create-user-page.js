import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Alert, AlertTitle, DatePicker} from "@mui/lab";
import {ChevronLeft, Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router";
import {selectUser} from "../../redux/users/users-reducer";

const CreateUserPage = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [transactionPermission, setTransactionPermission] = useState({
        transactionCreate: true,
        transactionRead: true,
        transactionUpdate: false,
        transactionDelete: false
    });

    const {transactionCreate, transactionRead, transactionUpdate, transactionDelete} = transactionPermission;
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        dateOfBirth,
        gender,
        phoneNumber,
        emergencyPhone,
        funds
    } = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handlePermissionChange = event => {
        setTransactionPermission({...transactionPermission, [event.target.name]: event.target.checked})
    }

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const {userError, userLoading} = useSelector(selectUser);
    const classes = useStyles();

    const navigate = useNavigate();

    return (
        <Layout>
            {userLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    userError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {userError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    alignItems="center"
                    justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                fontSize: 16
                            }}
                            color="primary"
                            mb={4}
                            size="large"
                            startIcon={<ChevronLeft fontSize="medium"/>} variant="text">
                            Back
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography gutterBottom={true} align="center" variant="h4">
                            New User
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    User Information
                                </Typography>
                                <Stack direction="column" spacing={2}>
                                    <TextField
                                        label="First Name"
                                        fullWidth={true}
                                        name="firstName"
                                        required={true}
                                        variant="outlined"
                                        value={firstName}
                                        error={Boolean(error.firstName)}
                                        helperText={error.firstName}
                                        type="text"
                                        size="small"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Last name"
                                        fullWidth={true}
                                        name="lastName"
                                        required={true}
                                        variant="outlined"
                                        value={lastName}
                                        error={Boolean(error.lastName)}
                                        helperText={error.lastName}
                                        type="text"
                                        size="small"
                                        onChange={handleChange}
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
                                        size="small"
                                        onChange={handleChange}
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
                                        size="small"
                                        onChange={handleChange}
                                    />

                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="gender-label">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label"
                                            label="Gender"
                                            name="gender"
                                            id="gender"
                                            onChange={handleChange}
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
                                        size="small"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Emergency Phone"
                                        fullWidth={true}
                                        name="emergencyPhone"
                                        required={true}
                                        variant="outlined"
                                        value={emergencyPhone}
                                        error={Boolean(error.emergencyPhone)}
                                        helperText={error.emergencyPhone}
                                        type="tel"
                                        size="small"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Funds"
                                        fullWidth={true}
                                        name="funds"
                                        required={true}
                                        variant="outlined"
                                        value={funds}
                                        error={Boolean(error.funds)}
                                        helperText={error.funds}
                                        type="number"
                                        size="small"
                                        onChange={handleChange}
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

                                    <FormControl variant="outlined">
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            label="Password"
                                            fullWidth={true}
                                            name="password"
                                            required={true}
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

                                    <Button size="large" variant="contained">Create User</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    User Permissions
                                </Typography>

                                <Grid spacing={1} container={true} justifyContent="flex-start" alignItems="center">
                                    <Grid xs={12} item={true}>
                                        <Typography variant="body1">Transaction</Typography>
                                    </Grid>
                                    <Grid xs={6} md="auto" item={true}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="transactionCreate"
                                                    onChange={handlePermissionChange}
                                                    checked={transactionCreate}
                                                />
                                            }
                                            label={<Typography variant="body2">Create</Typography>}
                                        />
                                    </Grid>
                                    <Grid xs={6} md="auto" item={true}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="transactionRead"
                                                    onChange={handlePermissionChange}
                                                    checked={transactionRead}
                                                />
                                            }
                                            label={<Typography variant="body2">Read</Typography>}
                                        />
                                    </Grid>
                                    <Grid xs={6} md="auto" item={true}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="transactionUpdate"
                                                    onChange={handlePermissionChange}
                                                    checked={transactionUpdate}
                                                />
                                            }
                                            label={<Typography variant="body2">Update</Typography>}
                                        />
                                    </Grid>
                                    <Grid xs={6} md="auto" item={true}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="transactionDelete"
                                                    onChange={handlePermissionChange}
                                                    checked={transactionDelete}
                                                />
                                            }
                                            label={<Typography variant="body2">Delete</Typography>}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default CreateUserPage;

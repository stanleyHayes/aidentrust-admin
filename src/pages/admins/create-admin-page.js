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

    const [admin, setAdmin] = useState({});
    const [error, setError] = useState({});

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [transactionPermission, setTransactionPermission] = useState({
        transactionCreate: true,
        transactionRead: true,
        transactionUpdate: false,
        transactionDelete: false
    });

    const [userPermission, setUserPermission] = useState({
        userCreate: true,
        userRead: true,
        userUpdate: false,
        userDelete: false
    });

    const [adminPermission, setAdminPermission] = useState({
        adminCreate: true,
        adminRead: true,
        adminUpdate: false,
        adminDelete: false
    });

    const [fundingPermission, setFundingPermission] = useState({
        fundingCreate: true,
        fundingRead: true,
        fundingUpdate: false,
        fundingDelete: false
    });

    const [invitationPermission, setInvitationPermission] = useState({
        invitationCreate: true,
        invitationRead: true,
        invitationUpdate: false,
        invitationDelete: false
    });

    const [permissionPermission, setPermissionPermission] = useState({
        permissionCreate: true,
        permissionRead: true,
        permissionUpdate: false,
        permissionDelete: false
    });

    const [requestPermission, setRequestPermission] = useState({
        requestCreate: true,
        requestRead: true,
        requestUpdate: false,
        requestDelete: false
    });

    const {transactionCreate, transactionRead, transactionUpdate, transactionDelete} = transactionPermission;
    const {userCreate, userRead, userUpdate, userDelete} = userPermission;
    const {adminCreate, adminRead, adminUpdate, adminDelete} = adminPermission;
    const {fundingCreate, fundingRead, fundingUpdate, fundingDelete} = fundingPermission;
    const {invitationCreate, invitationRead,invitationUpdate, invitationDelete} = invitationPermission;
    const {permissionCreate, permissionRead, permissionUpdate, permissionDelete} = permissionPermission;
    const {requestCreate, requestRead, requestUpdate, requestDelete} = requestPermission;
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        dateOfBirth,
        gender,
        phoneNumber,
        emergencyPhoneNumber,
    } = admin;

    const handleChange = event => {
        setAdmin({...admin, [event.target.name]: event.target.value});
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
                            New Admin
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    Admin Information
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
                                        name="phone"
                                        required={true}
                                        variant="outlined"
                                        value={phoneNumber}
                                        error={Boolean(error.phone)}
                                        helperText={error.phone}
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
                                        value={emergencyPhoneNumber}
                                        error={Boolean(error.emergencyPhone)}
                                        helperText={error.emergencyPhone}
                                        type="tel"
                                        size="small"
                                        onChange={handleChange}
                                    />

                                    <Box>
                                        <DatePicker
                                            rawValue={dateOfBirth}
                                            label="Date of birth"
                                            value={dateOfBirth}
                                            onChange={(date) => {
                                                setAdmin({...admin, 'dateOfBirth': date})
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

                                    <Button size="large" variant="contained">Create Admin</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography gutterBottom={true} align="center" variant="h6">
                                    Admin Permissions
                                </Typography>

                                <Stack
                                    spacing={0.5}
                                    direction="column"
                                    divider={<Divider light={true} variant="fullWidth" />}>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
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


                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">User</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="userCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={userCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="userRead"
                                                        onChange={handlePermissionChange}
                                                        checked={userRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="userUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={userUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="userDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={userDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Admin</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={adminCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminRead"
                                                        onChange={handlePermissionChange}
                                                        checked={adminRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={adminUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="adminDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={adminDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Funding</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="fundingCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={fundingCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="fundingRead"
                                                        onChange={handlePermissionChange}
                                                        checked={fundingRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="fundingUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={fundingUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="fundingDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={fundingDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Invitation</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={invitationCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationRead"
                                                        onChange={handlePermissionChange}
                                                        checked={invitationRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={invitationUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="invitationDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={invitationDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Permission</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionRead"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        spacing={1}
                                        container={true}
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <Grid xs={12} item={true}>
                                            <Typography variant="body1">Request</Typography>
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionCreate"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionCreate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Create</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionRead"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionRead}
                                                    />
                                                }
                                                label={<Typography variant="body2">Read</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionUpdate"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionUpdate}
                                                    />
                                                }
                                                label={<Typography variant="body2">Update</Typography>}
                                            />
                                        </Grid>
                                        <Grid xs={6} md="auto" item={true}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="permissionDelete"
                                                        onChange={handlePermissionChange}
                                                        checked={permissionDelete}
                                                    />
                                                }
                                                label={<Typography variant="body2">Delete</Typography>}
                                            />
                                        </Grid>
                                    </Grid>

                                </Stack>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Layout>
    )
}

export default CreateUserPage;

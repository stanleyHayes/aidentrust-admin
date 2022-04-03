import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../../redux/users/users-reducer";
import User from "../../shared/user";

const AddBankDialog = ({open, handleClose}) => {

    const [bank, setBank] = useState({});
    const [error, setError] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const {number, type, usage, balance} = bank;

    const {users, userLoading} = useSelector(selectUser);

    const handleChange = event => {
        setBank({...bank, [event.target.name]: event.target.value});
    }

    const handleFilteredUsers = (options, state) => {
        let filtered = options.filter(option => {
            return option.firstName.toLowerCase().includes(searchQuery.toLowerCase())
                ||
                option.firstName.toLowerCase().includes(searchQuery.toLowerCase());

        });
        setFilteredUsers(filtered);
        return filtered;
    }

    const handleGetOptionsLabel = (option) => {
        return `${option.firstName} ${option.lastName} (${option.username})`;
    }

    useEffect(() => {
        if (users) setFilteredUsers([...users]);
    }, [users]);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogContent>
                <Typography mb={4} variant="h6" align="center">
                    New Bank Account
                </Typography>


                <Stack direction="column" spacing={2}>

                    <Autocomplete
                        getOptionLabel={handleGetOptionsLabel}
                        onInputChange={event => setSearchQuery(event.target.value)}
                        autoComplete={true}
                        limitTags={5}
                        noOptionsText={<Typography variant="body2">No users found</Typography>}
                        loading={userLoading}
                        loadingText={<Typography variant="body2">Loading users</Typography>}
                        fullWidth={true}
                        size="small"
                        name="user"
                        options={filteredUsers}
                        renderOption={(props, option) => {
                            return (
                                <Box  {...props}>
                                    <User
                                        lastName={option.lastName}
                                        firstName={option.firstName}
                                        image={option.image}
                                    />
                                </Box>
                            )
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                size="small"
                                fullWidth={true}
                                variant="outlined"
                                label="Select User"/>}
                    />

                    <TextField
                        label="Number"
                        fullWidth={true}
                        name="number"
                        required={true}
                        variant="outlined"
                        value={number}
                        error={Boolean(error.number)}
                        helperText={error.number}
                        type="text"
                        size="small"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Balance"
                        fullWidth={true}
                        name="balance"
                        required={true}
                        variant="outlined"
                        value={balance}
                        error={Boolean(error.balance)}
                        helperText={error.balance}
                        type="number"
                        size="small"
                        onChange={handleChange}
                    />

                    <Select
                        margin="dense"
                        name="type"
                        label="Type"
                        onChange={handleChange}
                        fullWidth={true}
                        variant="outlined"
                        size="small"
                        defaultValue="Checkings"
                        value={type}>
                        <MenuItem value="Checkings">Checkings</MenuItem>
                        <MenuItem value="Savings">Savings</MenuItem>
                    </Select>

                    <Select
                        margin="dense"
                        name="usage"
                        label="Usage"
                        onChange={handleChange}
                        fullWidth={true}
                        variant="outlined"
                        size="small"
                        defaultValue="Personal"
                        value={usage}>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                    </Select>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            onClick={handleClose}
                            sx={{fontWeight: 'bold', color: 'primary.main'}}
                            color="primary"
                            variant="outlined"
                            fullWidth={true}
                            size="medium">
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            sx={{fontWeight: 'bold', color: 'white'}}
                            color="primary"
                            disableElevation={true}
                            variant="contained"
                            fullWidth={true}
                            size="medium">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default AddBankDialog;

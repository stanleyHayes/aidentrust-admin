import {
    Alert,
    AlertTitle,
    Button, CircularProgress,
    Dialog,
    DialogContent,
    LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import validator from "validator/es";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../../redux/authentication/authentication-reducer";
import {REQUEST_ACTION_CREATORS} from "../../../redux/requests/requests-action-creators";
import {selectRequest} from "../../../redux/requests/requests-reducer";
import {LoadingButton} from "@mui/lab";

const UserInvitationDialog = ({open, handleClose}) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = event => {
        setEmail(event.target.value);
    }

    const dispatch = useDispatch();
    const {token} = useSelector(selectAuth);

    const handleSubmit = () => {
        if (!email) {
            setError("Email required");
            return;
        } else {
            setError("");
        }

        if (!validator.isEmail(email)) {
            setError("Email is invalid");
            return;
        } else {
            setError("");
        }
        dispatch(REQUEST_ACTION_CREATORS.createRequest({email}, token, handleClose));
    }

    const {requestLoading, requestError} = useSelector(selectRequest);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            {requestLoading && <LinearProgress color="primary" variant="query"/>}
            <DialogContent>
                {requestError && (
                    <Alert severity="error"><AlertTitle>{requestError}</AlertTitle></Alert>
                )}
                <Typography mb={2} variant="h4" align="center">
                    Invite User
                </Typography>

                <Stack direction="column" spacing={2}>
                    <TextField
                        label="Email"
                        fullWidth={true}
                        name="email"
                        required={true}
                        variant="outlined"
                        value={email}
                        error={Boolean(error)}
                        helperText={error}
                        type="email"
                        size="medium"
                        onChange={handleChange}
                    />
                    <LoadingButton
                        loading={requestLoading}
                        loadingPosition="start"
                        loadingIndicator={<CircularProgress color="secondary" size={20}/>}
                        onClick={handleSubmit}
                        sx={{color: 'secondary.main', py: 1.7, textTransform: 'capitalize'}}
                        color="primary"
                        disableElevation={true}
                        variant="contained"
                        fullWidth={true}
                        size="large">
                        Invite
                    </LoadingButton>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default UserInvitationDialog;

import {Button, Dialog, DialogContent, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import validator from "validator/es";

const InviteAdminDialog = ({open, handleClose}) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = event => {
        setEmail(event.target.value);
    }

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
        console.log(email);
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogContent>
                <Typography mb={2} variant="h4" align="center">
                    Invite Admin
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
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            color: 'white',
                            my: 2, textTransform: 'capitalize'
                        }}
                        color="primary"
                        disableElevation={true}
                        variant="contained"
                        fullWidth={true}
                        size="large">
                        Invite
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default InviteAdminDialog;

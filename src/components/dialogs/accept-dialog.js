import {Button, Dialog, DialogActions, DialogContent, Divider, Grid, Stack, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

const AcceptDialog = ({open, handleClose, handleAccept, message}) => {
    return (<Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Stack direction="column" mb={2} justifyContent="center" alignItems="center">
                    <CheckCircle color="success"/>
                </Stack>
                <Typography mb={2} variant="h5" align="center">
                    Approve
                </Typography>
                <Typography align="center" variant="body2">
                    {message}
                </Typography>
            </DialogContent>
            <Divider variant="fullWidth" light={true}/>
            <DialogActions>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={6}>
                        <Button onClick={handleClose} variant="text" size="large" fullWidth={true}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button onClick={handleAccept} color="success" variant="text" size="large" fullWidth={true}>
                            Approve
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>)
}

export default AcceptDialog;

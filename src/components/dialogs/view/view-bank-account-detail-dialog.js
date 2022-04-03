import {Box, Button, Dialog, DialogActions, DialogContent, Divider, Stack, Typography} from "@mui/material";
import User from "../../shared/user";


const ViewBankAccountDialog = ({open, handleClose, bankAccount}) => {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography mb={4} variant="h6" align="center">
                    Bank Account Detail
                </Typography>

                <Stack
                    divider={<Divider light={true} variant="fullWidth" orientation="horizontal" />}
                    direction="column"
                    spacing={2}>
                    <Box>
                        <Typography gutterBottom={true} variant="body2">Owner</Typography>
                        <User
                            image={bankAccount.user.image}
                            firstName={bankAccount.user.firstName}
                            lastName={bankAccount.user.lastName}
                        />
                        <Typography gutterBottom={true} variant="body2">Email</Typography>
                        <Typography variant="h6">{bankAccount.user.email}</Typography>

                        <Typography gutterBottom={true} variant="body2">Phone</Typography>
                        <Typography variant="h6">{bankAccount.user.phoneNumber}</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom={true} variant="body2">Type</Typography>
                        <Typography variant="h6">{bankAccount.type}</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom={true} variant="body2">Number</Typography>
                        <Typography variant="h6">{bankAccount.number}</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom={true} variant="body2">Balance</Typography>
                        <Typography variant="h6">${bankAccount.balance}</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom={true} variant="body2">Status</Typography>
                        <Typography variant="h6">{bankAccount.status}</Typography>
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    sx={{fontWeight: 'bold', color: 'white'}}
                    color="primary"
                    disableElevation={true}
                    variant="contained"
                    size="medium">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ViewBankAccountDialog;

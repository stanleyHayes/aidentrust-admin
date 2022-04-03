import {Box, Stack, Typography} from "@mui/material";
import moment from "moment";

const UserDetailTab = ({userDetail}) => {
    return (
        <Box>
            <Typography gutterBottom={true} align="center" variant="h6">
                User Information
            </Typography>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Typography variant="body2">First Name</Typography>
                    <Typography variant="h6">{userDetail?.firstName}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Last Name</Typography>
                    <Typography variant="h6">{userDetail?.lastName}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Email</Typography>
                    <Typography variant="h6">{userDetail?.email}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Username</Typography>
                    <Typography variant="h6">{userDetail?.username}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Gender</Typography>
                    <Typography variant="h6">{userDetail?.gender}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Phone Number</Typography>
                    <Typography variant="h6">{userDetail?.phoneNumber}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Emergency Phone</Typography>
                    <Typography variant="h6">{userDetail?.emergencyPhoneNumber}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Funds</Typography>
                    <Typography variant="h6">{userDetail?.funds}</Typography>
                </Box>

                <Box>
                    <Typography variant="body2">Date of Birth</Typography>
                    <Typography variant="h6">
                        {/*{new Date(*/}
                        {/*    userDetail.dateOfBirth.getFullYear(),*/}
                        {/*    userDetail.dateOfBirth.getMonth(),*/}
                        {/*    userDetail.dateOfBirth.getDate())*/}
                        {/*    .toDateString()*/}
                        {/*}*/}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default UserDetailTab;

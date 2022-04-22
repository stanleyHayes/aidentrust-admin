import {Avatar, Stack, Typography} from "@mui/material";

const User = ({firstName, lastName, image}) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {
                image ?
                    <Avatar src={image}/> :
                    <Avatar>
                        <Typography variant="h6">{`${firstName[0]}${lastName[0]}`}</Typography>
                    </Avatar>
            }
            <Typography variant="body2">{`${firstName} ${lastName}`}</Typography>
        </Stack>
    )
}

export default User;

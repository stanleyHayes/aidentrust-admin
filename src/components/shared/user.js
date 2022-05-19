import {Avatar, Stack, Typography} from "@mui/material";
import {grey, purple} from "@mui/material/colors";

const User = ({firstName, lastName, image}) => {

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {
                image ?
                    <Avatar src={image}/> :
                    <Avatar sx={{backgroundColor: purple[100]}}>
                        <Typography sx={{color: 'primary.main'}} variant="h6">{`${firstName[0]}${lastName[0]}`}</Typography>
                    </Avatar>
            }
            <Typography sx={{color: grey[600]}} variant="body2">{`${firstName} ${lastName}`}</Typography>
        </Stack>
    )
}

export default User;

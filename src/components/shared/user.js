import {Avatar, CardHeader, Typography} from "@mui/material";

const User = ({firstName, lastName, image}) => {
    return (
        <CardHeader
            avatar={
                image ?
                    <Avatar src="dat"/> :
                    <Avatar>
                        <Typography variant="h6">{`${firstName[0]}${lastName[0]}`}</Typography>
                    </Avatar>
            }
            title={<Typography variant="body2">{`${firstName} ${lastName}`}</Typography>}/>
    )
}

export default User;

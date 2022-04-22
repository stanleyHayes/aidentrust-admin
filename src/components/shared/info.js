import {Card, CardContent, Stack, Typography} from "@mui/material";
import Feint from "./feint";
import {grey, purple} from "@mui/material/colors";

const Info = ({title, value, icon}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Feint
                        color={purple[50]}
                        padding={0.2}
                        borderRadius={4}
                        children={icon}
                    />

                    <Stack direction="column">
                        <Typography
                            sx={{fontSize: 12, color: grey[600]}}
                            variant="body2">
                            {title}
                        </Typography>

                        <Typography
                            sx={{fontSize: 14, color: grey[700]}}
                            variant="body2">
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Info;

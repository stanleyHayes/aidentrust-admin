import {Card, CardContent, Grid, Typography} from "@mui/material";

const Stat = ({title, value, icon}) => {
    return (
        <Card elevation={1}>
            <CardContent>
                <Grid sx={{mb: 2}} container={true} justifyContent="center">
                    <Grid item={true}>
                        {icon}
                    </Grid>
                </Grid>
                <Typography mb={2} variant="h3" align="center">{value}</Typography>
                <Typography
                    sx={{fontWeight: 600}}
                    mb={2}
                    variant="body2"
                    align="center">{title}</Typography>
            </CardContent>
        </Card>
    )
}

export default Stat;
